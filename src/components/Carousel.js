import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import CarouselNavigation from './CarouselNavigation'
import Card from "./Card";
import {
    getWrappedItems,
    navigateLeft,
    navigateRight
} from '../utils/utils';
import {
    CarouselContainer,
    SliderActive,
    SliderInActive,
    SliderContainer
} from './Styled';

function Carousel({ items, searched, filterProp }) {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [slider, setSlider] = useState([true, false, false]);
    const lastIndex = items.length - 1;
    const cards = getWrappedItems(items, startIndex, endIndex)
        .filter(item => searched ? item[filterProp].includes(searched) : true)
        .map((item, i) =>
            <CSSTransition
                key={item.id}
                timeout={1500}
                classNames="fade"
                unmountOnExit
                appear
            >
                <Card
                    key={item.id}
                    title={item.name}
                    subHeader={item.price}
                    header={process.env.PUBLIC_URL + item.img}
                    footer={item.category}
                    active={i === 1}
                    left={i === 0}
                />
            </CSSTransition>
        );

    const handleLeftNav = useCallback(() => {
        setStartIndex(index => navigateLeft(index, lastIndex));
        setEndIndex(index => navigateLeft(index, lastIndex));
        setSlider(s => {
            let curr = s.findIndex(t => t);
            curr = curr === 0 ? 2 : curr - 1;
            const slider = new Array(3).fill(false);
            slider[curr] = true;
            return slider;
        });
    }, [lastIndex]);

    const handleRightNav = useCallback(() => {
        setStartIndex(index => navigateRight(index, lastIndex));
        setEndIndex(index => navigateRight(index, lastIndex));
        setSlider(s => {
            let curr = s.findIndex(t => t);
            curr = curr === 2 ? 0 : curr + 1;
            const slider = new Array(3).fill(false);
            slider[curr] = true;
            return slider;
        })
    }, [lastIndex]);

    return (
        <>
            {cards.length ?
                <>
                    <CarouselContainer>
                        <CarouselNavigation direction={"left"} click={handleLeftNav} />
                        <TransitionGroup component={null}>
                            {cards}
                        </TransitionGroup>
                        <CarouselNavigation direction={"right"} click={handleRightNav} />
                    </CarouselContainer>
                    <SliderContainer>
                        {slider.map(f => f ? <SliderActive /> : <SliderInActive />)}
                    </SliderContainer>
                </>
                : "No Results"}
        </>
    )
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string
    })),
    searched: PropTypes.string
}

export default Carousel

