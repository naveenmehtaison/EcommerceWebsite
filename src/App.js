import Register from './Components/Registrtion';
import MyRoutes from './Route/MyRoutes';
import DataContext from './Store/auth-context';
import StoreContext from './Store/StoreContext'; // Import StoreContext

function App() {
  return (
    <StoreContext>
      <main>
        <Register />
        <MyRoutes />
      </main>
    </StoreContext>
  );
}

export default App;
