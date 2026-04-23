import React from "react";

/**made a object to store the name of the item being shown by the database */
interface DatabaseListItemProps {
    item: string;
    onRemove: (item: string) => void;
}

/**This makes a single item that displays the name and have a button to remove */
const DatabaseListItem: React.FC<DatabaseListItemProps> = ({ item, onRemove }) => {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                marginBottom: "0.5rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9"
            }}
        >
            <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                {item}
            </span>
            <button
                onClick={() => onRemove(item)}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                }}
            >
                Remove
            </button>
        </li>
    );
};

export default DatabaseListItem;
