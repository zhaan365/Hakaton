import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import {Link} from "react-router-dom";
import i from "../../assets/contact/i.png";
import w from "../../assets/contact/w.png";
import t from "../../assets/contact/t.png";
import f from "../../assets/contact/f.png";
import ava1 from "../../assets/contact/ava1.jpg";
import ava2 from "../../assets/contact/ava2.jpg";
import ava from "../../assets/contact/ava.png";
import ava3 from "../../assets/contact/ava3.jpg";
import ava4 from "../../assets/contact/ava4.jpg";
import ava5 from "../../assets/contact/ava5.jpg";
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {AiOutlineApple} from 'react-icons/ai'



const About = () => {
    return (
        <section className="about">
            <div className="container">

                <div className="checkout__link">
                    <Link to={'/'} className="checkout__link-text">
                        Главная
                    </Link>

                    <span><HiOutlineArrowNarrowRight/></span>

                    <p className="checkout__link-text2">
                        О нас
                    </p>
                </div>
                <div className="about__titles">
                    <div className="about__titles-box">
                        <h2 className="about__title">
                            STC
                        </h2>
                        <div className="about__titles-row">
                            <h3 className="about__titles-subtitle">
                                <span>S</span>ave
                            </h3>
                            <h3 className="about__titles-subtitle">
                                <span>T</span>he
                            </h3>
                            <h3 className="about__titles-subtitle">
                                <span>C</span>ity
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="about__desc">
                    <h3 className="about__desc-text">
                        <span>Мы</span> компания, нацеленная на удовлетворение потребностей граждан, являемся организацией, которая призвана предоставлять продукты, услуги или решения, направленные на улучшение качества жизни и удовлетворение потребностей общества. Мы стремимся предоставлять высококачественные продукты или услуги, которые соответствуют ожиданиям и потребностям клиентов.
                    </h3>
                </div>

                <div className="about__top">

                    <img src={ava} className="about__top-img"/>

                    <div className="about__top-info">

                        <div className="about__top-top">

                            <h2 className="about__top-title">
                                <span>Джефф Безос</span> (37 лет)
                            </h2>
                            <div className="about__top-icons">
                                <Link to={'https://www.instagram.com/'} className="about__top-link"><img className="about__top-icon" src={i} alt=""/></Link>
                                <Link to={'https://web.whatsapp.com/'} className="about__top-link"><img className="about__top-icon" src={w} alt=""/></Link>
                                <Link to={'https://web.telegram.org/a/'} className="about__top-link"><img className="about__top-icon" src={t} alt=""/></Link>
                                <Link to={'https://ru-ru.facebook.com/'} className="about__top-link"><img className="about__top-icon" src={f} alt=""/></Link>
                            </div>

                        </div>

                        <div className="about__top-bottom">
                            <h3 className="about__top-subtitle">
                                Основатель
                            </h3>
                            <p className="about__top-tel">
                                <span><AiOutlinePhone size={22}/></span>
                                +(996) 52-65-85
                            </p>
                        </div>

                        <p className="about__top-text">
                            Видный предприниматель и вдохновительный лидер, который смог преодолеть множество трудностей и превратить свою идею в процветающий бизнес. История началась с амбициозной визии, которую я постоянно развивал и совершенствовал. Умело использовал собственный опыт, знания о рынке и стратегическое мышление, чтобы построить интернет-магазин, который завоевал широкую аудиторию и приобрел популярность.
                        </p>


                    </div>



                </div>
                <div className="about__row">

                    <div className="about__card">

                        <img src={ava1} alt="" className="about__card-img"/>
                        <h3 className="about__card-title">
                            Стив Джобс
                        </h3>
                        <div className="about__card-stars">
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star2"/>
                        </div>
                        <h3 className="about__card-subtitle">
                            Директор
                        </h3>

                        <p className="about__card-tel">
                            <span><AiOutlinePhone size={20}/></span>
                            +(996) 52-65-85
                        </p>

                    </div>
                    <div className="about__card">

                        <img src={ava2} alt="" className="about__card-img"/>
                        <h3 className="about__card-title">
                            Марк Цукерберг
                        </h3>
                        <div className="about__card-stars">
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star2"/>
                            <AiFillStar className="about__card-star2"/>
                        </div>
                        <h3 className="about__card-subtitle">
                            Управляющий
                        </h3>

                        <p className="about__card-tel">
                            <span><AiOutlinePhone size={20}/></span>
                            +(996) 52-65-85
                        </p>

                    </div>
                    <div className="about__card">

                        <img src={ava3} alt="" className="about__card-img"/>
                        <h3 className="about__card-title">
                            Илон Маск
                        </h3>
                        <div className="about__card-stars">
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star2"/>
                            <AiFillStar className="about__card-star2"/>
                            <AiFillStar className="about__card-star2"/>
                        </div>
                        <h3 className="about__card-subtitle">
                            Заместитель директора
                        </h3>

                        <p className="about__card-tel">
                            <span><AiOutlinePhone size={20}/></span>
                            +(996) 52-65-85
                        </p>

                    </div>
                    <div className="about__card">

                        <img src={ava4} alt="" className="about__card-img"/>
                        <h3 className="about__card-title">
                            Билл Гейтс
                        </h3>
                        <div className="about__card-stars">
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star2"/>
                        </div>
                        <h3 className="about__card-subtitle">
                            Руководитель
                        </h3>

                        <p className="about__card-tel">
                            <span><AiOutlinePhone size={20}/></span>
                            +(996) 52-65-85
                        </p>

                    </div>
                    <div className="about__card">

                        <img src={ava5} alt="" className="about__card-img"/>
                        <h3 className="about__card-title">
                            Ларри Пейдж
                        </h3>
                        <div className="about__card-stars">
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                            <AiFillStar className="about__card-star"/>
                        </div>
                        <h3 className="about__card-subtitle">
                            Администратор
                        </h3>

                        <p className="about__card-tel">
                            <span><AiOutlinePhone size={20}/></span>
                            +(996) 52-65-85
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;