// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter,Routes, Route,  } from "react-router-dom";

import Header from './components/Header'
// import SuggestionVideoCard from './components/SuggestionVideoCard'
import Feed from './components/Feed'
// import LeftNav from './components/LeftNav'
// import LeftNavMenuItem from './components/LeftNavMenuItem'
import SearchResult from './components/SearchResult'
// import SearchResultVideoCard from './components/SearchResultVideoCard'
import VideoDetails from './components/VideoDetails'
// import VideoCard from './components/VideoCard'

import { AppContext } from "./context/contextApi";


function App() {
  return (
    
      <AppContext>
        <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
        </BrowserRouter>
        </AppContext>
        
    
  );
}

export default App;
