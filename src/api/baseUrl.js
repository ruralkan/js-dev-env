// this file look at hostname to determine if the app is running in development, if it is
//it will point our mock API which is hosted on port 3001
//if it is in production it will point at that production api that we setup that serves from Express
export default function getBaseUrl() {
    const inDevelompment = window.location.hostname == 'localhost';
    return inDevelompment ? 'http://localhost:3001/' : '/';
}
