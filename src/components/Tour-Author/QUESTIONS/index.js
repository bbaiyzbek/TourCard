import React from 'react';
import TitleWrap from "../BENEFITS/title/Title-Wrap";
import style from './style.module.css'
import emoji1 from '../images/image 576.png'
import emoji2 from '../images/image 577.png'
import DropDown from "./Dropdown";

const Questions = () => {
    return (
        <div>
            <div className={style.titleWrap}>
                <TitleWrap button={'вопросы-ответы'} h1={'Часто задаваемые вопросы'}/>
                <img className={style.emoji1} src={emoji1} alt=""/>
                <img className={style.emoji2} src={emoji2} alt=""/>
            </div>
            <div className={style.dropdownWrapper}>
                <div className={style.dropdownCol}>
                    <DropDown question={'Это бесплатно?'}/>
                    <DropDown question={'Как начать работать с Wanders?'}/>
                    <DropDown question={'Как вы проверяете организаторов?'}/>
                </div>
                <div className={style.dropdownCol}>
                    <DropDown question={'Какой должен быть опыт организации?'}/>
                    <DropDown question={'Сколько это стоит?'}/>
                    <DropDown question={'Какие требования к авторам туров?'}/>
                </div>
            </div>
        </div>
    );
};

export default Questions;