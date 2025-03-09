import React from "react";
// import AuthUser from "./Components/AuthUser";
import UesrList from "./Components/UesrList";
// import LoginForm from "./Components/LoginForm";
// import Customer from "./Components/Customer";
// import Counter from "./Components/Counter";
// import Greeting from "./Components/Greeting";
// import NavBar from "./Components/NavBar";
// import Hero from "./Components/Hero";

const App: React.FC = () => {
  return (
    <div className="container mt-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">App Components</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sint neque, sunt unde aperiam dolor illo. Sit temporibus explicabo reiciendis ullam dolore quod dolorem dignissimos accusamus rerum eum, at voluptatum.
            </p>
            <button className="btn btn-success btn-sm">
              <i className="fa fa-book"></i> Book Now
            </button>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <Customer name="Tebarek"  age={34} dastigantion="software enginner"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header display-1">Counter component</div>
              <Counter count={0} />
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <Greeting />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <LoginForm />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <AuthUser />
          </div>
  </div> */}
        <div className="row">
          <div className="col">
            <UesrList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
