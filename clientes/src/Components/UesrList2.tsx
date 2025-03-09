import React, {  useEffect, useState } from 'react'
import { UserInterface } from '../Models/UserInterface'
import { UserserviceGetLogic } from '../Services/UserServicegetLogic';
interface IProps{

}
interface IState{
    loading: boolean,
    users: UserInterface[],
    errorMassage : string
}
const UesrList2: React.FC<IProps> = () => {
    let [state, setSteate] = useState<IState>({
        loading: false,
        users: [] as UserInterface[],
        errorMassage: ''
    });
    useEffect(() => {
        
        UserserviceGetLogic.getAllUsersToServer().then((respones) => {
            console.log(respones.data);
            setSteate({
                ...state,
                loading: false,
                users: respones.data,
                
            })
        }).catch((error) => {
            console.log(error.massage);
            setSteate({
                ...state,
                loading : false,
                errorMassage : error.massage
                
            })
        })
    },);
  return (
    <React.Fragment>
    </React.Fragment>
  )
}
export default UesrList2
