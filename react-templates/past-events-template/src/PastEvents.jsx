import React from "react";
import ReactDOM from "react-dom";

function PastEvents({ eventTitle, eventUrl, imageUrl, vodsUrl, date, location, entrants, first, second, third, hideRankImage}) {
  return (
    <li className="past-events">
      <div style={{ flex: 0 }}>
        <a href={eventUrl} target="_blank">
          <img className="past-events-banners" src={imageUrl} alt="" />
        </a>
        <div>
        <img className={hideRankImage ? "pm-rank-centered-invis" : "pm-rank-centered"} src="https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true" alt="" />
        </div>
        <h1 className="past-events-title">
        <a href={eventUrl} target="_blank">{eventTitle}</a>
        </h1>
        <p className="past-article-text">Date : {date}</p>
        <p className="past-article-text">Location : {location}</p>
        <p className="past-article-text">Entrants : {entrants}</p>
        <p className="top3">🥇: {first}</p>
        <p className="top3"> 🥈: {second}</p>
        <p className="top3"> 🥉: {third}</p>
        {vodsUrl && <a className="vods-past" href={vodsUrl} target="_blank">Vods</a>}
        <a className="start-gg" href={eventUrl} target="_blank">start.gg</a>
      </div>
    </li>
  );
}

export default PastEvents;
