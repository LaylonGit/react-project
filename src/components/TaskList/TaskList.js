import PropTypes from "prop-types";

export default function TaskList({ title, newtask, task }) {
  const AddTask = () => {
    newtask("NEW TASK", title);
  };
  return (
    <div className="bg-dark bg-gradient m-1 p-1 bg-opacity-50  col text-center">
      <div className="h6 bg-dark bg-gradient p-1">{title}</div>
      {task.map((data) => {
        return data.state === title ? (
          <div key={data.id}>data.title</div>
        ) : null;
      })}
      <button type="button" className="btn btn-dark" onClick={AddTask}>
        NEW TASK
      </button>
    </div>
  );
}
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  newtask: PropTypes.func.isRequired,
  task: PropTypes.array.isRequired
};
