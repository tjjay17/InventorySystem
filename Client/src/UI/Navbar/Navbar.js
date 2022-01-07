import './Navbar.css'
const Navbar = (props) =>{
    return (
        <div id = 'navbar'>
            <h1 style = {{color:'white', marginLeft:'5px'}}> Inventory Tracking System</h1>
            <button onClick = {props.btnHandler} id = 'addBtn'>Add New Item</button>
        </div>
    );
}

export default Navbar;