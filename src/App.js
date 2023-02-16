import HomePage from "modules/HomePage";
import NewsPage from "modules/NewsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/news' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
