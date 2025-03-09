import React, { useState } from "react";

interface IProps {
  count: number;
}

const Counter: React.FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(0); 

  const incr = () => {
    setCount((prevCount) => prevCount + 1); // Use functional update
  };

  const decr = () => {
    setCount((prevCount) => prevCount - 1); // Use functional update
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3">{count}</p> {/* Fixed syntax */}
                <button className="btn btn-success me-2" onClick={incr}>INCR</button>
                <button className="btn btn-danger" onClick={decr}>DECR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
