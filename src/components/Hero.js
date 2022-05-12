import React from 'react';
import Header from './Header'
import heroImage from './Cat.png'


function Hero(){
    return(
        <div className='hero'>
            <Header />
            <div className="container">
            <div className="landing">
                <div className="convert">
                    <h1>mary christmas</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt nisi velit excepturi nulla similique amet aspernatur! Odio, porro quo.
                    </p>
                    <div className="btns">
                        <a href="#">buy now</a>
                    </div>
                </div>
                <div className="image">
                    <img src={heroImage} alt="" />
                </div>
            </div>
            </div>
            
        </div>
        
    )
}

export default Hero;