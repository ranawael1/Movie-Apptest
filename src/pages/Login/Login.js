import { useState } from "react"
import "./Login.css"
import InputForm from "../../components/Input/InputForm"
import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { useHistory } from "react-router-dom"
export default function Login() {
    let history = useHistory()
    const [userData, setUserData] = useState({
        email: null,
        password: null

    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        check: true,
        hide: "none"
        // init: true

    })
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    const onChange = (e) => {

        if (e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...errors,
                email: e.target.value.length == 0 ? "Email is required!" : !regex.test(e.target.value) ? "Email address is invalid!" : null,
                check: (e.target.value.length > 0 && regex.test(e.target.value) && errors.password == null) ? false : true,
                hide: errors.email != null ? "none" : "hidden"
            })


        }
        else if (e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                password: e.target.value.length == 0 ? "Password is required!" : e.target.value.length < 8 ? "Password must be 8 or more characters." : null,
                check: (errors.email == null && e.target.value.length > 0 && e.target.value.length >= 8) ? false : true,
                hide: errors.password != null ? "none" : "hidden"
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
    return (
        <div style={{ height: "85vh" }}>
            <form className="container  loginForm col-10 col-md-5" onSubmit={(e) => onSubmit(e)}>
                <h1>Login </h1>
                <InputForm errors={errors.email}
                    type={"email"}
                    label={"Email Adress"}
                    id={"email"}
                    handleChange={(e) => onChange(e)}
                />
                <InputForm errors={errors.password}
                    type={"password"}
                    label={"Password "}
                    id={"password"}
                    handleChange={(e) => onChange(e)}
                    hide={errors.hide}
                    eye={true}
                />
                <br></br>
                <button type="submit" className="btn btn-success loginButton" name="button"
                    disabled={errors.check ||
                        errors.email ||
                        errors.password
                    }>Login</button>
            </form>

        </div>

    )
}