import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    gap: 4px;


.btnLogo {
    background-color: transparent;
    border: none;
}

.iconLogo {
    fill: #f9f9f9;
    width: 42px;
    height: 17px;
}

.textLogo {
    display: none;
}

    @media (min-width: 768px) {


    .logoWrapper {
        margin-bottom: 157px;
    }

    @media (min-width: 1280px) {

    .textLogo {
        display: flex;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #f9f9f9;
    }
}
}`

