/* eslint-disable react/prop-types */

const TaskFilter = ({ setFilter }) => {
  return (
    <div className="d-flex justify-content-center gap-1 pb-4">
      <button className="btn btn-dark px-3 py-3" onClick={() => setFilter("all")}>
        All Tasks
      </button>
      <button
        className="btn btn-dark px-3 py-3"
        onClick={() => setFilter("completed")}
      >
        Completed Tasks
      </button>
    </div>
  );
};

export default TaskFilter;
