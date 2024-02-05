import React from 'react'
import appstore from '../assets/macstore.png'
const Advertisment = () => {
    return (
        <wrapper>
            <div>
                <div>
                    {/* left box */}
                    <h1>Get upto 20% off on your first transaction on our app !</h1>
                    <p>"Explore endless flavors with our food app! Easy ordering, quick delivery, and delicious meals await. Download now for culinary delight!"</p>
                    <buttonsection>
                        <img src={appstore} alt='logo'/>
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
