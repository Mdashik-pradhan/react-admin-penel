import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  People,
  Storefront,
  Assessment,
  AttachMoney,
  Mail,
  DynamicFeed,
  ChatBubbleOutline,
  Report
} from "@material-ui/icons";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                <p>Home</p>
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <p>Sales</p>
            </li>
            <h3 className="sidebarTitle">Quickly Menu</h3>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <People className="sidebarIcon" />
                <p>Users</p>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                <p>Products</p>
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              <p>Transactions</p>
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              <p>Reports</p>
            </li>
            <h3 className="sidebarTitle">Notifications</h3>
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              <p>Mail</p>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              <p>Feedback</p>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <p>Messages</p>
            </li>
            <h3 className="sidebarTitle">Staff</h3>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <p>Massage</p>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <p>Analytics</p>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <p>Reports</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
