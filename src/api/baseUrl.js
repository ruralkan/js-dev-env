// this file look at hostname to determine if the app is running in development, if it is
//it will point our mock API which is hosted on port 3001
//if it is in production it will point at that production api that we setup that serves from Express
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}


function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name = name.replace( /[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g," "));
}
