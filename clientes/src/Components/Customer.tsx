import React from "react";

interface IProps {
    name: String,
    age: number,
    dastigantion:string
}

const Customer: React.FC<IProps> = ({name,age,dastigantion}) => {
    return <div>
        <h2>Customer components</h2>
        <ul className="list-group">
            <li className="list-group-item"> Name :{ name}</li>
            <li className="list-group-item"> Age :{ age}</li>
            <li className="list-group-item">Dastigantion { dastigantion}</li>
      </ul>
  </div>;
};

export default Customer;
