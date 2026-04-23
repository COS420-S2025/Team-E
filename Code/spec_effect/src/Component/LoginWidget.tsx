import React, { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// This file was created by hand at first, then modified with AI to fit React
// and Firebase by the GitHub Copilot Chat Feature
// “Rewrite the attatched file to properly use React components and state...”
// Github Copilot, 2026 Feb. version, Github, github.com/features/copilot. Accessed 21 Apr. 2026.

const LoginWidget = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const userCred = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            console.log("Signed in with email:", userCred.user);
            setError("Sign in successful!");
            navigate("/choose-editor");
        } catch (err: any) {
            console.error(err);
            setError("Error: " + err.message || "Error: Email sign-in failed");
        }
    };

    return (
        <form className="adminLoginWidget" onSubmit={handleSubmit}>
            <h3>Admin Login Page</h3>
            <fieldset>
                <p id="emailInputSet">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoFocus
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </p>
                <p id="passwordInputSet">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" id="loginButton">
                    Login
                </button>
            </fieldset>
        </form>
    );
};

export default LoginWidget;
