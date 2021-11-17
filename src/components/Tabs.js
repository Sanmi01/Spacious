import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Tabs = () => {
  const [active, setActive] = useState(window.location.pathname);

    return (
        <Nav variant="pills" activeKey={active} className="px-4" >
  <Nav.Item>
    <Nav.Link eventKey="/" href="/">PLANETS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/characters" href="/characters">CHARACTERS</Nav.Link>
  </Nav.Item>
</Nav>
    )
}

export default Tabs
