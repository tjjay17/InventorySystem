import './AddItem.css'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
import {useState} from 'react';

const AddItem = (props) =>{
    const options = [
        {value:1, label:'Chris'},
        {value:2, label:'Tom'},
        {value:3, label:'Bob'},
        {value:4, label:'Billy'}
    ]

    const [inputs, updateInputs] = useState({
        Name:"",
        Description:"",
        Count:0,
        tags:{},
        newTags:{}
    });

    let updateTags = (tags) =>{
        updateInputs(prev =>({
            ...prev,
            tags
        }));
    }

    let updateNewTags = (newTags) =>{
        updateInputs(prev =>({
            ...prev,
            newTags
        }));
    }

    let inputChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        updateInputs(prev => ({
            ...prev,
            [name]:value
        }));
    }

    let submitInventory = (e) =>{
        e.preventDefault();

    }

    return (
        <div id = 'addContainer'>
            <div id = 'close'>
                <strong>
                    <i style = {{cursor:'pointer'}} onClick = {props.btnHandler} className="large material-icons">close</i>
                </strong>
            </div>
            <form id = 'addForm'>
                <input name = 'Name' placeholder = 'Name' onChange = {inputChange} value = {inputs.Name}/>
                <input name = 'Count' placeholder = 'Count' type = 'number' onChange = {inputChange} value = {inputs.Count} />
                <textarea name = 'Description' placeholder = 'Description' onChange = {inputChange} value = {inputs.Description}/>
                <CreatableSelect isMulti placeholder = 'New Tags' onChange = {updateNewTags}/>
                <Select 
                    isSearchable 
                    isMulti 
                    options = {options} 
                    placeholder = 'Existing Tags' 
                    onChange = {updateTags}
                />
                <button id = 'submit' type = 'submit' onClick = {submitInventory}>Add Inventory</button>
            </form>
        </div>
    );
}

export default AddItem;