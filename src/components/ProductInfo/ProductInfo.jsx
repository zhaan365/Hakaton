import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";
import {AiFillLike} from 'react-icons/ai'


const ProductInfo = ({product}) => {

    const {favorites, favoritesHandler} = useContext(CustomContext)

    return (
        <div className="product__info">
            <img className="product__info-img" src={`/${product.image}`} />

            <div className="product__info-info">
                <div className="product__info-top">
                    <h2 className="product__info-title">
                        {product.title}
                    </h2>
                    <p className="product__info-sum">
                        количество голосовании: <span className="product__info-num">34 000</span>
                        <span className="product__info-icon">
                            <AiFillLike size={20}/>
                        </span>
                    </p>
                </div>
                <p className="product__info-subtitle">
                    Краткая проблема:
                </p>
                <p className="product__info-text">
                    {product.description}
                </p>
            </div>
            {/*<p className="product__info-link" onClick={() => favoritesHandler(product)}>*/}
            {/*    {*/}
            {/*        favorites.some(el => el.id === product.id) ? <AiFillHeart size={18} color={'red'}/> : <AiOutlineHeart size={18}/>*/}
            {/*    }*/}
            {/*    Добавить в желаемое*/}
            {/*</p>*/}

        </div>
    );
};

export default ProductInfo;