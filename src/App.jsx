import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import useAuthStore from "./store/authStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/firebase";
function App() {
  const [authUser] = useAuthState(auth);
  return (
    <>
      <PageLayout>
        <Routes>
          <Route
            path='/'
            element={authUser ? <HomePage /> : <Navigate to='/auth' />}
          />
          <Route
            path='/auth'
            element={authUser ? <Navigate to='/' /> : <AuthPage />}
          />
          <Route path='/:username' element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
