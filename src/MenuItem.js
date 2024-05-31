import React from "react";

const MenuItem = (props) => {
    return(
        <>
            {props.items.map((ele) => {
                const {id,name,img_src,category,price,description} = ele;
                return (
                        <div className='col-md-4' key={id}>
                            <div className='card_div'>
                                <div className='card_img'>
                                    <img src={ele.img_src} style={{width:'100%',height:'150px'}} />
                                </div>
                                <div className='card_info'>
                                    <h2>{ele.name}</h2>
                                    <p>{ele.description}</p>
                                    <div className='card_order'>
                                        <h3>{ele.price}</h3>
                                        <button className='ordert_btn btn btn-primary'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                );
            })
            }
        </>
    );
};

export default MenuItem;