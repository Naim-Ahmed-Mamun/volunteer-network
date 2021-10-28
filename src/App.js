import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import AdminDashbored from './components/AdminDashbored/AdminDashbored';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import Login from './components/shared/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import UserEvents from './pages/Events/UserEvents';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/events">
              <UserEvents></UserEvents>
            </Route>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <AdminDashbored></AdminDashbored>
            </Route>
            <PrivateRoute exact path="/registerVolunteer/:id">
              <RegisterVolunteer></RegisterVolunteer>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
