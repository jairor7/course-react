import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h4>
          <i className="bi bi-moon-fill"></i> &nbsp;
          <span>Jairo Rodriguez Sanchez</span>
        </h4>
        <button className="text">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="bi bi-journal-plus"></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
