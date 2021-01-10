import styled from 'styled-components';

export const CardContainer = styled.div`
    width:${props => props.active ? "480px" : "280px"};
    height:${props => props.active ? "630px" : "430px"};
    display: inline;
    margin: 0.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    &:hover{
        box-shadow: 0 40px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    border-radius: 10px;
    background-color: #c4e3f2;
`;

export const CardBody = styled.div`
    font-size: 20px;
    line-height: 1.8;
`;

export const CardImage = styled.img`
    padding: 20px 0 0 0;
    width: 100%;
    height: 100%;
`;

export const CardHeader = styled.div`
    font-weight: 600;
    color: grey;
`

export const CardFooter = styled.div`
    font-weight: 300;
    color: grey;
`;

export const SearchContainer = styled.div`
    position: relative;
    left: 40%;
    margin: 50px;
    text-align: center;
`;
export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px 20px 60px 20px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const NavigationButton = styled.div`
    align-self: center;
    cursor: pointer;
`