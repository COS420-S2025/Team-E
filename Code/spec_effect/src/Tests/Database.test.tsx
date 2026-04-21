import {
    collection,
    getCountFromServer,
    addDoc,
    deleteDoc
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "setimmediate";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAllGlossaryEntries, getAllLaptops, getLaptopById } from "../DatabaseManager";

const CI_MODE = process.env.CI_MODE === 'true';
const testIfNotCI = CI_MODE ? test.skip : test;


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

describe("Ensure that database functions work", () => {
    testIfNotCI("test getAllGlossaryEntries", async () => {
        const glossaryEntries = await getAllGlossaryEntries();
        expect(glossaryEntries.length).toBeGreaterThan(0);
    });
    testIfNotCI("test getAllLaptops", async () => {
        const laptops = await getAllLaptops();
        expect(laptops.length).toBeGreaterThan(0);
    });
    testIfNotCI("test getLaptopById", async () => {
        const nonexistent_laptop = await getLaptopById("NONEXISTENT_ID");
        expect(nonexistent_laptop).toBeNull();
    });
});