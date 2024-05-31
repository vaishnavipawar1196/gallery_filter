import React, { useState } from 'react';
import sdata from './ImgData';
import MenuItem from './MenuItem';
import Cat_btn from './Cat_btn';

//new Set for unique category values
//...uses spread operator for direct array without messy structure
const Cat_menu = [...new Set(sdata.map((currEle) =>  currEle.category)),"all"];
console.log(Cat_menu);

const Card = () => {

    const [item,setItem] = useState(sdata);
    const [catMenu,setMenu] = useState(Cat_menu);
    
    const filterEvent = (currItem) => {
        if(currItem === 'all'){
            setItem(sdata);
            return;
        }
        const updatedItem = sdata.filter((currEle) => {
            return currEle.category === currItem;
        });
        setItem(updatedItem);
    };

    return(
        <>
            
            <h1 className='text-center main-heading my-4'>Order your favourite food.</h1>
            <hr />
            
            <Cat_btn filterEvent={filterEvent} catMenu={catMenu} />

            <MenuItem items={item} />
            
        </>
    );
  
}

export default Card;
