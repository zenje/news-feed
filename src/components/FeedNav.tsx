import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NAVIGATION_ITEM, NAV } from '../constants';
import './FeedNav.css';

type Props = {
  activeKey: string;
};

interface NavItemProps extends NAVIGATION_ITEM {}

const NavItem = ({ eventKey, label, disabled }: NavItemProps) => (
  <Nav.Item as="li">
    <Nav.Link eventKey={eventKey} className="feed-nav-link" disabled={disabled}>
      <div className="feed-nav-text">{label}</div>
    </Nav.Link>
  </Nav.Item>
);

const FeedNav = ({ activeKey }: Props) => {
  return (
    <Nav
      defaultActiveKey={NAV.POPULAR.eventKey}
      activeKey={activeKey}
      as="ul"
      className="feed-nav"
    >
      <NavItem {...NAV.POPULAR} />
      <NavItem {...NAV.LATEST} />
    </Nav>
  );
};

export default FeedNav;
