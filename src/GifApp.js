import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifApp = () => {

const [categories, setCategories] = useState(['Evangelion'])

    return (
        <>
        <h1>Búsqueda de Gifs</h1>
        <AddCategory setCategories={setCategories} />  
        <ol>
            {categories.map((category)=>{
                return <li key={category}>{category}</li>
            })}
        </ol>
        <hr/>
      
        <ol>
            {categories.map((category)=>{
                    return    <GifGrid 
                            key={category}
                            category={category}/>
                })}
        </ol>
        </>
    )
}
