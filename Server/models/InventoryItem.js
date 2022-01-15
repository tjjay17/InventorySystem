const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    date_created:{
        type:Date,
        required:true,
        default:Date.now
    },
    stock:{
        type:Number,
        min:0,
        required:true
    },
    tags:[{type:mongoose.Schema.Types.ObjectId, ref:'Tag'}],
    description:{
        type:String
    }
});

const inventoryItem = mongoose.model('InventoryItem',inventoryItemSchema);
module.exports = inventoryItem;