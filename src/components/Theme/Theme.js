import React from 'react';
import {faMoon,faLightbulb} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Theme.css"
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Store/actions/theme';

function Theme(props) {
    const theme = useSelector(state=>state.theme.theme)
    const dispatch = useDispatch()
    return (
        <div className='theme'>
            {theme=="light"? 
            <FontAwesomeIcon icon={faMoon} className='theme-icon' size='lg' onClick={()=>dispatch(setTheme("dark"))}/>
            :
            <FontAwesomeIcon icon={faLightbulb} className='theme-light' size='lg' onClick={()=>{dispatch(setTheme("light"))}}/>
    }
        </div>
    );
}

export default Theme;