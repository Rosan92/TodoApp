import { JsonForms } from "@jsonforms/react";
import { useState } from "react";
import { todoSchema } from "../schemaFiles/todoSchema";
import { todoUISchema } from "../schemaFiles/todoUiSchema";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import "./TodoHome.css";
import SingleTask from "../singletask/SingleTask";

const TodoHome = () => {
  const [formData, setFormData] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = () => {
    if (isValidFormData(formData)) {
      setTasks([...tasks, formData]);
      setFormData({});
    } else {
      alert("Invalid form data. Please fill all required fields.");
    }
  };

  const isValidFormData = (data) => {
    return (
      data &&
      data.title &&
      data.title.trim() !== "" &&
      data.description &&
      data.description.trim() !== ""
    );
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCompleteToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="d-flex px-2 mx-2" id="todolist">
      <div className="w-100">
        <h2 className="text-center">Add Your Todo List</h2>
        <div>
          <JsonForms
            data={formData}
            schema={todoSchema}
            uischema={todoUISchema}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data }) => handleChange(data)}
          />
          <button
            className="btn btn-success my-4 input-group"
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="w-100">
        {tasks.length > 0 ? (
          <div className="w-100">
            {tasks.map((task, index) => (
              <SingleTask
                task={task}
                key={index}
                index={index}
                handleDelete={handleDelete}
                handleCompleteToggle={handleCompleteToggle}
              />
            ))}
          </div>
        ) : (
          <h2 className="input-group text-center mx-4">Please Add Your Todo</h2>
        )}
      </div>
    </div>
  );
};

export default TodoHome;
