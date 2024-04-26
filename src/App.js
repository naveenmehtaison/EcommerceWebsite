
import Register from './Components/Registrtion';
import MyRoutes from './Route/MyRoutes';


function App() {
  return (
    <main>
      <Register/>
      <>
    <MyRoutes/>
    </>
    </main>


    // <main>
    //   <Home/>
    //   <div>
    //     <Router>
    //       <Route path='http://localhost:3000/home'><Home/></Route>
    //       <Route path='/about'><About/></Route>
    //       <Route path='/contactus'><Contact/></Route>
    //       <Route path='http://localhost:3000/store'><StoreContext/></Route>
    //     </Router>
    //   </div>
    // </main>
  )
}

export default App;
