import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getCountFromServer,
} from "firebase/firestore";
import { projectId } from "../DatabaseConsts";
import "setimmediate";

// Replace with your actual Firebase config from the console
const firebaseConfig = {
    projectId: projectId,
};

describe("Check if database collections exist", () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    test("CPU collection exists", async () => {
        const cpusCollection = collection(db, "cpus");
        const snapshot = await getCountFromServer(cpusCollection);
        const totalCpus = snapshot.data().count;
        expect(totalCpus).toBeGreaterThan(0);
    });
    test("GPU collection exists", async () => {
        const gpusCollection = collection(db, "gpus");
        const snapshot = await getCountFromServer(gpusCollection);
        const totalGpus = snapshot.data().count;
        expect(totalGpus).toBeGreaterThan(0);
    });
    test("Laptop collection exists", async () => {
        const laptopsCollection = collection(db, "laptops");
        const snapshot = await getCountFromServer(laptopsCollection);
        const totalLaptops = snapshot.data().count;
        expect(totalLaptops).toBeGreaterThan(0);
    });
    test("Glossary collection exists", async () => {
        const glossaryCollection = collection(db, "glossary");
        const snapshot = await getCountFromServer(glossaryCollection);
        const totalGlossaryItems = snapshot.data().count;
        expect(totalGlossaryItems).toBeGreaterThan(0);
    });
});
