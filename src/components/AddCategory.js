import React, {useState} from 'react'

export const AddCategory = ({categories, setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputValueChange=(e)=>{
    setInputValue(e.target.value);
}
const handleOnSubmit =(e)=>{
    e.preventDefault();
    if( inputValue.trim().length>2){
        setCategories((categorias)=>[inputValue,...categorias]);
        setInputValue('');
    } 
}

    return (
        <form onSubmit= {handleOnSubmit}>
        <input type="text"
        value={inputValue}
        onChange={handleInputValueChange}
        />     
        </form>
    )
}
