const connection = require('tedious').Connection;
var config = {  
    server: 'inventorysystem12.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'your_username', //update me
            password: 'your_password'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'InventorySystem'  //update me
    }
}; 