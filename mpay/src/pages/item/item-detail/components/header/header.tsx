import { Link } from "react-router-dom";
import "./header.styles.css";
import back from "./assets/back.webp";
import search from "./assets/search.webp";
import share from "./assets/share.webp";

export const Header = ({ ...rest }) => {
  return (
    <header className="header pl-100 pr-100 pt-000 pb-000">
      <Link to="/" className="btn">
        <img className="btn-back" src={back} alt="back button" />
      </Link>
      <h1 className="title txt-alin-c">{rest.name}</h1>
      <div className="actions">
        <Link to="/" className="btn mr-100">
          <img className="actions-icon" src={search} alt="search icon" />
        </Link>
        <Link to="/" className="btn">
          <img className="actions-icon" src={share} alt="share icon" />
        </Link>
      </div>
    </header>
  )
}
