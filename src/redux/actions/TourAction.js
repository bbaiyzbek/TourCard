import axios from "axios";

export  const getTours =()=>{
    return (dispatch)=>{
        axios('https://64f4a858932537f4051a935c.mockapi.io/tour')
            .then(({data}) =>{
                dispatch({type: 'GET_TODO', payload: data})
            })
    }
}

export const editFavorite = value => {
    return (dispatch) => {
        axios.put(`https://64f4a858932537f4051a935c.mockapi.io/tour/${value.id}`, value)
            .then(({data}) => {
                dispatch({type: 'EDIT_FAVORITE', payload: data})
            })
    }
}
