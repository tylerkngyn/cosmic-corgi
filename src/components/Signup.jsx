import "./stylesheets/signup.css";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";
import {useNavigate} from "react-router-dom";

export default function Signup() {
const dimensions = useWindowDimensions();
const navigate = useNavigate();
    return (
        <div className="sign-in" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-wrapper">
                <Background/>
                <div className="overlap">

                    <div className="overlap-2">

                        <div className="text-wrapper-4">Sign in</div>
                    </div>

                    <div className="overlap-group10">


                        <div className="rectangle"/>



                        <button className="login" onClick={() => navigate("/pet")}>
                            <span className="button">Sign up</span>
                        </button>

                        <input className="text-wrapper" placeholder={`email`}></input>

                        <input className="text-wrapper-2" placeholder={`username`}></input>

                        <input className="text-wrapper-3" placeholder={`password`}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};