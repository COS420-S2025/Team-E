import { Query } from "firebase/firestore"
import { Laptop } from "./DatabaseManager"

export interface LaptopFilter
{
    name: string;
    queryModifier: (q: Query<Laptop>) => Query<Laptop>;
}