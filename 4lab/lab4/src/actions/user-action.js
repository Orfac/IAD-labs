export function log_in(Authorization) {
    return{
        type: "LOGIN",
        Authorization
    }
}

export function log_out() {
    return{
        type: "LOGOUT"
    }
}