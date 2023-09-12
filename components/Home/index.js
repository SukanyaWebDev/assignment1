import Header from "../Header"
import { AiOutlineCheck } from 'react-icons/ai'
import './index.css'

const Home = () => (
    <div className="home">
        <Header />
        <div className="mainDisplay">
            <div className="offerDisplay">
                <button type=  "button"  className = 'month-button'>Pay Monthly</button>
                <p>Pay Yearly (save 25%)</p>
            </div>
            <div className="card-container">
                <div className="card1">
                    <h1>Basic</h1>
                    <h5>FOR INDIVISUALS & SMALL BUSINESSES</h5>
                    <p>Everything you need to create your store,ship products,and process payments</p>

                    <div className="rupess-container">
                        <h1 className="price">₹1,994
                            <span className="inr-head">INR/mo</span>
                        </h1>
                    </div>

                    <div className="get-container">
                        <p>Get your first 3 months for ₹20/mo</p>
                    </div>

                    <h1 className="list-head">What's included on Basic</h1>

                    <div className="list-container">

                        <AiOutlineCheck className="icon-color" />

                        <p>Basic reports</p>

                    </div>
                    <div className="list-container">

                        <AiOutlineCheck className="icon-color" />

                        <p>Basic reports</p>

                    </div>
                    <div className="list-container">

                        <AiOutlineCheck className="icon-color" />

                        <p>Basic reports</p>

                    </div>
                    <button type = "button" className = 'try-button'> Try for Free</button>
                </div>
                <div>
                    <div className="card2">
                        <h1>Basic</h1>
                        <h5>FOR INDIVISUALS & SMALL BUSINESSES</h5>
                        <p>Everything you need to create your store,ship products,and process payments</p>

                        <div className="rupess-container">
                            <h1 className="price">₹1,994
                                <span className="inr-head">INR/mo</span>
                            </h1>
                        </div>

                        <div className="get-container">
                            <p>Get your first 3 months for ₹20/mo</p>
                        </div>

                        <h1 className="list-head">What's included on Basic</h1>

                        <div className="list-container">
                            <AiOutlineCheck  className="icon-color"/>
                            <p>Basic reports</p>
                        </div>
                        <div className="list-container">

                            <AiOutlineCheck className="icon-color" />

                            <p>Basic reports</p>

                        </div>
                        <div className="list-container">

                            <AiOutlineCheck className="icon-color" />

                            <p>Basic reports</p>

                        </div>
                        <button type = "button" className = 'try-button'> Try for Free</button>
                    </div>
                </div>
                <div>
                    <div className="card2">
                        <h1>Basic</h1>
                        <h5>FOR INDIVISUALS & SMALL BUSINESSES</h5>
                        <p>Everything you need to create your store,ship products,and process payments</p>

                        <div className="rupess-container">
                            <h1 className="price">₹1,994
                                <span className="inr-head">INR/mo</span>
                            </h1>
                        </div>

                        <div className="get-container">
                            <p>Get your first 3 months for ₹20/mo</p>
                        </div>

                        <h1 className="list-head">What's included on Basic</h1>

                        <div className="list-container">
                            <AiOutlineCheck  className="icon-color"/>
                            <p>Basic reports</p>
                        </div>
                        <div className="list-container">

                            <AiOutlineCheck className="icon-color" />

                            <p>Basic reports</p>

                        </div>
                        <div className="list-container">

                            <AiOutlineCheck className="icon-color" />

                            <p>Basic reports</p>

                        </div>
                        <button type = "button" className = 'try-button'> Try for Free</button>
                    </div>
                    
                </div>
                

            </div>
        </div>
    </div>
)
export default Home