import React, { useState } from 'react'
import { IUser } from '../Models/IUser'
interface IState{
    user: IUser

}
interface IProps{

}
let LoginForm: React.FC<IProps> = () => {
    let [state,setStetate] = useState<IState>({
        user :{
            username: '',
            password:''
        }
    })
    let UpdatedInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setStetate({
            user: {
                ...state.user,
                [event.target.name]:[event.target.value]
          }
      })
        
    }
    let loginHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state.user)
    }
  return (
      <React.Fragment>
          <pre>{ JSON.stringify(state.user)}</pre>
          <div className='container'>
              <div className="row">
                  <div className="col-md-4">
                      <div className="card">
                          <div className="card-header text-center bg-primary text-white">
                              <p className="h3">Login Here</p>
                          </div>
                          <div className="card-body">
                              <form onSubmit={loginHandler}>
                              <input type='text'
                                  required={true}
                                  name="username"
                                  className='form-control'
                                  value={state.user.username}
                                  onChange={UpdatedInput}
                                  placeholder='Username' />
                              <input type='password'
                                  value={state.user.password}
                                  onChange={UpdatedInput}
                                   required={true}
                                  name='password'
                                  className='form-control' placeholder='Password' />
                                  <input type='submit' className='btn btn-success' value="Login" />
                                  </form>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
    </React.Fragment>
  )
}

export default LoginForm