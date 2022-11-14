import { createContext } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
  const { user } = useState({
    name: 'john',
    email: "johnex@example.com",
    dob: "01/01/2000",
  });
  return <UserContext.Provider></UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
