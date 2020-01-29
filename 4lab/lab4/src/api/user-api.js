import axios from 'axios';
import {log_in, log_out} from '../actions/user-action';
import {clear_points} from '../actions/point-action';
import store from '../stores/store';

export function login_try(login, password, history) {
    let params = "?login=" + login + "&&password=" + password;
    console.log(params);
    return axios.post('http://localhost:7654/api/user')
        .then(response => {
            console.log(response.status);
            let authorization = 'Basic ' + btoa(login + ':' + password);
            store.dispatch(log_in(authorization));
            sessionStorage.setItem("Authorization", authorization);
            history.push("/main");
        }).catch(error => {
            console.log(error.toLocaleString());
        });
}

export function register(login, password, history) {
    let params = "?login=" + login + "&&password=" + password;
    console.log(params);
    return axios.post('http://localhost:7654/api/register'+params)
        .then(response => {
            history.push("/");
        }).catch(error => {
            
        });
}

export function logout(history) {
    return axios.get('http://localhost:7654/api' + '/logout',
    {headers:{Authorization:store.getState().userState.Authorization}})
        .then(response =>{
            console.log(response.status);
            store.dispatch(log_out());
            store.dispatch(clear_points());
            history.push("/");
        }).catch(error => {
            console.log("Ошибка: "+ error.toString());
        });
}