import React from 'react'
import PropTypes from 'prop-types';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
    NavigationButton,
    ButtonContainer
} from './Styled';

function CarouselNavigation(props) {
    const icon = props.direction === "left" ? <NavigateBeforeIcon /> : <NavigateNextIcon />;
    return (
        <ButtonContainer onClick={props.click}>
            <NavigationButton>{icon}</NavigationButton>
        </ButtonContainer>
    );
}

CarouselNavigation.propTypes = {
    direction: PropTypes.string
}

export default CarouselNavigation

