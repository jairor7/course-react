import React from "react";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h4>
          <i class="bi bi-moon-fill"></i> &nbsp;
          <span>Jairo Rodriguez Sanchez</span>
        </h4>
        <button className="text">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i class="bi bi-journal-plus"></i>
        <p>New entry</p>
      </div>
      <section className="journal__sidebar-task">
        <div className="journal__sidebar-list">
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
          </ul>
        </div>
      </section>
    </aside>
  );
};
