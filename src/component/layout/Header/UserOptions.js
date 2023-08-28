import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Backdrop from "@material-ui/core/Backdrop"
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import {logout} from "../../../actions/userAction"
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert()
  const dispatch = useDispatch()
  const options = [
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <ShoppingCartIcon />, name: "Cart", func: cart},
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <HomeIcon />,
      name: "Home",
      func: home,
    });
  }
  function home() {
    navigate("/");
  }
  function account() {
    navigate("/account");
  }
  function orders() {
    navigate("/orders");
  }
  function cart() {
    navigate("/Cart");
  }
  function logoutUser() {
    dispatch(logout())
    navigate("/")
    alert.success("Logged Out Successfully");
  }

  return (
    <Fragment>
        <Backdrop open={open} style={{zIndex:"10"}}/>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{zIndex:"11"}}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};
export default UserOptions;
