import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';


export const GifGrid = ({category}) => {

  const {data:images, loading}=  useFetchGifs(category);

   
    return (
        <>
        <h2 className="animate__backInLeft">{category}</h2>
        <div className="card-grid ">
        {loading && <p className="animate__hinge">'Cargando...'</p>}
        {
             images.map((img) =>
              <GifGridItem
              key ={img.id}
              {...img}
              />)
            }
     
        </div>

        
        </>
    )
}
