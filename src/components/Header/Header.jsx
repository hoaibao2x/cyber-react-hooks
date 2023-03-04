import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

    let { uLogin } = useSelector(state => state.QLNDReducer);

    let renderName = () => {
        if (uLogin !== null) {
            // Đã đăng nhập
            return <NavLink className="nav-link" to='/profile'>Hello {uLogin.hoTen}</NavLink>
        } else {
            // Chưa đăng nhập
            return <NavLink className="nav-link" to='/login'>Login</NavLink>
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            {renderName()}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/register'>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/counter'>Counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/use-effect'>UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/api-rcc'>API Rcc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/api-rfc'>API Rfc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/usecallback'>UseCallback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/usememo'>UseMemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/useref'>UseRef</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/reduxdemo'>ReduxDemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/api-redux'>ApiRedux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/detail/maPhim123'>Detail</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/profile'>Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
