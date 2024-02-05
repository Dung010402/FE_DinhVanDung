import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Dashboard from './components/Dashboard';
import User from './components/User';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path="/users/:id" element={<User />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
