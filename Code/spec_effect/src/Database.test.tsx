import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { renderFullApp } from "./TestRenderFullApp";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, getCountFromServer } from "firebase/firestore";
import { apiKey, projectId } from "./DatabaseConsts";

// Replace with your actual Firebase config from the console
const firebaseConfig = {
  apiKey: apiKey,
  projectId: projectId
};

describe("Check if database collections exist", () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    test("CPU collection exists", async () => {
        const cpusCollection = collection(db, 'cpus');
        const snapshot = await getCountFromServer(cpusCollection);
        const totalCpus = snapshot.data().count;
        expect(totalCpus).toBeGreaterThan(0);
    });
    test("GPU collection exists", async () => {
        const gpusCollection = collection(db, 'gpus');
        const snapshot = await getCountFromServer(gpusCollection);
        const totalGpus = snapshot.data().count;
        expect(totalGpus).toBeGreaterThan(0);
    });
    test("Laptop collection exists", async () => {
        const laptopsCollection = collection(db, 'laptops');
        const snapshot = await getCountFromServer(laptopsCollection);
        const totalLaptops = snapshot.data().count;
        expect(totalLaptops).toBeGreaterThan(0);
    });
    test("Glossary collection exists", async () => {
        const glossaryCollection = collection(db, 'glossary');
        const snapshot = await getCountFromServer(glossaryCollection);
        const totalGlossaryItems = snapshot.data().count;
        expect(totalGlossaryItems).toBeGreaterThan(0);
    });
});
