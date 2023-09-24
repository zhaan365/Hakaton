import React, {useState} from 'react';
import tab1 from '../../assets/tabs/tab1.jpg'
import tab2 from '../../assets/tabs/tab2.png'
import tab3 from '../../assets/tabs/tab3.jpg'



const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <section className="tabs">
            <div className="container">

                <h2 className="tabs__title">
                    Основные комфортные стабильности проживания для граждан КР
                </h2>

                <div className="tabs__row">
                    <div
                        className={toggleState === 1 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(1)}
                    >Безопасность:</div>
                    <div
                        className={toggleState === 2 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(2)}
                    >Экон-ая устойчивость:</div>
                    <div
                        className={toggleState === 3 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(3)}
                    >Чистая среда:</div>
                </div>
                <div className="tabs__tabs">
                    <div
                        className={toggleState === 1 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab1} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <p className="tabs__tabs-text">
                                    Безопасность - это один из фундаментальных аспектов качества жизни <br/>
                                    граждан и общества в целом. Она охватывает широкий спектр аспектов, <br/>
                                    включая физическую, экономическую, социальную и кибербезопасность. <br/>
                                    Обеспечение безопасности требует усилий со стороны правительства, <br/>
                                    органов правопорядка и гражданского общества. Комбинация эффективных <br/>
                                    стратегий, законов и мер безопасности способствует созданию стабильного <br/>
                                    и безопасного общества, в котором граждане могут развиваться и процветать. <br/>
                                    Стабильность политической среды и соблюдение прав и свобод граждан <br/>
                                    способствуют политической безопасности.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 2 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-info">
                                <p className="tabs__tabs-text">
                                    Экономическая устойчивость - это ключевой фактор для процветания <br/>
                                    страны и благополучия её граждан. Она характеризуется способностью <br/>
                                    экономики справляться с изменениями, кризисами и вызовами, не теряя <br/>
                                    при этом свою стабильность и потенциал для роста. Стабильность <br/>
                                    национальной валюты и низкая инфляция создают предсказуемость в <br/>
                                    экономике, что способствует инвестициям и сохранению покупательной <br/>
                                    способности у граждан. Здоровое состояние банковской системы, контроль <br/>
                                    над долгами и финансовые резервы помогают предотвратить финансовые кризисы.
                                </p>
                            </div>
                            <div className="tabs__tabs-imgs">
                                <img src={tab2} alt="" className="tabs__tabs-img"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 3 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab3} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <p className="tabs__tabs-text">
                                    Чистая среда - это состояние окружающей среды, в которой отсутствует <br/>
                                    загрязнение и сохраняется её природная устойчивость и биоразнообразие. <br/>
                                    Экологически чистая среда является важным аспектом для здоровья человека, <br/>
                                    благополучия общества и сохранения природных ресурсов. Доступ к чистой <br/>
                                    питьевой воде важен для здоровья и гигиеничных целей. Загрязнение водных <br/>
                                    ресурсов может привести к распространению водных болезней и ухудшению экосистем.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Tabs;