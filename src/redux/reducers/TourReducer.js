const initialState = {
    tour: [],

}

export default  function TourReducer( state = initialState, action ) {
    switch (action.type) {
        case 'GET_TODO':
            return {...state, tour: action.payload}
        case 'EDIT_FAVORITE':
            return {...state, tour: state.tour.map(tour => tour.id === action.payload.id ? action.payload : tour)}

        default:
            return state
    }
}