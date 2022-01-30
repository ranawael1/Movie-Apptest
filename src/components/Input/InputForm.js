import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons'

export default function InputForm(props){

    const [eye, setEye] = useState({
        value: faEyeSlash,
        type : "password",
        hide: "hidden"
    })
    const showPassword =  (e)=>{
        if (eye.value == faEyeSlash){
           setEye({
               ...eye,
               value:faEye,
               type : "text",

           })
        }
        else{
            setEye({
                ...eye,
                value:faEyeSlash,
                type : "password",
            })
        }


    }
    return(
        <>
         <div className="form-group input-div">
                    <label htmlFor="exampleInputEmail1">{props.label}</label>
                   <div className="parent">
                       <input type={props.type== "password"? eye.type : props.type} 
                    className={`form-control input-field ${(props.errors==null || props.errors=="")? "": "border-danger" }`}
                    id={props.id} 
                    aria-describedby="emailHelp" 
                    onChange={(e)=> props.handleChange(e)}
                    name={props.type}
                    />
                     {props.eye && <span onClick={(e)=>showPassword(e)} 
                    className="eye"><FontAwesomeIcon icon={eye.value} />
                    </span>}
                   </div>
                    
                </div>
                {/* {
                    props.hide?
                    <small id="emailHelp" className="form-text text-danger"  style={{visibility:`${props.errors ? "none" :"hidden"}`}} >     {props.errors?props.errors:"hide"}
             
                    </small>
             :
                <small id="emailHelp" className="form-text text-danger"  style={{visibility:"hidden"}} >     {props.errors?props.errors:"hide"}
                
                </small>
                } */}
                
      
                <small id="emailHelp" className="form-text text-danger"  style={{visibility: "none"}} >     {props.errors?props.errors:""}
                
                </small>

        
        
             
            
         
        
        </>
    )
}