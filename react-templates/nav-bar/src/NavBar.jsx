import React from "react";

function NavBar() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n      " }} />
      <div className="header-nav">
        <a href="/">
          <img
            className="plus-side-net-nav"
            src="https://github.com/pkzstar/plus-side/blob/main/images/plusside.net.png?raw=true"
            alt="oops"
          />
        </a>
        <a
          className="twitter-link"
          href="https://twitter.com/pplusside"
          target="_blank"
        >
          <img
            className="twitter-link"
            src="https://github.com/pkzstar/plus-side/blob/main/images/twitterlogo.png?raw=true"
          />
        </a>
        <a
          className="youtube-link"
          href="https://www.youtube.com/@PPlusSide/featured"
          target="_blank"
        >
          <img
            className="youtube-link"
            src="https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true"
          />
        </a>
        <section className="nav-text">
          <a href="/">
            <p id="navText">Events</p>
          </a>
          <a href="/Articles.html">
            <p id="navText">Articles</p>
          </a>
        </section>
      </div>
    </div>
  );
}

export default NavBar;
