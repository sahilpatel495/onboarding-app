import Dashboard from './container/Dashboard';
import "./App.css"
import { useLogify } from 'react-logify';

function App() {
   const { user, onLogin, onLogout } = useLogify();

  return (
    <div className="App">
      <>
        {!user.id && (
          <center style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            heigth: "100vh",
          }}>
            <button onClick={onLogin}>Signup / Login</button>
          </center>
        )}
        {user.id && (
          <>
            <center>
              {user.name}
              
              <button onClick={onLogout}>Logout</button>
            </center>
            <Dashboard />
          </>
        )}
      </>
    </div>
  );
}

export default App;
