import React from "react";
import DatabaseListItem from "./GlossaryDatabaseListItem";
import { GlossaryEntry } from "../DatabaseManager";

/** keep tracks of what items are being kept by the database*/
interface DatabaseListProps {
    items: GlossaryEntry[];
    onRemove: (item: string) => void;
    emptyMessage?: string;
}

/**This displays a list a name and a remove button */
const DatabaseList: React.FC<DatabaseListProps> = ({ items, onRemove, emptyMessage = "No items available." }) => {
    return (
        <div style={{ marginTop: "2rem" }}>
            {items.length === 0 ? (
                <p>{emptyMessage}</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {items.map((item) => (
                        <DatabaseListItem key={item.id} item={item} onRemove={onRemove} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DatabaseList;
