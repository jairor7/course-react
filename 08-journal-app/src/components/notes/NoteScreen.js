import React from "react";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppBar />
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
        />

        <textarea
          className="notes__textarea"
          placeholder="What happened today"
        />

        <div className="notes__image">
          <img
            src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
};
