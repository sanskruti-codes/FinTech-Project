import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mb-4 '>
            <div className='row mb-4'>

                <div className='col-6 mt-4 p-5' style={{ marginBottom: "70px" }} >
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <div className='mt-3'>
                    <a href={learnMore} >Learn More</a>
                    </div>
                    
                </div>

                <div className='col-6' style={{ marginTop: "-79px" }}>
                    <img src={imageURL} className='p-4'></img>
                </div>

            </div>
        </div>
     );
}

export default RightSection;