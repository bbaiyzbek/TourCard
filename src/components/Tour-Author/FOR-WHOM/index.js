import React from 'react';
import TitleWrap from "../BENEFITS/title/Title-Wrap";
import ForImg from  '../images/Group 145456.png'
import style from './style.module.css'
const ForWhom = () => {
    return (
        <div>
        <div className={style.title}>
            <TitleWrap button={'для кого'} h1={'Кто может разместить тур'}/>
        </div>
            <div>
                <img src={ForImg} alt=""/>
            </div>
        </div>
    );
};

export default ForWhom;