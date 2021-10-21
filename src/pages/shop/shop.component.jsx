import React from 'react';

import SHOP_DATA from '../../Data/Shop_Data';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class Shop extends React.Component{
    constructor(){
        super();

        this.state = {
            shopItems: SHOP_DATA
        }
    }

    componentDidMount(){
        console.log(this.state.shopItems)
    }

    render(){
        const collections = this.state.shopItems;
        return(
            <div className="shop-page">
                {
                    collections.map(({id , ...otherCollections})=>
                        (
                            <PreviewCollection key={ id } { ...otherCollections } />
                        )

                    )
                }
                
            </div>
        )
    }
}

export default Shop;