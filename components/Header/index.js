import './index.css'

const Header = () => (
    <nav className="navbarClass">
        <div className="box1">
            <img src="https://images.app.goo.gl/E8WDqkxjtDa1Qn3i6" alt="shoppifyImg" />
            <p>Shopify</p>
            <select className="dropDownClass">
                <option value="Solutions">Solutions</option>
                <option value="Solutions">Solutions</option>
                <option value="Solutions">Solutions</option>
            </select>
            <a href="#" className='price-head'>Pricing</a>
            <select className="dropDownClass">
                <option value="Resouurces">Resources</option>
                <option value="Resouurces">Resouurces</option>
                <option value="Resouurces"> Resouurces</option>
            </select>
        </div>
        <div className="box2">
            <button type="button" className="button button1">Log in</button>
            <button type="button " className="button button2">Start free trail</button>
        </div>
    </nav>
)
export default Header