import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../context';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import '../../App.css';
//  ----------------------------------------------------------------------------------------------

const Nav = () => {
  const list = useSelector(state=> state.favList)
  const {themeContext, setThemeContext} = useContext(ThemeContext);

  const [myIcon, setMyIcon]= useState(faMoon);
  const handleTheme = () => {
    setMyIcon((myIcon === faMoon)? faSun : faMoon)
    setThemeContext(themeContext === "normal" ? "darkMode" : "normal")
  }

  return (
    <div >
      <nav className={`navbar navbar-expand-lg  ${themeContext}`}>
        <div className={`container-fluid ${themeContext}`}>
          <Link className="navbar-brand  logo" to='/' >Watch</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className=" " id="navbarNav">
            <ul className="navbar-nav d-flex flex-start flex-row">
              <li className="nav-item ms-2 ">
                <Link className="nav-link  text-warning active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item ms-2 ">
                <Link className="nav-link text-warning"  to='/movies'>All Movies</Link>
              </li>

              <li className="nav-item ms-2 ">
                <Link className="nav-link text-warning"  to='/trends'>Trends</Link>
              </li>

              <li className="nav-item ms-2 ">
                 <Link className="nav-link text-warning  " to='/myfav'>
                 <FontAwesomeIcon icon="fa-solid fa-heart"  className='fs-3'  />
                        {list}
                 </Link>
       
             </li>

             <li className="nav-item ms-2 ">
                 <Link className="nav-link text-warning" onClick={()=>handleTheme()}>
                 <FontAwesomeIcon icon={myIcon} className='fs-3' />                                
                 </Link>
       
             </li>
            </ul>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;


