/* eslint-disable react/prop-types */
import './Header.css'

const Header = ({ user, tasks, handleLogout }) => {
  return (
    <div className="pending-logout">
      <div className="my-0">
        <p style={{ fontSize: "18px" }}>Pending Tasks:</p>
        {tasks.length > 0 && (
          <div className="task-status">
            <p>{tasks.filter((task) => !task.isComplete).length}</p>
          </div>
        )}
      </div>

      <div className="logout-button">
        <p className="mb-0">{user && user.email}</p>
        <button onClick={handleLogout} className="btn btn-danger ms-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
