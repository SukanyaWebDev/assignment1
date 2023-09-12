import './index.css'

const Header = () => (
    <nav className="navbarClass">
        <div className="box1">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1156660%2Fecommerce_logo_shopify_icon&psig=AOvVaw0JbUdz3aDD2M5pldmzumDF&ust=1694602825674000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwizlvnM9aSBAxUVbmwGHcK1AmEQjRx6BAgAEAw" alt="shoppifyImg" />
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