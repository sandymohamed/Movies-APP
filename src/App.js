import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';
import Nav from './components/nav/nav';
import MovieDetails from './components/pages/movieDetails/MovieDetails';
import AllMovies from './components/pages/allMovies/AllMovies';
import NotFoundPage from './components/pages/notFound/NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-brands-svg-icons';
import FavMovies from './components/pages/FavMovies/FavMovies';
import {  useState } from 'react';
import { ThemeContext } from './components/context';
import TrendsMovies from './components/pages/trendsMovies/TrendsMovies';
// import Loader from './components/loader/loader';
// import { useSelector } from 'react-redux';

library.add(fas)



function App() {
  const [themeContext, setThemeContext]= useState('normal')
  // const isLoading = useSelector((state)=> state.loader.isLoading)

  return (

    <ThemeContext.Provider value={{themeContext, setThemeContext}}>
      <div className={themeContext} style={{width:' 100%', height :'100%'}}>

    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/myfav" element={<FavMovies />} />
      <Route path="/trends" element={<TrendsMovies />} />
      <Route path="/movie/:id" element={<MovieDetails style={{'height': '100px'}} />} />
           {/* redirect in v6 */}
           <Route
        path="/home"
        element={<Navigate to="/" replace />}
    />
      <Route path="*" element={<NotFoundPage />} />
      
    </Routes>

  </BrowserRouter>
  </div>
  </ThemeContext.Provider>

  );
}

export default App;
