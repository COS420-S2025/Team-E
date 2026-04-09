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
                <p id="passwordInputSet">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required></input>
                </p>
                <button type="submit" id="loginButton">
                    Login
                </button>
            </fieldset>
        </form>
    );
};
export default LoginWidget;
