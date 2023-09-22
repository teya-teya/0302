import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Advices } from "./components/Advices";
import { Settings } from "./components/Settings";
import { Friends } from "./components/Friends";
import { Notifications } from "./components/Notifications";

function App(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link">
              Профиль
            </NavLink>
            <NavLink to="advices" className="nav-link">
              Советы
            </NavLink>
            <NavLink to="friends" className="nav-link">
              Друзья
            </NavLink>
            <NavLink to="notifications" className="nav-link">
              Уведомления
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<h3>Ваш личный кабинет. Воспользуйтесь меню слева</h3>}/>
            <Route path="/profile/*" element={<Profile function={props.functions.key_getUser}/>}></Route>
            <Route path="/advices" element={<Advices />}></Route>
            <Route path="/friends" element={<Friends function={props.functions.key_getUsers}/>}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
