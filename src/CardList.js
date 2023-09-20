import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="mx-10  flex justify-center flex-wrap gap-5 ">
      {robots.map((user) => {
        return <Card key={user.id} id={user.id} name={user.name} />;
      })}
    </div>
  );
};

export default CardList;
