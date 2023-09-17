import React from 'react';
import style from './style.module.css'
import GreenBtn from "../buttons/GreenBtn/GreenBtn";
import imgArrow from '../images/Vector 37.png'
import mountainEmoji from  '../images/image 584.png'
import bagEmoji from '../images/image 585.png'


const Contacts = () => {
    return (
        <div className={style.Bg}>
            <div className={style.infoWrap}>
                <div className={style.SignUp}>
                    <p>
                        Хочешь присоединиться и уже выкладывать первые туры на нашем сайте?
                    </p>
                    <GreenBtn/>
                    <span className={style.tapHere}>жми сюда</span>
                    <img className={style.mountain} src={mountainEmoji} alt=""/>
                    <img className={style.bag} src={bagEmoji} alt=""/>
                    <img className={style.arrow} src={imgArrow} alt=""/>
                </div>
                <div className={style.contacts}>
                    <h3>Остались вопросы?</h3>
                    <div>
                        <p>
                            Whatsapp
                        </p>
                        <h5>+996(999)999-999</h5>
                    </div>
                    <div>
                        <p>
                            Telegram
                        </p>
                        <h5>+996(999)999-999</h5>
                    </div>
                    <div>
                        <p>
                            Почта
                        </p>
                        <h5>wanderstrips@gmail.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;