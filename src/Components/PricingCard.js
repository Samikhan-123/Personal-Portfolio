import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = () => {
    return (
        <>
            <h2 className='pricing-heading'>Pricing</h2>
            <div className='pricing'>
                <div className="cards">
                    <h3 className='h1'>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='price'>$100</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link className='btn-dark' to="/contact">Purchase Now</Link>
                </div>

                <div className="cards">
                    <h3 className='h1'>- Premium -</h3>
                    <span className='bar'></span>
                    <p className='price'>$200</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link className='btn-dark' to="/contact">Purchase Now</Link>
                </div>

                <div className="cards">
                    <h3 className='h1'>- Business -</h3>
                    <span className='bar'></span>
                    <p className='price'>$500</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link className='btn-dark' to="/contact">Purchase Now</Link>
                </div>
            </div>
        </>
    )
}

export default PricingCard
