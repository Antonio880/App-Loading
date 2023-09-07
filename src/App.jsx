
import { Route, Routes } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import ListaTarefas from './pages/ListaTarefas';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<TelaLogin />} />
      <Route path="/" element={<TelaLogin />} /> 
      <Route path='/ListaTarefas' element={<ListaTarefas />}/>   
    </Routes>
  );
}

export default App;
