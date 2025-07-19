import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="text-2xl">
        <Link to="/">
          <FontAwesomeIcon icon={faDog} />
          <span className="text-blue-900">Edogs</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
