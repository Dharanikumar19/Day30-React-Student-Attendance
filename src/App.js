import "./sb-admin-2.css";
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StudentList from "./StudentList";
import Attandance from "./Attandance";
import AddAttandance from "./AddAttandance";

function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
        <Navbar/>
        <div class="container-fluid">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/students-list" element={<StudentList/>}></Route>
            <Route path="/student/:id" element={<Attandance/>}></Route>
            <Route path="/add-attendance/:id" element={<AddAttandance/>}></Route>
          </Routes>
        </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;
