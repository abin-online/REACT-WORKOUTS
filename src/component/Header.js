import { LOGO_URL } from "../util/constant"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="menu-items">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}
export default Header