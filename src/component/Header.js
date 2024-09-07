import { useEffect, useState } from "react"
import { LOGO_URL } from "../util/constant"
import { Link } from "react-router-dom"

const Header = () => {

    const [btnNameReact ,setBtnNameReact ] = useState('LOGIN') 

    useEffect(()=>{
        console.log('useEffect called...')
    },[])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="menu-items">
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT US</Link>
                        </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                    <li>CART</li>
                    <button className="login" onClick={()=>{ btnNameReact === 'LOGIN' ? setBtnNameReact('LOGOUT') : setBtnNameReact('LOGIN')  }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header