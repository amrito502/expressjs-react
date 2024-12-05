import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddBlogPage from './pages/backend/add-blog-page'
import AllBlogPage from './pages/backend/all-blog-page'
import AddServicePage from './pages/backend/add-service-page'
import AllServicePage from './pages/backend/all-service-page'
import AddTeamPage from './pages/backend/add-team-page'
import AllTeamPage from './pages/backend/all-team-page'


import Index from '../src/pages/client/index'
function App() {
  return (
   <BrowserRouter>
     <Routes>
     
     {/* <Route path="/" element={<Index/>} /> */}


     {/* backend */}
     <Route path="/" element={<AddBlogPage/>} />
     <Route path="/all-blog" element={<AllBlogPage/>} />
     <Route path="/add-service" element={<AddServicePage/>} />
     <Route path="/all-service" element={<AllServicePage/>} />
     <Route path="/add-team" element={<AddTeamPage/>} />
     <Route path="/all-team" element={<AllTeamPage/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
