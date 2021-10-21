import React from 'react';

import './preview-collection.style.scss';

import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({ title, items }) =>{
    return (
        <div className='collection-preview'>
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items.filter((item, index)=> index < 4).map(({id, ...otherItemProps})=>{
                        return(
                            <CollectionItem key={ id }  { ...otherItemProps }/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PreviewCollection;