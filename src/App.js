import { Routes, Route } from "react-router-dom";
import userStore from './store/store';
import HomePage from './pages/Home.page';
import SeminarPage from './pages/seminar/List.page';
import NoticeListPage from './pages/notice/List.page';
import UserListPage from './pages/user/List.page';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import './App.css';

function App() {
  const user = userStore((state) => state.user);

  return (
    <Routes>
      {user
        ?
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/seminar" element={<SeminarPage />} />
            <Route path="/notice" element={<NoticeListPage />} />
            <Route path="/user" element={<UserListPage />} />
          </>
        :
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
      }
    </Routes>
  );
}

export default App;
