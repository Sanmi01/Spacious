import React, { useState } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Tabs = () => {
  const [active, setActive] = useState(window.location.pathname);
  console.log(active)

    return (
        <Nav variant="pills" activeKey={active} className="px-4" >
  <Nav.Item>
    <NavLink className={`navLink ${window.location.pathname === "/\//" ? "active" : "navLink" }`} to="/">PLANETS</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink className={`navLink ${window.location.pathname === "/\//" ? "active" : "navLink" }`} to="/characters">CHARACTERS</NavLink>
  </Nav.Item>
</Nav>
    )
}

export default Tabs
