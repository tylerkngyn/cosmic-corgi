import styled from "styled-components";
import homepagecorgi from "./assets/home-page-corgi 1.svg";
import earth from "./assets/earth 1.svg"

const CorgiImg = styled.img`
    position: fixed;
    right: -15px;
    bottom: -250px;
    width: 500px;
`

const EarthImg = styled.img`
    position: fixed;
    top: -200px;
    left: -50px;
    width: 350px;
`

export default function Background() {
    return(
        <>
            <CorgiImg alt={`corgi`} src={homepagecorgi} />
            <EarthImg alt={`earth`} src={earth} />
        </>
    );
}