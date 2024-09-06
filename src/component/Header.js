import { useEffect, useState } from "react"
import { LOGO_URL } from "../util/constant"

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
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                    <button className="login" onClick={()=>{ btnNameReact === 'LOGIN' ? setBtnNameReact('LOGOUT') : setBtnNameReact('LOGIN')  }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header