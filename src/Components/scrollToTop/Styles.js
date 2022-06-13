import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: #b68731;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 95%;
bottom: 40px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color:#b68731;
@media screen and (max-width:450px){
    position: fixed;
    left: 5%;
}
`
