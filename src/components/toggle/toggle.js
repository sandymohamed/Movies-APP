import './toggle.css';
import { useContext } from 'react';
import { ThemeContext } from './../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick =() => {
        theme.dispatch({type: "TOGGLE"})
    }
  return (
    <div className='t'>
        <img src="https://img.freepik.com/free-vector/sun-vector-hand-drawn-art_116137-2945.jpg?size=338&ext=jpg&ga=GA1.1.190523240.1620623354" alt="" className='t-icon' />
        <img src="https://img.freepik.com/free-vector/yellow-half-moon-illustration_53876-120775.jpg?size=626&ext=jpg&ga=GA1.2.190523240.1620623354" alt="" className='t-icon' />
        <div className='t-button' 
        onClick={handleClick} 
        style={{
        left: theme.state.darkMode ? 0: 40
}} > </div>
    </div>
  )
}

export default Toggle