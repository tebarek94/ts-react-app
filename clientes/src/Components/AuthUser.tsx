import React, { useState } from 'react'
interface IProps{

}
interface IState{
isLoggedIn: boolean
}
let AuthUser: React.FC<IProps> = () => {
    let [state, setSetate] = useState<IState>({
        isLoggedIn: false
    });
    let login = () => {
        setSetate({isLoggedIn:true})
    }
     let logout = () => {
        setSetate({isLoggedIn:false})
    }
  return (
      <React.Fragment>
          <div className='container'>
              <div className="row">
                  <div className="col-md-5">
                      {
                          state.isLoggedIn ? <React.Fragment>
                              <div>
                          <p className="h3">Welcome User</p> 
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque dolores, ex laboriosam odit ullam nostrum quisquam consectetur voluptatem vitae nisi pariatur nemo non maxime minus facilis dolorem, ea soluta.</p>
                      </div>
                          </React.Fragment>
                              : <React.Fragment>
                                  <div>
                          <p className="h3">thank You</p> 
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque dolores, ex laboriosam odit ullam nostrum quisquam consectetur voluptatem vitae nisi pariatur nemo non maxime minus facilis dolorem, ea soluta.</p>
                      </div>
                              </React.Fragment>
                      }
                     
                      
                      <div className="row">
                          <div className="col">
                              {
                                  state.isLoggedIn?<button className="btn btn-warning m-1"onClick={logout}>Log out</button>:<button className="btn btn-success m-1" onClick={login}>Login</button>
                              }
                              
                               
                          </div>
                      </div>
                  </div>
              </div>
              
         </div>
    </React.Fragment>
  )
}

export default AuthUser