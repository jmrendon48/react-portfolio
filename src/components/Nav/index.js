import React from "react";

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <header className="flex-row align-items">
      <h2 className="white">Joshua M. Rendon</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span
              className={`${!aboutSelected && "white"} ${
                aboutSelected && "navActive"
              }`}
              onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              About Me
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!portfolioSelected && "white"} ${
                portfolioSelected && "navActive"
              }`}
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!contactSelected && "white"} ${
                contactSelected && "navActive"
              }`}
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(true);
                setResumeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!resumeSelected && "white"} ${
                resumeSelected && "navActive"
              }`}
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(true);
              }}
            >
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
