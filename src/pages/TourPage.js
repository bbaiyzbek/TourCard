import React, {useEffect, useState} from 'react';
import axios from "axios";
import TourCard from "../components/Tour-Card/TourCard";

const TourPage = () => {
    const [tours, setTours] = useState([])

    console.log(tours)

    useEffect(() => {
        axios('https://64f4a858932537f4051a935c.mockapi.io/tour')
            .then(({data}) => {
                setTours(data)
            })
    }, [])
    return (
        <div>
            <TourCard tours={tours}/>
        </div>
    );
};

export default TourPage;