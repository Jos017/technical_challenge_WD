import React from "react";
import { Link } from "react-router-dom";

const PhonesList = (props) => {
  const { phones } = props;
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {phones?.map((phone) => {
          return (
            <Link
              key={phone.id}
              className="list-gruop-item list-gorup-items-action"
              to={`/phones/${phone.id}`}
            >
              <img
                width="30px"
                src={`/images/${phone.imageFileName}`}
                alt={phone.name}
              />
              <p>{phone.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PhonesList;