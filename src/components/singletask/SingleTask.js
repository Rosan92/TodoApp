import getBackground from "../../helper/getBackground";

const SingleTask = ({ task, index, handleDelete, handleCompleteToggle }) => {
  return (
    <div
      className="tasklist"
      style={{
        backgroundColor: getBackground(task.priority),
      }}
    >
      <h2 className="text-center">No.{index + 1}</h2>
      <hr />
      <h4>Title : {task.title}</h4>
      <p>
        <strong>Description : </strong>
        {task.description}
      </p>
      <p>
        <strong>Due Date : </strong>
        {task.dueDate}
      </p>
      <p>
        <strong>Priority : </strong>
        {task.priority}
      </p>

      <button
        className="btn btn-primary px-2"
        onClick={() => handleDelete(index)}
        disabled={task.completed ? false : true}
      >
        Delete
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleCompleteToggle(index)}
      >
        {task.completed ? "Undo Complete" : "Mark as Complete"}
      </button>
      <hr />
    </div>
  );
};

export default SingleTask;
