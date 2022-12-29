import styled from 'styled-components';

const TaskWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  border-radius: 20px;
  margin: 0 5% 5% 5%;
`;

// specific styled component
const Title = styled.h3`
  width: 100%;
  margin: 0;
`;

// adds the styling of h3 element in the styled component TaskWrapper
/* 
const TaskWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  border-radius: 20px;
  margin: 0 5% 5% 5%;

  h3 {
    width: 100%;
    margin: 0;
  }
`;
*/

function Task ({ id, title, body, onDragStart }) {
  return (
    <TaskWrapper
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {/* <h3>{title}</h3> */}
      <Title>{title}</Title>
      <p>{body}</p>
    </TaskWrapper>
  );
}

export default Task;

// return without styled-components

/* 
return (
  <div 
    className='Task-wrapper'
    draggable
    onDragStart={(e) => onDragStart(e, id)}
  
  >
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);
*/
