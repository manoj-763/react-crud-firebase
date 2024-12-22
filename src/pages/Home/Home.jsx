import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import NotesContainer from "../../components/note-container/NotesContainer";
import TaskInput from "../../components/task-input/TaskInput";
import TaskFilter from "../../components/TaskFilter";
import Header from "../../components/header/Header";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [filter, setFilter] = useState("all");

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = () => {
    if (!newTask.trim()) {
      toast("Task cannot be empty!", {
        position: "top-right",
        autoClose: 3000,
        });
      return;
    }

    const task = { id: Date.now(), text: newTask, isComplete: false };
    setTasks([...tasks, task]);
    setNewTask("");
    toast("Task successfully added!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast("Task successfully deleted!", {
      position: "top-right",
      autoClose: 3000,
      });
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
    toast("Task successfully Completed!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      });
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setEditTaskId(id);
    setNewTask(taskToEdit.text);
  };

  const updateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: newTask } : task
      )
    );
    setNewTask("");
    setIsEditing(false);
    setEditTaskId(null);
    toast("Task successfully updated!", {
      position: "top-right",
      autoClose: 3000,
      });
  };

  return (
    <div className="container mt-3">
      <Toast />
      <h2 className="py-3">Task Management System</h2>
      <Header user={user} tasks={tasks} handleLogout={handleLogout} />
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        isEditing={isEditing}
        handleAction={isEditing ? updateTask : addTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <TaskFilter setFilter={setFilter} />
      <NotesContainer
        tasks={tasks}
        filter={filter}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Home;
