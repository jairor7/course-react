import React from "react";

export const JournalEntry = (props) => {
  console.log(props);
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk94uJ64P52uVxVRRqt5hntKJL8_2_RNNFQA&usqp=CAU)`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un día nuevo</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
