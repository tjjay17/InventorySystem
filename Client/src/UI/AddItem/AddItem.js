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

    const styles = {
        control: base => ({
          ...base,
          fontFamily: "Times New Roman"
        }),
        menu: base => ({
          ...base,
          fontFamily: "Times New Roman"
        })
      };

    const [inputs, updateInputs] = useState({
        Name:"",
        Description:"",
        Count:"",
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

    let submitInventory = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/operations/createItem',
            {
                Name:inputs.Name, 
                Description:inputs.Description,
                Count:inputs.Count,
                Tags:inputs.tags,
                newTags:inputs.newTags
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div id = 'addContainer' className= {props.open ? 'animateAdd' : 'addBase'}>
            <div id = 'close'>
                <strong>
                    <i style = {{cursor:'pointer'}} onClick = {props.btnHandler} className="large material-icons">close</i>
                </strong>
            </div>
            <form id = 'addForm'>
                <input required name = 'Name' placeholder = 'Name' onChange = {inputChange} value = {inputs.Name}/>
                <input required name = 'Count' placeholder = 'Count' type = 'number' onChange = {inputChange} value = {inputs.Count} />
                <CreatableSelect isMulti placeholder = 'New Tags' onChange = {updateNewTags} styles = {styles}/>
                <Select 
                    isSearchable 
                    isMulti 
                    options = {options} 
                    placeholder = 'Existing Tags' 
                    onChange = {updateTags}
                    styles = {styles}
                />
                <textarea name = 'Description' placeholder = 'Description' onChange = {inputChange} value = {inputs.Description}/>
                <button id = 'submit' type = 'submit' onClick = {submitInventory}>Add Inventory</button>
            </form>
        </div>
    );
}

export default AddItem;