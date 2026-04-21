import {
  collection,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { db } from "./firebase-config"; // Your initialized Firestore instance

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
}

export interface Laptop {
  id: string;
  name: string;
  storageCapacityGb: number;
  storageType: string;
  priceCents: number;
  memoryGb: number;
  cpuName: string;
  cpuCoreCount: number;
  cpuBenchmarkSingleThread: number;
  cpuBenchmarkMultiThread: number;
  gpuName: string;
  gpuVramMb: number;
  gpuBenchmark2d: number;
  gpuBenchmark3d: number;
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

const laptopConverter = {
  toFirestore: (laptop: Laptop) => {
    const { id, ...data } = laptop;
    return data;
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Laptop => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      name: data.name,
      storageCapacityGb: data.storageCapacityGb,
      storageType: data.storageType,
      priceCents: data.priceCents,
      memoryGb: data.memoryGb,
      cpuName: data.cpuName,
      cpuCoreCount: data.cpuCoreCount,
      cpuBenchmarkSingleThread: data.cpuBenchmarkSingleThread,
      cpuBenchmarkMultiThread: data.cpuBenchmarkMultiThread,
      gpuName: data.gpuName,
      gpuVramMb: data.gpuVramMb,
      gpuBenchmark2d: data.gpuBenchmark2d,
      gpuBenchmark3d: data.gpuBenchmark3d
    } as Laptop;
  },
};

export async function getAllGlossaryEntries(): Promise<GlossaryEntry[]> {
  const colRef = collection(db, "glossary").withConverter(
    glossaryEntryConverter,
  );

  const querySnapshot = await getDocs(colRef);

  const items = querySnapshot.docs.map((doc) => doc.data());

  return items;
}

export async function getAllLaptops(): Promise<Laptop[]> {
  const colRef = collection(db, "laptops-squashed").withConverter(
    laptopConverter,
  );

  const q = query(colRef, limit(20));

  const querySnapshot = await getDocs(q);

  const items = querySnapshot.docs.map((doc) => doc.data());

  return items;
}
