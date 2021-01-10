import React from 'react'
import PropTypes from 'prop-types'
import { formatCurrency } from "../utils/utils";
import {
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    CardImage
} from './Styled';

function Card({ title, subHeader, header, footer, active }) {
    return (
        <CardContainer active={active}>
            <CardHeader>
                <CardImage src={header} />
                {formatCurrency(subHeader)}
            </CardHeader>
            <CardBody>
                {title}
            </CardBody>
            <CardFooter>
                {footer}
            </CardFooter>
        </CardContainer>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    subHeader: PropTypes.string,
    header: PropTypes.string,
    footer: PropTypes.string,
    active: PropTypes.bool
}

export default Card

