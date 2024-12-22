/* eslint-disable react/prop-types */
import "./TaskInput.css";
const TaskInput = ({ newTask, isEditing, handleAction, setNewTask }) => {
  return (
    <>
      <div className="task-input">
        <textarea
          placeholder="Enter your task"
          value={newTask}
          rows="2"
          className="form-control"
          onChange={(e) => setNewTask(e.target.value)}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          onClick={handleAction}
          className="btn btn-primary px-5 mb-5 fs-5"
        >
          {isEditing ? "Update" : "Add Task"}
        </button>
      </div>
    </>
  );
};

export default TaskInput;
