import React from 'react';
import PropType from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Cargando...</p> }

            <div className='card-grid'>
                { images.map( image =>  <GifGridItem key={image.id} {...image} /> )}
            </div>
        </>
    )
}

GifGrid.propType = {
    category: PropType.string.isRequired
}