import { Header, Footer } from "./main-components";
import { UserProvider } from "./context/user-context";
import { LocationProvider } from "./context/location-context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Account, About, Projects, SignUp, Error } from "./pages";
import SendRequest from "./pages/SendRequest";

function App() {
  return (
    <div>
      <Router>
        <LocationProvider>
          <UserProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acount" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/send-request" element={<SendRequest />} />
              <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
          </UserProvider>
        </LocationProvider>
      </Router>
    </div>
  );
}

export default App;
