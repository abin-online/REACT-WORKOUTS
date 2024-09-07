import { useEffect, useState } from "react"
import { LOGO_URL } from "../util/constant"
import { Link } from "react-router-dom"

const Header = () => {

    const [btnNameReact ,setBtnNameReact ] = useState('LOGIN') 

    useEffect(()=>{
        console.log('useEffect called...')
    },[])
    return (
        <div className="flex justify-between shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-48"
                    src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-12 gap-10 text-xl font-medium ">
                    <li className="transfrom hover:scale-105 transition duration-300">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="transfrom hover:scale-105 transition duration-300">
                        <Link to='/about'>ABOUT US</Link>
                        </li>
                    <li className="transfrom hover:scale-105 transition duration-300">
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                    <li className="transfrom hover:scale-105 transition duration-300">
                        <Link to="/grocery">GROCERY</Link>
                    </li>
                    <li className="transfrom hover:scale-105 transition duration-300">
                        CART</li>
                    <button className=" border-width: 4px; border-black " onClick={()=>{ btnNameReact === 'LOGIN' ? setBtnNameReact('LOGOUT') : setBtnNameReact('LOGIN')  }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header