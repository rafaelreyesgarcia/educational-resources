import "./App.css";

const Button = ({type, children, ...buttonProps}) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button
    type="secondary"
    {...buttonProps}
    // the order of the spread syntax matters for the onClick behavior
    onClick={() => {
      alert('loggin in!');
    }}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div>
      <header className="Header">little lemon restaurant</header>
      <Button type="primary" onClick={() => alert('signing up!')}>
        sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert('signing up!')}>
        login
      </LoginButton>
    </div>
  );
}

export default App;
