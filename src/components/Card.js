import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from "../utils/utils";
import {
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    CardImage
} from './Styled';

function Card({ title, subHeader, header, footer, active, left }) {
    const [opacity, setOpacity] = useState(0.7);
    useEffect(() => {
        if (active) {
            setOpacity(1);
        } else {
            setOpacity(0.7);
        }
    }, [active])
    return (
        <CardContainer
            active={active}
            left={left}
            opacity={opacity}>
            <CardHeader>
                <CardImage src={header} />
                {formatCurrency(subHeader, "INR")}
            </CardHeader>
            <CardBody>
                {title}
            </CardBody>
            <CardFooter>
                {footer}
            </CardFooter>
        </CardContainer>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    subHeader: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    header: PropTypes.string,
    footer: PropTypes.string,
    active: PropTypes.bool
}

export default Card

