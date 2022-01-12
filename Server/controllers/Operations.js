const mongoose = require('mongoose');
const InventoryItem = require('../models/InventoryItem');
const Tag = require('../models/Tag');

exports.create = (req, res) =>{
    let name = req.name;
    let tags = req.tags;
    let description = req.description;
    let count = req.count;

    res.status(200);
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

