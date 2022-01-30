import { useState } from "react";
import InputForm from "../../components/Input/InputForm"
import "./Signup.css"
import "../Login/Login.css"
import {useHistory} from "react-router-dom"
export default function Signup (props){
    const history = useHistory()
    const [userData, setUserData] = useState({
        email: null,
        password: null,
        confirm : null

    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        username: "",
        check:true,
        hide: "none"
        // init: true

    })
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    const usernameRegex = /\s/g
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
    const onChange = (e) => {

        if (e.target.id == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...errors,
                email: e.target.value.length == 0 ? "Email is required!" : !emailRegex.test(e.target.value) ? "Email address is invalid!" : null,
                check: (e.target.value.length > 0 && emailRegex.test(e.target.value) && errors.password==null && errors.name==null) ? false : true,
                hide: errors.email!=null ? "none" : "hidden"
            })


        }
        else if(e.target.id == "password"){
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                password: e.target.value.length == 0 ? "Password is required!" : 
                e.target.value.length < 8 ? "Password must be 8 or more characters." : 
                !passwordRegex.test(e.target.value) ? "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character": null,
                confirmPassword: e.target.value!= userData.confirm ? "Unmatched password" : null,
                check: (errors.email==null && e.target.value.length> 0 &&  e.target.value.length >=8 && errors.name==null) ? false : true ,  
                hide: errors.password!=null ? "none" : "hidden"   

            })
        }
        else if (e.target.id == "name"){
            setUserData({
                ...userData,
                name: e.target.value
            })
            setErrors({
                ...errors,
                name: e.target.value.length == 0 ? "Name is required!" :  null,
                check: (errors.email==null && errors.password==null && e.target.value.length >0) ? false : true ,  
                hide: errors.name!=null ? "none" : "hidden"          
            })
        }
        else if(e.target.id == "username"){
            setUserData({
                ...userData,
                username: e.target.value
            })
            setErrors({
                ...errors,
                username: e.target.value.length == 0 ? "User name is required!" :  usernameRegex.test(e.target.value)? "User name must have no spaces": null,
                check: (errors.email==null && errors.password==null && e.target.value.length >0) ? false : true ,  
                hide: errors.name!=null ? "none" : "hidden"          
            })
        }
        else if(e.target.id == "confirmPassword"){
            setUserData({
                ...userData,
                confirm: e.target.value
            })
            setErrors({
                ...errors,
                confirmPassword: e.target.value!= userData.password ? "Unmatched password" : null,
                check: (errors.email==null && e.target.value.length> 0 &&  e.target.value.length >=8 && errors.name==null) ? false : true ,  
                hide: errors.password!=null ? "none" : "hidden"               
            })
        }
        
        

        
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!errors.email && !errors.password) {
            history.push("/")
            console.log(userData)
            
        }

    }
    return(
        <div style={{height:"85vh"}}>
        <form className="container  loginForm col-10 col-md-5" onSubmit={(e) => onSubmit(e)}>
                <h1>Registration</h1>
                <InputForm errors={errors.name} 
                type={"text"}
                label={"Name" } 
                id={"name"}
                handleChange={(e)=>onChange(e)}
                />
                <InputForm errors={errors.email} 
                type={"email"}
                label={"Email" } 
                id={"email"}
                handleChange={(e)=>onChange(e)}
                />
                <InputForm errors={errors.username} 
                type={"text"}
                label={"User Name" } 
                id={"username"}
                handleChange={(e)=>onChange(e)}
                />
                <InputForm errors={errors.password} 
                type={"password"}
                label={"Password " } 
                id={"password"}
                handleChange={(e)=>onChange(e)}
                hide={errors.hide}
                eye={true}
                />            
                <InputForm errors={errors.confirmPassword} 
                type={"password"}
                label={"Confirm Password " } 
                id={"confirmPassword"}
                handleChange={(e)=>onChange(e)}
                hide={errors.hide}
                />            
                <br></br>
                <button type="submit" className="btn btn-success SignupButton" name="button" 
                disabled={errors.check ||
                 errors.email || 
                 errors.password ||
                 errors.name ||
                 errors.username ||
                 errors.confirmPassword
                 }>Register</button>
            </form>
        </div>
    )
}