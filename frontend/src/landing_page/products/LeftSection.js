import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6 p-2'>
                    <img src={imageURL} className='p-4'></img>
                </div>


                <div className='col-6 mt-5 p-5'>

                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    
                    <div className='mt-3'>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"85px"}}>Learn More</a>
                    </div>
                    
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                    <a href={appStore} style={{marginLeft:"30px"}}><img src='media/images/appstoreBadge.svg'></img></a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;