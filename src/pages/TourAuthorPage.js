import React from 'react';
import Hero from "../components/Tour-Author/HERO";
import AboutUs from "../components/Tour-Author/ABOUT-US";
import Benefits from "../components/Tour-Author/BENEFITS";
import ForWhom from "../components/Tour-Author/FOR-WHOM";
import WorkProcess from "../components/Tour-Author/WORK-PROCESS";
import Comments from "../components/Tour-Author/COMMENTS";
import Contacts from "../components/Tour-Author/CONTACTS";
import Questions from "../components/Tour-Author/QUESTIONS";

const TourAuthorPage = () => {
    return (
        <div className={'container'}>
            <Hero/>
            <AboutUs/>
            <Benefits/>
            <ForWhom/>
            <WorkProcess/>
            <Comments/>
            <Questions/>
            <Contacts/>
        </div>
    );
};

export default TourAuthorPage;