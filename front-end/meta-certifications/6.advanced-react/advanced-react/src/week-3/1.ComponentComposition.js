import "./App.css";

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({children}) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
}

const DeleteButton = () => {
  return <Button backgroundColor="red">delete</Button>;
}

function App() {
  return (
    <div className="App">
      <header>little lemon restaurant</header>
      <Alert>
        <h4>delete account</h4>
        <p>are you sure you want to proceed? you will miss it!</p>
        <DeleteButton />
      </Alert>
    </div>
  )
}

export default App;
