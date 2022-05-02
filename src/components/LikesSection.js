import React  from "react";
import { useState } from "react";

function LikesSection( props ) {
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [downvotes, setDownvotes] = useState(props.downvotes);

    function upvoteHandler() {
        setUpvotes((upvotes) => upvotes + 1)
    }

    function downvoteHandler() {
        setDownvotes((downvotes) => downvotes + 1)
    }

    return (
        <div className="LikesSection">
            <button onClick={upvoteHandler} >{upvotes} 👍</button>
            <button onClick={downvoteHandler} >{downvotes} 👎</button>
        </div>
    )
}

export default LikesSection