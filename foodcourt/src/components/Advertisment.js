import React from 'react'
import appstore from '../assets/macstore.png'
import playstore from '../assets/google-play-badge.png'
const Advertisment = () => {
    return (
        <wrapper>
            <div>
                <div>
                    {/* left box */}
                    <h1>Get upto 20% off on your first transaction on our app !</h1>
                    <p>"Explore endless flavors with our food app! Easy ordering, quick delivery, and delicious meals await. Download now for culinary delight!"</p>
                    <buttonsection className='flex items-center'>
                        <img src={appstore} alt='logo' className='w-44 h-14' />
                        <img src={playstore} alt='logo' className='w-52 h-20 ' />

                    </buttonsection>
                </div>
                <div>
                    {/* right box */}
                </div>
            </div>
        </wrapper>
    )
}

export default Advertisment
