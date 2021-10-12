import React from 'react';

import './directory-menu.style.scss';

import MenuItem from '../menu-item/menu-item.component';

class DirectoryMenu extends React.Component {
    constructor(){
        super();

        this.state = {
            sections:[
                {
                    title:'Hats',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:1
                },
                {
                    title:'Jacket',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2
                },
                {
                    title:'Sneakers',
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3
                },
                {
                    title:'Women',
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:"large",
                    id:4
                },
                {
                    title:'Men',
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:"large",
                    id:5
                }
            ]
        };
    }

    render(){
        return (
          <div className="App">
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
                
            </div>
          </div>
        );
      }
}


export default DirectoryMenu;