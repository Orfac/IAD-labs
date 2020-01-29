import axios from 'axios';
import store from '../stores/store';

import {addPoint, getHistory} from "../actions/point-action";


export function checkPoint(x,y,r){
    let res = false;
    const point = {
        x: x,
        y: y,
        r:r,
        result:res
    };
    return axios.post('http://localhost:7654/'+"api/check", JSON.stringify(point),
    {headers:{'Content-Type': 'application/json',
    'Authorization':store.getState().userState.Authorization}})
        .then(response => {
            const newPoint = {
                x: response.data.x,
                y: response.data.y,
                r: response.data.r,
                result: response.data.result
            };
            store.dispatch(addPoint(newPoint));
        }).catch(error => {
            console.log("Ошибка: "+ error.toString());
        });
}

export function getHistoryFromServer(){
    return axios.get('http://localhost:7654/'+'api/history',{headers:{
            'Authorization':store.getState().userState.Authorization}},{})
        .then(response =>{
            let points = [];
            let jsonData =  JSON.parse(JSON.stringify(response.data));
            for(let i = 0; i < jsonData.length; i++){
                const point = {
                    x: jsonData[i].x,
                    y: jsonData[i].y,
                    r: jsonData[i].r,
                    result: jsonData[i].result
                };
                store.dispatch(addPoint(point));
            }
        }).catch(error => {
            console.log("Ошибка: "+ error.toString());
        });
}

