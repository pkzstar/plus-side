import React from "react";
import ReactDOM from 'react-dom/client';

export default function PastEvents() {
    return (
        <li className="past-events">
  <div style={{ flex: 0 }}>
    <a href="" target="_blank">
      <img className="past-events-banners" src="" alt="" />
    </a>
    <div>
      <img className="pm-rank-centered" src="" alt="" />
    </div>
    <h1 className="past-events-title">
      <a href="" target="_blank" />
    </h1>
    <p className="past-article-text">Date : </p>
    <p className="past-article-text">Location : </p>
    <p className="past-article-text">Entrants : </p>
    <p className="top3">🥇: </p>
    <p className="top3"> 🥈: </p>
    <p className="top3"> 🥉: </p>
    <a className="vods-past" href="" target="_blank">
      Vods
    </a>
    <a className="start-gg" href="" target="_blank">
      start.gg
    </a>
  </div>
</li>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PastEvents />
  </React.StrictMode>
);

const rootElement = document.getElementById('react-container');
ReactDOM.render(<PastEvents />, rootElement,);
