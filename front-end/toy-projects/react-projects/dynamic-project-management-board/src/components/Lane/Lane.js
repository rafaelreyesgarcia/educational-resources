import Task from '../Task/Task';
import styled from 'styled-components';

// props are passed from Board.js parent component using map()
// iterating on the lanes array, we create new Lane components given the input data fetched from the REST API and array elements

const LaneWrapper = styled.div`
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

function Lane({ 
  laneId, 
  title, 
  loading, 
  error, 
  tasks, 
  onDragStart, 
  onDragOver, 
  onDrop 
}) {
  return (
    <LaneWrapper 
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, laneId)} // onDragOver and onDrop are invoked on the div (parent)
    >
      <Title>{title}</Title>
      {loading || error ? (
        <span>{error || 'Loading...'}</span>
      ) : (
        tasks.map((task) => (
          <Task 
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart} // ondragStart handler is invoked in Task component (child)
          />
        ))
      )}
    </LaneWrapper>
  );
}

export default Lane;

// return without styled components

/* 
return (
  <div 
    className='Lane-wrapper'
    onDragOver={onDragOver}
  >
    <h2>{title}</h2>
    {loading || error ? (
      <span>{error || 'Loading...'}</span>
    ) : (
      tasks.map((task) => (
        <Task 
          key={task.id}
          id={task.id}
          title={task.title}
          body={task.body}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, laneId)}
        />
      ))
    )}
  </div>
);
*/