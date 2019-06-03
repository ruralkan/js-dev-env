//importing whatworkinggroup-tech, this polyfill ensure that this code run s in borwser that dont yet have Fetch support nativily
import 'whatwg-fetch';

export function getUsers(){
    return get('users');
}

function get(url){
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error); //eslint-disable-line no-console
}
