import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChooseUniversity from "./pages/ChooseUniversity";
import ScheduleBuilder from "./pages/ScheduleBuilder";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
   <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choose-university" element={<ChooseUniversity />} />
          <Route path="/schedule-builder" element={<ScheduleBuilder />} />
      </Routes>
   </Router>
  );
}

export default App;
