const mongoose = require('mongoose');
const { bulkSave, bulkWrite } = require('../models/InventoryItem');
const InventoryItem = require('../models/InventoryItem');
const Tag = require('../models/Tag');

exports.createItem = async (req, res) =>{
    let itemName = req.body.name;
    let tags = req.body.tags;
    let description = req.body.description;
    let count = req.body.stock;
    let tagNames = [];
    let tagObjs;

    const bulkWriteOps = tags.map(tag => ({
        updateOne:{
            filter:{name:tag.name},
            upsert:true,
            update:{name:tag.name},
            $setOnInsert:{name:tag.name}
        }
    }));

    try{
        await Tag.bulkWrite(bulkWriteOps);
    }catch(e){
        res.status(500).send("Could not create tags", e);
    }
    
    tags.forEach(tag => tagNames.push(tag.name));
    try{   
        tagObjs = await Tag.find({name:{"$in":tagNames}})
    }catch(e){
        res.status(500).send("Could not retrieve tags", e);
    }

    let inventoryItem = new InventoryItem({
        name:itemName,
        stock:count,
        tags:tagObjs.map(tagObj => tagObj._id),
        description:description
    });

    try{
        await inventoryItem.save();
    }catch(e){
        res.status(500).send("Could not save item", e);
    }
    res.status(200).send();
}

exports.delete = (req, res) => {
    let id = req.id;
}

exports.update = (req, res) =>{
    let id = req.id;
    let description = req.description;
    let count = req.count;
    let name = req.name;
}

exports.getAllItems = (req, res) =>{
    //this will read in all the items.
}

