import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { Movies } from './pages/Movies';
import { Search } from './pages/Search';
import { Tv } from './pages/Tv';
import { BestMovies } from './pages/BestMovies';
import { Home } from './pages/Home';

export const Rotas = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path='/' element={<Home />} />
                    <Route path='tv' element={<Tv />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='best-movies' element={<BestMovies />} />
                    <Route path='search' element={<Search />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )

}