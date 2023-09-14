import React, {useEffect, useState} from 'react';
import axios from "axios";
import TourCard from "../components/Tour-Card/TourCard";
import {useNavigate} from "react-router-dom";
// import TourCard from "../components/Tour-Card/TourCard";

const FavPage = () => {
    const [tours, setTours] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios('https://64f4a858932537f4051a935c.mockapi.io/tour')
            .then(({data}) => {
                setTours(data.filter(el => el.like === true))
            })
    }, [])


    return (
        <div className={'container'}>
            <button onClick={() => navigate(-1)}>back</button>
            <TourCard tours={tours}/>
        </div>
    );
};

export default FavPage;