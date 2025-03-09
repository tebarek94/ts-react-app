import React, { useState } from 'react'
interface IProrps{
    
}
interface ISatate{
massage:string
}
let Greeting: React.FC<IProrps> = () => {
    let [state, setStetate] = useState<ISatate>({
        massage:"Hello"
    })
    let chanegMassage = (greet: string): void => {
        setStetate({
            massage: greet
        })
    }
  return (
      <div className='container mt-3'>
          <div className="row">
              <div className="col-md-5">
                  <div className="card">
                      <div className="card-body">
                          <p className="h3">{ state.massage}</p>
                          <button className="btn btn-success m-1" onClick={()=>chanegMassage("Good Mornning")}>Good Morning</button>
                          <button className="btn btn-warning m-1" onClick={()=>chanegMassage("Good Afternoon")}>Good Afternoon</button>
                          <button className="btn btn-danger m-1"onClick={()=>chanegMassage("Good Evening")}>Good Evening</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Greeting