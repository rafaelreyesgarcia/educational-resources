import "./App.css";
import {useEffect, useState} from 'react';

// HOC with prefix best practice 

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange );
      /* 
      important to remove any subscription when a component unmouts
      by returning a function from useEffect can perform any cleanup needed
      */
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  
  return (
    <div className="BasicTracker">
      <p>mouse position: </p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div>
      <header>little lemon restaurant 🍋</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
