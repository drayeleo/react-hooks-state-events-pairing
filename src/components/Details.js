import React from "react";

function Details( {title, views, createdAt} ) {
    return (
        <div className="Details">
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
        </div>
    )
}

export default Details;