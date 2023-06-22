import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("AngelMoralesM10@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => { //event handler triggered when the login form is submitted
        //it takes event object "e" as a parameter
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)//The function uses the fetch function to make a GET request to 
                                                                // http://localhost:8088/users with a query parameter email set to the value of the email variable.
                                                                //The email value is passed as part of the URL using string interpolation (${email}).
            .then(res => res.json())                            //res stands for response. this is to prepare the res as JSON AKA understandable  JS data
            .then(foundUsers => {                               //In this .then block we are putting the data into foundUsers the variable
                if (foundUsers.length === 1) {                    //The code checks if foundUsers is an array and if it contains exactly one user (foundUsers.length === 1) with the email they provided.
                                                                 //Only if there is one user (not non or multiple) it assumes that the login is valid and proceeds with the following steps.
                    const user = foundUsers[0] 
                    localStorage.setItem("mimo_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Finding MiMo's Instruments</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Click here to register</Link>
            </section>
        </main>
    )
}
