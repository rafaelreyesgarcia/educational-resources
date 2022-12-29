import Task from '../../components/Task/Task';
import useDataFetching from '../../hooks/useDataFetching';
import './Backlog.css';

function Backlog() {
  const [loading, error, tasks] = useDataFetching(`http://localhost:3000/tasks`);
  // data state returning from the hook is renamed as tasks
  return (
    <div className='Backlog-wrapper'>
      <h2>backlog</h2>
      <div className='Tasks-wrapper'>
        {loading || error ? (
          <span>{error || 'loading...'}</span>
        ) : (
          tasks.map((task) => (
            <Task 
              key={task.id}
              title={task.title}
              body={task.body}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Backlog;

