import React from 'react';

const NavBarList = ({items}) => {
    
    const getItem = (item) =>{
        let itemList = null;
        switch(item.type){
            case 'logo':
                itemList = <img  className='h-5' src={item.src} alt={item.name}/>
                break;
            default:
                itemList = <p>{item.name}</p>
                break;
        }
        return itemList
    }
    return (
        <ul className='flex gap-7'>
            {items.map(item=>{
                return <li>{getItem(item)}</li>
            })}
        </ul>
    );
};

export default NavBarList;