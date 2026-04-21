import { getAllGlossaryEntries } from "../DatabaseManager";

const CI_MODE = process.env.CI_MODE === 'true';
const testIfNotCI = CI_MODE ? test.skip : test;

describe("Check if glossary database retrieval function works", () => {
    testIfNotCI("CPU collection exists", async () => {
        const cpusCollection = await getAllGlossaryEntries();
        expect(cpusCollection.length).toBeGreaterThan(0);
        expect(cpusCollection[0].term.length).toBeGreaterThan(0);
        expect(cpusCollection[0].definition.length).toBeGreaterThan(0);
    })
});