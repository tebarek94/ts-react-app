import React, { useState } from 'react'
import { IUserList } from '../Models/IUserList'
import { userService } from '../Services/userService'
interface IProps{
    
}
interface ISteta{
    users:IUserList[]
}
const UesrList: React.FC<IProps> = () => {
    let [state] = useState<ISteta>({
        users: userService.getAllUserList() 
    })

    
  return (
    <React.Fragment>
          <div className='container'>
              <div className="row">
                  <div className="col">
                      <p className="h3 text-center">User List</p>
                  </div>
                  <div className="row">
                       <div className="col">
                      <table className='table table-striped text-center table-hover shadow-lg'>
                          <thead className='bg-black text-white'>
                              <th>SNO</th>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Desitgination</th>
                              <th>Company</th>
                              <th>Action</th>
                              </thead>
                              <tbody>
                                  {
                                      state.users.length > 0 && state.users.map(user => {
                                          return (
                                              <tr key={user.sno}>
                                                  <td>{user.sno}</td>
                                                  <td>{user.name}</td>
                                                  <td>{user.age} yrs</td>
                                                  <td>{user.designation}</td>
                                                  <td>{user.company}</td>
                                                  <td>
                                                      <button className="btn btn-success m-1"> <i className='fa fa-edit'></i> Edit</button>
                                                      <button className="btn btn-danger m-1"> <i className='fa fa-trash'></i>delete</button>
                                                  </td>
                                                  

                                             </tr>
                                         ) 
                                      })
                                  }
                              </tbody>
                      </table>
                  </div>
                  </div>
                  
              </div>
              
          </div>
    </React.Fragment>
  )
}

export default UesrList
