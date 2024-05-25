import styled from "styled-components";

export const Wrapper = styled.div`

@media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media (min-width: 1280px) {
    margin-top: 32px;
    display: flex;
    gap: 16px;
}
`