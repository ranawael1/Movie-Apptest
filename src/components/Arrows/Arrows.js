import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import "./Arrows.css"
import { useSelector } from 'react-redux';

function Arrows(props) {
    const theme = useSelector(state => state.theme.theme)
    const Pre = () => {
        let page = parseInt(props.page)
        if (page == 1) {
            props.history.push(`/500`)
        }
        else {
            props.history.push(`/${page - 1}`)
        }

    }
    const Next = () => {
        let page = parseInt(props.page)
        if (page == 500) {
            props.history.push(`/1`)
        }
        else {
            props.history.push(`/${page + 1}`)
        }

    }
    return (
        <>
                    <button type="button" onClick={() => Pre()} className={"btn " + (theme == "light" ? "btn-dark" : "btn-light ") + " arrow arrow-left"}><FontAwesomeIcon icon={faAngleLeft} /> Previous</button>
                    <button type="button" onClick={() => Next()} className={"btn " + (theme == "light" ? " btn-dark" : "btn-light ") + " arrow arrow-right"} >Next <FontAwesomeIcon icon={faAngleRight} /></button>
        

        </>
    );
}

export default Arrows;