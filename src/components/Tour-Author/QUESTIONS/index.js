import React from 'react';
import TitleWrap from "../BENEFITS/title/Title-Wrap";
import style from './style.module.css'
import emoji1 from '../images/image 576.png'
import emoji2 from '../images/image 577.png'

const Questions = () => {
    return (
        <div>
            <div className={style.titleWrap}>
                <TitleWrap button={'вопросы-ответы'} h1={'Часто задаваемые вопросы'}/>
                <img className={style.emoji1} src={emoji1} alt=""/>
                <img className={style.emoji2} src={emoji2} alt=""/>
            </div>
        </div>
    );
};

export default Questions;