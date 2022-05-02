import React, { useState } from "react";

function Comments({ comments }) {
    console.log(comments);

    const [showComments, setShowComments] = useState(true);

    function handleToggleComments() {
        setShowComments(!showComments);
    }

    const commentsList = comments.map(comment => {
        return (
            <div key={comment.id} >
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    if (showComments) {
        return (
            <div className="Comments">
                <button onClick={handleToggleComments} >Hide Comments</button>
                <h2>{comments.length} Comments</h2>
                {commentsList}
            </div>
        )
    } else {
        return (
            <div className="Comments">
                <button onClick={handleToggleComments} >Show Comments</button>
            </div>
        )
    }


    //     return (
    //         <div className="Comments">
    //             <button onClick={handleToggleComments} >{showComments ? "Hide Comments" : "Show Comments"}</button>
    //             <h2>{comments.length} Comments</h2>
    //             {commentsList}
    //         </div>
    //     )
}

export default Comments;