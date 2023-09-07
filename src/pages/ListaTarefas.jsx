import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { Link } from 'react-router-dom';
import '../App.css';
import Completed from '../components/Completed';

function ListaTarefas() {
  const [user, setUser] = useState({});
  const [loadPage, setLoadPage] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const location = useLocation();
  const userLocation = location.state;
  useEffect(() => {
    setUser(userLocation);
  }, [userLocation]);
  const navigate = useNavigate();

  useEffect(() => {
    // Carregue as tarefas do localStorage quando o componente for montado
    console.log("Executando useEffect");
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasksFromLocalStorage);
    setTasks(tasksFromLocalStorage);
    
  }, []);

  useEffect(() => {
    // Atualize o localStorage sempre que as tarefas forem alteradas
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleRemoveProduct = (taskToRemove) => {
    const updatedList = tasks.filter(task => task.id !== taskToRemove.id);
    setTasks(updatedList);
  };
  
  const addTask = () => {
    if (newTask.trim() !== '') {
      const id = Date.now(); // Gere um ID único com base no horário atual
      const newTaskObject = {
        id: id,
        task: newTask,
        time: new Date().toLocaleTimeString("pt-BR"),
        isCompleted: false
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const toggleFavorite = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            to={'/ListaTarefas'}
            className="nav-link"
            state={user}
            onClick={() => setLoadPage(true)}
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <button
                onClick={() => setLoadPage(!loadPage)}
                className="nav-link"
              >
                Tasks Completed
              </button>
            </ul>
            <UserDetails username={user.login} avatarUrl={user.avatar_url} />
          </div>
        </div>
      </nav>
      <button
        type="button"
        style={{ position: 'absolute', top: '2%', left: '93%' }}
        onClick={() => {
          setUser(null);
          navigate("/");
        }}
        className="btn btn-danger"
      >
        Logout
      </button>
      <h3>Lista de Tarefas</h3>
      <div>
        {loadPage ? (
          <div>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                toggleFavorite={toggleFavorite}
                task={task}
                isCompleted={task.isCompleted}
                onRemove={handleRemoveProduct}
              />
            ))}
            <input
              type="text"
              value={newTask}
              onChange={(e) => { setNewTask(e.target.value) }}
            />
            <button onClick={addTask} className='buttonTask'>Adicionar</button>
          </div>
        ) : (
          <div>
            <Completed completedTasks={completedTasks} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaTarefas;
