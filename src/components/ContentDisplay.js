import React from "react";
import { v4 as uuidv4 } from "uuid";
function ContentDisplay({ month, data }) {
    return (
        <div className="displayContent">
            {data.length !== 0 ? (
                <div>
                    {" "}
                    <h1>{month}</h1>
                    {data.map((d) => (
                        <div key={uuidv4()}>{d.name}</div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default ContentDisplay;
