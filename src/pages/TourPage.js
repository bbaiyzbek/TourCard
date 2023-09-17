import React, {useEffect, useState} from 'react';
import TourCard from "../components/Tour-Card/TourCard";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getTours} from "../redux/actions/TourAction";
import {Link} from "react-router-dom";
import TourAuthorPage from "./TourAuthorPage";

const TourPage = () => {
    // const [tours, setTours] = useState([])
    const dispatch = useDispatch()

    const tours = useSelector(state => state.tour.tour)

    useEffect(() => {
        dispatch(getTours())
    }, [])



    return (
        <div className={'container'}>
            <Link to={'/favs'}><button>Favs Page</button></Link>
            <Link to={'/tour-author'}><button>Tour Author Page</button></Link>
            <TourCard tours={tours}/>


        </div>
    );
};

export default TourPage;