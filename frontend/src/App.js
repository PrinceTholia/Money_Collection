import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
// import Login from './Pages/authentication/auth-forms/AuthLogin';

// import Navigation from './Components/Navigation';
import Register from './Pages/Register';
import Donate from './Pages/Donate';
import Collect from './Pages/Collect';
import Main from './Pages/Main';


function App() {
    return (
        <>

            <Router>
                {/* <Navigation/>    */}
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" exact element={<Login />} />
                    {/* <Route path="/login" component={LoginPage} exact/> */}
                    <Route path="/register" exact element={<Register />} />
                    <Route path="/donate" exact element={<Donate />} />
                    <Route path="/collect" exact element={<Collect />} />
                    <Route path="/main" exact element={<Main />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;
