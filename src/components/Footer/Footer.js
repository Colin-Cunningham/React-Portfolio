import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm">
          <div id="numbers">
            <div>
              {" "}
              <a href="tel:860-331-3329">(860)-331-3329 |</a>{" "}
              <a href="mailto:colin.199643@gmail.com" className="inline">
                Colin.199643@gmail.com
              </a>
            </div>

            <a
              href="https://www.linkedin.com/in/colin-cunningham-094181127/"
              className="ui linkedin button"
            >
              <i className="linkedin icon"></i>
              LinkedIn
            </a>
            <br />
            <a
              className="github-button"
              href="https://github.com/Colin-Cunningham"
              data-color-scheme="no-preference: dark;"
              data-size="large"
              aria-label="Follow @Colin-Cunningham on GitHub"
            >
              Follow @Colin-Cunningham
            </a>
          </div>
        </div>
      </div>
      <p>This is a part of my React Rebuild Series! Click <a href="c">here</a> check back soon for more updates!</p>
    </footer>
  );
}

export default Footer;
