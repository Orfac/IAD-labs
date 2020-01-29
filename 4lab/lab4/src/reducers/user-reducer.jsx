const initialState = {
    Authorization: sessionStorage.getItem("Authorization") 
    ? sessionStorage.getItem("Authorization"):""
};
const userReducer = function(state = initialState, action){
    switch(action.type){
        case "LOGIN":
            sessionStorage.setItem("Authorization", action.Authorization);
            return Object.assign({}, state, {Authorization:action.Authorization});
        case "LOGOUT":
            sessionStorage.setItem("Authorization", null);
            return Object.assign({}, state, {Authorization:null});
    }
    return state;
};

export default userReducer;