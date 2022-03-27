import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)
   
    // const handleAdd = () => {
    //     //setCategories([ ...categories, 'HunterXHunter' ]);
    //     setCategories( cats =>  [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ol>
                { categories.map( category => 
                        <GifGrid key={category} category={category} />
                )}
            </ol>
        </>
    )
}
