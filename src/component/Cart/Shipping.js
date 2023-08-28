import React, { Fragment, useEffect, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStation from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckOutSteps from "../Cart/CheckoutSteps.js"
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../actions/userAction";

const Shipping = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.user);

  const defaultAddress = shippingInfo ? shippingInfo.address : "";
  const defaultPhoneNo = shippingInfo ? shippingInfo.phoneNo : "";
  const defaultCity = shippingInfo ? shippingInfo.city : "";
  const defaultState = shippingInfo ? shippingInfo.state : "";
  const defaultCountry = shippingInfo ? shippingInfo.country : "";
  const defaultPinCode = shippingInfo ? shippingInfo.pinCode : "";

  const [address, setAddress] = useState(defaultAddress);
  const [phoneNo, setPhoneNo] = useState(defaultPhoneNo);
  const [city, setCity] = useState(defaultCity);
  const [state, setState] = useState(defaultState);
  const [country, setCountry] = useState(defaultCountry);
  const [pinCode, setPinCode] = useState(defaultPinCode);



  const shippingSubmit = (e) => {
    e.preventDefault();
    if (phoneNo.length < 10 || phoneNo.length > 10){
        alert.error("Phone Number Should Be Of 10 Digits")
        return;
    }
    dispatch(
        saveShippingInfo({address, phoneNo, city, state, country, pinCode})
    )
    navigate("/order/confirm")
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, error, alert ]);

  return (
    <Fragment>
      <MetaData title="Shipping Details" />
      <CheckOutSteps activeStep={0} />
      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>
          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Enter Your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="Enter Your City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <PinDropIcon />
              <input
                type="number"
                placeholder="Enter Your Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>
            <div>
              <PublicIcon />
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value=" ">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            {country && (
              <div>
                <TransferWithinAStation />
                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
