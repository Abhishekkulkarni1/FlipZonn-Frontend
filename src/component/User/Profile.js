import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import "./Profile.css"


const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isAuthenticated){
        navigate("/login")
    } 
  }, [navigate, isAuthenticated])
  const avatarUrl = user?.avatar?.url || '';
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={avatarUrl} alt={user.name || "User"} />
              <Link to="/me/update"> Edit Your Profile </Link>
            </div>
            <div>
              <div>
                <h4> Full Name </h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>
              </div>
              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;