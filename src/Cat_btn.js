import React from "react";

const Cat_btn = ({filterEvent,catMenu}) => {
    return(
        <>          
            <div className='btn_cat d-flex justify-content-center my-4'>
                {catMenu.map((currElem,index) => {
                    return <button key={index} className='btn btn-success mx-3' onClick={() => filterEvent(currElem)}>{currElem}</button>
                })
                }
                {/*<button className='btn btn-success mx-3' onClick={() => filterEvent('breakfast')}>Breakfast</button>
                <button className='btn btn-success mx-3' onClick={() => filterEvent('dinner')}>Lunch</button>
                <button className='btn btn-success mx-3' onClick={() => filterEvent('lunch')}>Dinner</button>
                <button className='btn btn-success mx-3' onClick={() => filterEvent('fastfood')}>Fastfood</button>
                <button className='btn btn-success mx-3' onClick={() => setItem(sdata)}>All</button>*/}
            </div>
        </>
    );
}

export default Cat_btn;