import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import Login from '../pages/Login.jsx'
import Todo from '../pages/Todo.jsx'
import About from '../pages/About.jsx'

export default function AllRoute(){
    return(
        <div>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/todo' element={<Todo/>}/>
    </Routes>

        </div>
    )
};