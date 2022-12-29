import { useEffect, useState} from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import './Board.css';


const lanes = [
  { id: 1, title: 'Projects' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Done' },
  { id: 4, title: 'To Do' },
];

// setData sets ID for the task being dragged to dataTransferObject
function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}

function onDragOver(e) {
  e.preventDefault();
}

function Board() {
  const [loading, error, data] = 
    useDataFetching(`http://localhost:3000/tasks`);

  // local state that is overwritten by fetching data from useDataFetching
  // used to display tasks from the Lane component
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData('id');

    const updatedTasks = tasks.filter((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className='Board-wrapper'>
      {lanes.map((lane) => (
        <Lane 
          key={lane.id} 
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
          onDragStart={onDragStart} // event handler for the onDragStart event passed to the Lane component
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export default Board;
