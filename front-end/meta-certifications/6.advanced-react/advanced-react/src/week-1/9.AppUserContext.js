import "./App.css";

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      hello <span className="username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>blog app</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>what is lorem ipsum?</h2>
      <p>
        lorem fkjlkj klkjkd lkjkdf lkja;;l ooejkclj ekjdkjl
      </p>
      <p>written by {user.name}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}


export default Root;
