import axios from "axios"
export class UserserviceGetLogic {
    private static ServerURL: string = "http://localhost:5000";
    public static getAllUsersToServer() {
        let dataURL: string = `${this.ServerURL}/users`;
        return axios.get(dataURL);
    }
}