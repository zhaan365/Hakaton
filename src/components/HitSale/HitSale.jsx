import React, {useContext, useEffect, Fragment} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../Card/Card";



const HitSale = () => {

    const {hitSale, getHitSale, isLoading} = useContext(CustomContext)

    useEffect(() => {
        getHitSale()
    }, [])



    return (
        <section className="hitSale">
            <div className="container">
                <div className="hitSale__box">
                    <h2 className="hitSale__title">
                        Критерии...
                    </h2>
                </div>
                <div className="hitSale__row">
                    {
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HitSale;