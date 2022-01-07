const InventoryItem = (props) =>{
//when you read in each item, you can also obtain the tags from the db as well. The
//tags can be converted into Inventory Tag Components and then added to the Inventory Item.
    return(
        <div id = 'itemContainer'>
            <h3>Item Name:{props.name}</h3>
            <h3>Item Description:{props.desc}</h3>
            <h3>Item Count:{props.count}</h3>

            <div id = 'tagSection'>

            </div>
        </div>
    );
}

export default InventoryItem;