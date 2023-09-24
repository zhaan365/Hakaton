import React, {useContext} from 'react';
import {FaRegHeart} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import {BsPerson, BsFillPersonFill} from 'react-icons/bs'
import {Link, useLocation} from 'react-router-dom'
import {CustomContext} from "../../../config/context/context";

const Header = () => {

    const {user, logOutUser} = useContext(CustomContext)

    return (
        <header className="header">
            <div className="container">

                <div className="header__nav">

                    <Link to={'/'} className="header__link">
                        STC
                    </Link>
                    <div className="header__menu">
                        <Link to={'/'} className="header__menu-link">
                            Главная
                        </Link>
                        <Link to={'/about'} className="header__menu-link">
                            О нас
                        </Link>
                        <Link to={'/catalog'} className="header__menu-link">
                            Каталог
                        </Link>
                    </div>
                    <div className="header__icons">

                        <Link to={user.email?.length ? '/favorites' : '/login'}>
                            <BiLike className="header__icons-icon"/>
                        </Link>
                        {/*<Link to={user.email?.length ? '/cart' : '/login'}>*/}
                        {/*    <BiShoppingBag className="header__icons-icon2"/>*/}
                        {/*</Link>*/}
                        {
                            location.pathname === '/room' ? <span className="header__icons-span" onClick={logOutUser}><BsFillPersonFill size={27}/></span> : <Link to={user.email?.length ? '/room' : '/login'}>
                                <BsPerson className="header__icons-icon3"/>
                            </Link>
                        }
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;