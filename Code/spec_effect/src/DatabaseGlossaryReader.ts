import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { db } from "./firebase-config"; // Your initialized Firestore instance

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
}

const glossaryEntryConverter = {
  toFirestore: (glossaryEntry: GlossaryEntry) => {
    const { id, ...data } = glossaryEntry;
    return data;
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): GlossaryEntry => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      term: data.term,
      definition: data.definition,
    } as GlossaryEntry;
  },
};

export async function getAllEntries(): Promise<GlossaryEntry[]> {
  const colRef = collection(db, "glossary").withConverter(
    glossaryEntryConverter,
  );

  const querySnapshot = await getDocs(colRef);

  const items = querySnapshot.docs.map((doc) => doc.data());

  return items;
}
