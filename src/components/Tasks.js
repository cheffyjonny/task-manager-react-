import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
        (Double click to set remidner)
      </p>
    </>
  )
}

export default Tasks
