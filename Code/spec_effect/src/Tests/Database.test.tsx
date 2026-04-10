import {
    collection,
    getCountFromServer,
    addDoc,
    deleteDoc
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "setimmediate";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

describe("Check if database collections exist", () => {
    return;
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


describe("Ensure non-admins can't write to database collections", () => {
    return;
    test("CPU collection disallows writing for non-admins", async () => {
        const collectionToTest = collection(db, "cpus");
        const data = { "name": "TEST"};

        // Added await here!
        await expect(addDoc(collectionToTest, data)).rejects.toThrow(
            expect.objectContaining({
                code: 'permission-denied',
            })
        );
    });
    test("GPU collection disallows writing for non-admins", async () => {
        const collectionToTest = collection(db, "gpus");
        const data = { "name": "TEST"};

        // Added await here!
        await expect(addDoc(collectionToTest, data)).rejects.toThrow(
            expect.objectContaining({
                code: 'permission-denied',
            })
        );
    });
    test("Laptops collection disallows writing for non-admins", async () => {
        const collectionToTest = collection(db, "laptops");
        const data = { "name": "TEST"};

        // Added await here!
        await expect(addDoc(collectionToTest, data)).rejects.toThrow(
            expect.objectContaining({
                code: 'permission-denied',
            })
        );
    });
    test("Glossary collection disallows writing for non-admins", async () => {
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
    return;
    beforeAll(async () => {
        await signInWithEmailAndPassword(auth, "admin@test.com", "password");
    });

    afterAll(async () => {
        await signOut(auth);
    });

    test("CPU collection allows writing and deleting for admins", async () => {
        const collectionToTest = collection(db, "cpus");
        const data = { "name": "TEST"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });

    test("GPU collection allows writing for admins", async () => {
        const collectionToTest = collection(db, "gpus");
        const data = { "name": "TEST"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });
    test("Laptops collection allows writing for admins", async () => {
        const collectionToTest = collection(db, "laptops");
        const data = { "name": "TEST"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });
    test("Glossary collection allows writing for admins", async () => {
        const collectionToTest = collection(db, "glossary");
        const data = { "term": "TEST", "definition": "test"};

        const docRef = await addDoc(collectionToTest, data);
        
        expect(docRef.id).toBeDefined();

        await deleteDoc(docRef);
    });
});
