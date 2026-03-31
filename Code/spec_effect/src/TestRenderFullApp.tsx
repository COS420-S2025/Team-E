import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

export function renderFullApp()
{
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
}