import server from "./serverConfig";
import jwt from "./jwt";
export default {
    serverUrl: server.url,
    serverPort: server.port,
    facebookAppId: jwt.oauth.facebook.clientID,
    googleClientId: jwt.oauth.google.clientID
}