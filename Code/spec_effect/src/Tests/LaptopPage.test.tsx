import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LaptopPage from "../pages/LaptopPage";

const CI_MODE = process.env.CI_MODE === "true";
const testIfNotCI = CI_MODE ? test.skip : test;

function renderLaptopPage() {
    render(
        <MemoryRouter initialEntries={['/laptopPage/0DozvQQZrZR5MwlXZGQR']}>
            <Routes>
                <Route path="/laptopPage/:id" element={<LaptopPage />} />
            </Routes>
        </MemoryRouter>,
    );
}

describe("The page has loaded visually:", () => {
    testIfNotCI("Divider containing contents is present:", async () => {
        renderLaptopPage();
        const laptopDiv = await screen.findByTestId("laptop-items");
        expect(laptopDiv).toBeInTheDocument();
    });

    testIfNotCI("Text within LaptopPage component is present:", async () => {
        renderLaptopPage();
        const lapPageWords = await screen.findByText(/Specs/i);
        expect(lapPageWords).toBeInTheDocument();
    });
});

testIfNotCI("The laptop data is rendered:", async () => {
    renderLaptopPage();
    const cpuType = await screen.findByText(/AMD Ryzen 5 5500U/);
    const ramSize = await screen.findByText(/8 GB/);
    const gpuType = await screen.findByText(/N\/A/);
    const gpuSize = await screen.findByText(/0 MB/);
    const diskType = await screen.findByText(/ssd/);
    const diskSize = await screen.findByText(/512 GB/);
    const price = await screen.findByText(/\$356\.99/);

    expect(cpuType).toBeInTheDocument();
    expect(ramSize).toBeInTheDocument();
    expect(gpuType).toBeInTheDocument();
    expect(gpuSize).toBeInTheDocument();
    expect(diskType).toBeInTheDocument();
    expect(diskSize).toBeInTheDocument();
    expect(price).toBeInTheDocument();
});