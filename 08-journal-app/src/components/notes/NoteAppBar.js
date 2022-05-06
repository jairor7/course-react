import React from "react";

export const NoteAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>29 de agosto de 2020</span>
      <div>
        <button className="text default">Picture</button>&nbsp;
        <button className="text default">Save</button>
      </div>
    </div>
  );
};
