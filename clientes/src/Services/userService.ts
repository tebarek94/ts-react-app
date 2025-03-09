import { IUserList } from "../Models/IUserList";

export class userService{
    private static users: IUserList[] = [
        {
            sno: "AA1",
            name: "Tebarek",
            designation: "softare Engineer",
            company: "Sitc avllay",
            age: 12
        },
        {
            sno: "AA13",
            name: "Tebarek",
            designation: "softare Engineer",
            company: "Sitc avllay",
            age: 12
        },
        {
            sno: "AA12",
            name: "Tebarek",
            designation: "softare Engineer",
            company: "Sitc avllay",
            age: 12
        },
        {
            sno: "AA120",
            name: "Tebarek",
            designation: "softare Engineer",
            company: "Sitc avllay",
            age: 12
        },
        {
            sno: "AA1201",
            name: "Tebarek",
            designation: "softare Engineer",
            company: "Sitc avllay",
            age: 12
        },
    ];
    public static getAllUserList() {
        return this.users;
    }
}
