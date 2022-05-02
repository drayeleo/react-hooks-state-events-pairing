import React from "react";

function Player( {url} ) {
    return (
        <div className="Player">
          <iframe
            width="919"
            height="525"
            //src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            src={url}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
        </div>
    );
}

export default Player;