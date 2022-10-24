import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo.png';

export const Navbar = () => {
    return (

        <div className='w-full sticky bg-main'>
            <div className='flex justify-between items-center max-w-screen-xl m-auto'>
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                </div>

                <nav className="nav-bar">
                    <ul className='flex justify-between'>
                        <li className='text-white'>
                            <Link className='py-4 px-4 hover:text-secondary' to={'/movies'}>Filmes</Link>
                        </li>
                        <li className='text-white'>
                            <Link className='py-4 px-4 hover:text-secondary' to={'/tv'}>Shows de Tv</Link>
                        </li>
                        <li className='text-white'>
                            <Link className='py-4 px-4 hover:text-secondary' to={'/best-movies'}>Melhores Filmes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
}