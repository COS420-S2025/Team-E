import {
    collection,
    getCountFromServer,
    addDoc,
    deleteDoc
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "setimmediate";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const CI_MODE = process.env.CI_MODE === 'true';
const testIfNotCI = CI_MODE ? test.skip : test;

describe("Check if database collections exist", () => {
    testIfNotCI("Laptop collection exists", async () => {
        const laptopsCollection = collection(db, "laptops-squashed");
        const snapshot = await getCountFromServer(laptopsCollection);
        const totalLaptops = snapshot.data().count;
        expect(totalLaptops).toBeGreaterThan(0);
    });
    testIfNotCI("Glossary collection exists", async () => {
        const glossaryCollection = collection(db, "glossary");
        const snapshot = await getCountFromServer(glossaryCollection);
        const totalGlossaryItems = snapshot.data().count;
        expect(totalGlossaryItems).toBeGreaterThan(0);
    });
});


describe("Ensure non-admins can't write to database collections", () => {
    testIfNotCI("Laptops collection disallows writing for non-admins", async () => {
        const collectionToTest = collection(db, "laptops-squashed");
        const data = { "name": "TEST"};

        // Added await here!
        await expect(addDoc(collectionToTest, data)).rejects.toThrow(
            expect.objectContaining({
                code: 'permission-denied',
            })
        );
    });
    testIfNotCI("Glossary collection disallows writing for non-admins", async () => {
        const collectionToTest = collection(db, "glossary");
        const data = { "term": "TEST", "definition": "test"};

        // Added await here!
        await expect(addDoc(collectionToTest, data)).rejects.toThrow(
            expect.objectContaining({
                code: 'permission-denied',
            })
        );
    });
});

describe("Ensure admins can write to database collections", () => {
    beforeAll(async () => {
        await signInWithEmailAndPassword(auth, "admin@test.com", "password");
    });

    afterAll(async () => {
        await signOut(auth);
    });

    testIfNotCI("Laptops collection allows writing for admins", async () => {
        const collectionToTest = collection(db, "laptops-squashed");
        const data = { "name": "TEST"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });
    testIfNotCI("Glossary collection allows writing for admins", async () => {
        const collectionToTest = collection(db, "glossary");
        const data = { "term": "TEST", "definition": "test"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });
});
