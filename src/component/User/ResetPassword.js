import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
// import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import LockOpenIcon from "@material-ui/icons/LockOpen"
import LockIcon from "@material-ui/icons/Lock"
// import VpnKeyIcon from "@material-ui/icons/VpnKey"



const ResetPassword = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
  
    const { error, success, loading } = useSelector((state) => state.forgotPassword);
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
      const myForm = new FormData();

      myForm.set("password", password);
      myForm.set("confirmPasssword", confirmPassword);
  
      // console.log("Signed in Successfully");
    //   dispatch(resetPassword(match.params.token, myForm));
      if (match?.params?.token) {
        dispatch(resetPassword(match.params.token, myForm));
      } 
    };
  
    useEffect(() => {
  
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      if (success) {
        alert.success("Password Updated Successfully");
        navigate("/login");
      }
    }, [dispatch, error, alert, navigate, success]);
  
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title="Change Password" />
            <div className="resetPasswordContainer">
              <div className="resetPasswordBox">
                <h3 className="resetPasswordBox1">Reset Password</h3>
                <form
                  className="resetPasswordForm"
                  onSubmit={resetPasswordSubmit}
                >
                  <div>
                    <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="New Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <LockIcon />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Change Password"
                    className="resetPasswordBtn"
                  />
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };

export default ResetPassword