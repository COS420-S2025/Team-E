import React from "react";
const LoginWidget = () => {
    return (
        <form className="adminLoginWidget">
            <h3>Admin Login Page</h3>
            <fieldset>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoFocus
                        required></input>
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        required></input>
                </p>
            </fieldset>
            <button type="submit" id="loginButton">
                Login
            </button>
        </form>
    );
};
export default LoginWidget;
