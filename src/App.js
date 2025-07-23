import logo from './logo.svg';
import { useState } from 'react';


function App() {


  const [task, setTask] = useState('');
  const [obj, setObj] = useState([]);

  function remove(indexToRemove) {
    const updatedTasks = obj.filter((_, index) => index !== indexToRemove);
    setObj(updatedTasks);
  }

  function Btn() {
    setObj([...obj, { name: task }]);
    setTask("");

  }
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="text-primary fw-bold">TO DO LIST</h2>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="form-control w-50 me-3"
          placeholder="Enter your task"
        />
        <button onClick={Btn} className="btn btn-success">
          Add Task
        </button>
      </div>
      <div className="table-responsive w-75 mx-auto">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>NO</th>
              <th>Task</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {obj.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><button style={{ border: "none", padding: "5px", backgroundColor: "red", color: "white" }} onClick={() => remove(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
