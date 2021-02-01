import React, {useState} from 'react';
import {navigate} from '@reach/router';


function SearchBar(){
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });


    function onChangeHandler(e){
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    function onSubmitHandler(e){
        e.preventDefault();
        navigate("/"+ formState.option + "/" + formState.id);

    }

    const btnstyle={
        backgroundColor:"blue",
        padding: '12px',
        borderRadius: '10px',
        fontSize: '20px',
        margin: "10px",
        color:'white'
    }

    const inputstyle={
        backgroundColor:"grey",
        padding:"5px",
        borderRadius: "5px",
        fontSize: '20px'
    }

    const labelstyle={
        fontSize:"20px",
        margin:"10px"
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <label style={labelstyle}>Search for: </label>
            <select name="option" value={formState.option} onChange={onChangeHandler} style={inputstyle}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            <label style={labelstyle}>ID:</label>
            <input name="id" value={formState.id} onChange={onChangeHandler} style={inputstyle}/>
            <button style={btnstyle}>Search</button>
        </form>
    )

}
export default SearchBar;