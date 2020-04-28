import React, { Component } from "react";
import { Link } from "react-router-dom";

import style from "./Track.css";

const Track = (props) => {
  const { track } = props;
  return (
    <React.Fragment>
      <div className="col-md-6">
        <div className="card mb-2 shadow-sm">
          <div className="card-body">
            <h5>{track.artist_name}</h5>
            <p className="card-text">
              <strong className="mr-2">
                <i className="fas fa-play mr-1 icon"></i>Track
              </strong>
              {track.track_name}
              <br />
              <strong className="mr-2">
                <i className="fas fa-compact-disc mr-1 icon"></i>Album
              </strong>
              {track.album_name}
            </p>
            <Link
              to={`lyrics/track/${track.track_id}`}
              className="btn btn-dark shadow-md btn-block"
            >
              <i className="fas fa-chevron-circle-right mr-1 icon"></i>
              View Lyrics
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Track;
