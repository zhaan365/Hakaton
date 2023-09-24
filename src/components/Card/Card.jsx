import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import img from "../../assets/eldar/card1.jpg";
import {BiSolidLike} from 'react-icons/bi'


const Card = ({item}) => {

    const {favorites, favoritesHandle} = useContext(CustomContext)

    return (

        <div className="card2">

            <Link to={`/product/${item.id}`} className="card2__link">
                <img src={`/${item.image}`} alt="" className="card2__img"/>
            </Link>

            <div className="card2__text">
                <h2 className="card2__title">
                    {item.title}
                </h2>
                <span onClick={() => favoritesHandle(item)}>
                {
                    favorites.some(el => el.id === item.id) ? <BiSolidLike color={'red'} size={25}/> : <BiSolidLike size={25}/>
                }
            </span>
            </div>
        </div>
    );
};

export default Card;