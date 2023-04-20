import { Routes, Route } from "react-router-dom";
import userStore from './store/store';
import HomePage from './pages/Home.page';
import SeminarListPage from './pages/seminar/List.page';
import SeminarWritePage from './pages/seminar/Write.page';
import SeminarDetailPage from './pages/seminar/Detail.page';
import NoticeListPage from './pages/notice/List.page';
import NoticeWritePage from './pages/notice/Write.page';
import NoticeDetailPage from './pages/notice/Detail.page';
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
            <Route path="/seminar" element={<SeminarListPage />} />
            <Route path="/seminar/write" element={<SeminarWritePage />} />
            <Route path="/seminar/:id" element={<SeminarDetailPage />} />
            <Route path="/notice" element={<NoticeListPage />} />
            <Route path="/notice/write" element={<NoticeWritePage />} />
            <Route path="/notice/:id" element={<NoticeDetailPage />} />
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
