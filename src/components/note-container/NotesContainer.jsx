/* eslint-disable react/prop-types */

import "./NotesContainer.css";

const NotesContainer = ({
  tasks,
  filter,
  toggleComplete,
  editTask,
  deleteTask,
}) => {
  const filteredTasks = tasks.filter((task) =>
    filter === "completed" ? task.isComplete : true
  );
  console.log(filteredTasks);
  return (
    <div className="notes-container row">
      {filteredTasks.map((task, index) => (
        <div
          key={task.id}
          className={`note-card col-lg-3 col-md-4 col-sm-6 m-3 p-0 ${
            task.isComplete ? "completed" : ""
          }`}
        >
          <div className="note-content">
            <h4 className="note-title">Task {index + 1}</h4>
            <p className="note-text">{task.text}</p>
          </div>
          <div className="note-actions">
            <button
              className="btn btn-complete"
              onClick={() => toggleComplete(task.id)}
            >
              {task.isComplete ? "Undo" : "Complete"}
            </button>
            <button className="btn btn-edit" onClick={() => editTask(task.id)}>
              Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesContainer;
