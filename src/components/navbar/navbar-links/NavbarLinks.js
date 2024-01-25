import { NavLink } from "react-router-dom";

const NavbarLinks = ({ handleNavbarItemCloseNavbar, item }) => {
    return (
        <li className="nav-item py-2 me-lg-5 me-4">
            <NavLink onClick={handleNavbarItemCloseNavbar} to={item.link} className="nav-link">{item.itemText}</NavLink>
        </li>
    )
}

export default NavbarLinks;