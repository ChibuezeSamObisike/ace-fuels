import AceImpact from "modules/AceImpact";
import HomePage from "modules/HomePage";
import NewsPage from "modules/NewsPage";
import PeoplePage from "modules/PeoplePage";
import Programmes from "modules/Programmes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/people' element={<PeoplePage />} />
      <Route path='/programmes' element={<Programmes />} />
      <Route path='/ace-impact' element={<AceImpact />} />
    </Routes>
  );
}

export default App;
