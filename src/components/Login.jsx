import "./stylesheets/login.css";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";
import {useNavigate} from "react-router-dom";

export default function Login () {
    const dimensions = useWindowDimensions();
    const navigate = useNavigate();
    return (
        <div className="login" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-wrapper1010">
                <div className="overlap1010">
                    <Background/>
                    <div className="overlap-2Login">

                        <div className="text-wrapper-3">Login</div>
                    </div>
                    <div className="overlap-group99">

                        <div className="rectangle7"/>

                        <button className="button-wrapper67" onClick={() => navigate("/pet")}>
                            <span className="buttonNO">Login</span>
                        </button>

                        <input className="text-wrapperLogin" placeholder={`username / email`}></input>

                        <input className="text-wrapper-2Login" placeholder={`password`}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};