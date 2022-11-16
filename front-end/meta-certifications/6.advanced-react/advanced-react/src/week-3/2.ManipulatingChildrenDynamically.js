import * as React from 'react';
import './App.css';

const Row = ({ children}) => {
  const childStyle = {
    marginLeft: `${spacing}px`
  };

  return (
    <div className="App">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>pizza margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>rafael</p>
      </Row>
    </div>
  )
}

function App() {

}

export default App;
