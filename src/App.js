import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./componnents/UserList";
import AddUser from "./componnents/AddUser";
import EditUSer from "./componnents/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUSer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
