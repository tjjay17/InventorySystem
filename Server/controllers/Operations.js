exports.create = (req, res) =>{
    let name = req.name;
    let tags = req.tags;
    let description = req.description;
    let count = req.count;

    if(!name){
        res.statusMessage("Null Item Name");
        res.status(400);
    }

    if(count < 1){
        res.statusMessage("Invalid Item Quantity");
        res.status(400);
    }
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
