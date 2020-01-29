export function addPoint(point){
    return{
      type: "ADD_POINT",
      point
    };
}

export function getHistory(points) {
    return{
        type: "GET_HISTORY",
        points
    };
}

export function clear_points() {
    return{
        type: "CLEAR_POINTS"
    };
}