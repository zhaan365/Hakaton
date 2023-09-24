import React, { useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import api from "../../config/api/api";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ava from '../../assets/ava.jpg'


const Product = () => {

    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    }, [])

    console.log(product);

    if ('id' in product){
        return (
            <>
                <section className="product">
                    <div className="container">

                        <div className="checkout__link">
                            <Link to={'/'} className="checkout__link-text">
                                Главная
                            </Link>

                            <HiOutlineArrowNarrowRight size={20} className="checkout__link-icon"/>

                            <p className="checkout__link-text2">
                                {product.title}
                            </p>
                        </div>

                        <ProductInfo product={product}/>

                        <p className="product__text">
                            {product.text} <span>2дн 5ч</span>
                        </p>

                        <div className="product__center-nav">
                            <div className="product__center">
                                <img src={ava} alt=""/>
                                <div className="product__center-left">
                                    <textarea className="product__center-input" placeholder="Може добавьте свои комментарии...">

                                    </textarea>
                                    <button className="product__center-btn">
                                        Добавить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product__nav">
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                            <div className="product__ava">
                                <img src={ava} alt=""/>
                                <div className="product__ava-info">
                                    <div className="product__ava-box">
                                        <h2 className="product__ava-title">
                                            Eldar Zhaanbaev
                                        </h2>
                                        <p className="product__ava-subtitle">
                                            Группа чата: KNU
                                        </p>
                                    </div>
                                    <p className="product__ava-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum dolores facere ipsam nulla recusandae! . . . .
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    } else {
        return <h2>Загрузка...</h2>
    }



};

export default Product;