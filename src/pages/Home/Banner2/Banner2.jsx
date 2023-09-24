import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';

import banner from '../../../assets/banner/card2.jpg'
import banner2 from '../../../assets/banner/card3.jpg'
import banner3 from '../../../assets/banner/card4.jpg'
import banner4 from '../../../assets/banner/card5.jpg'
import React from "react";
import {Link} from "react-router-dom";


const Banner2 = () => {

    return (
        <section className="banner">
            <div className="container">

                <div className="banner__row">

                    <Swiper
                        autoplay={
                            {delay: 1000}
                        }
                        speed={1500}
                        effect={'flip'}
                        grabCursor={true}
                        modules={[EffectFlip, Autoplay]}
                        className="mySwiper banner__mySwiper"
                    >
                        <SwiperSlide>
                            <img className="banner__img" src={banner}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner4}/>
                        </SwiperSlide>
                    </Swiper>

                    <div className="banner__info">
                            <h2 className="banner__info-title">
                                Человек и Государство
                            </h2>

                            <p className="banner__info-text">
                                Взаимодействие гражданина с государством <br/>
                                является важной основой демократического <br/>
                                общества, где граждане имеют права и <br/>
                                обязанности, а государство служит интересам <br/>
                                своих граждан и стремится к справедливому и <br/>
                                эффективному управлению.
                            </p>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Banner2;