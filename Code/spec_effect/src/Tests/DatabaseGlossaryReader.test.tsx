import { getAllEntries } from "../DatabaseGlossaryReader";

const CI_MODE = process.env.CI_MODE === 'true';
const testIfNotCI = CI_MODE ? test.skip : test;

describe("Check if glossary database retrieval function works", () => {
    testIfNotCI("CPU collection exists", async () => {
        const cpusCollection = await getAllEntries();
        expect(cpusCollection.length).toBeGreaterThan(0);
        expect(cpusCollection[0].term.length).toBeGreaterThan(0);
        expect(cpusCollection[0].definition.length).toBeGreaterThan(0);
    })
});