const initialState = {
    points:[]
};

function points (state=initialState, action) {
    switch(action.type){
        case "ADD_POINT":
            state.points.push(action.point);
            return state;
        case "GET_HISTORY":
            state.points = action.points;
            return state;
        case "CLEAR_POINTS":
            state.points = [];
            return state;

    }
    return state;
}

export default points;