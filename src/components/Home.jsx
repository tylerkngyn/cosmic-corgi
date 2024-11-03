import "./stylesheets/home.css";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";

export default function Home () {
    const navigate = useNavigate();
    const dimensions = useWindowDimensions();
    return (
        <div className="homepage" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-group-wrapper">
                <div className="overlap-group10">
                    <Background/>
                    <p className="text-wrapper">a pet from outer space</p>

                    <div className="div">Cosmic Corgi</div>

                    <button className="login" onClick={() => navigate('/login')}>
                        <span className="button">Login</span>
                    </button>

                    <button className="button-wrapper" onClick={() => navigate('/signup')}>
                        <span className="button">Sign up</span>
                    </button>

                    <p className="text-wrapper">a pet from outer space</p>

                    <div className="div">Cosmic Corgi</div>


                </div>
            </div>
        </div>
    );
};