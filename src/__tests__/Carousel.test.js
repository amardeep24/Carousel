import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import CarouselNavigation from '../components/CarouselNavigation';
import products from '../data/products.json';

configure({ adapter: new Adapter() });

describe('Test 1::The carousel component should match the snapshot', () => {
    let component;

    beforeEach(() => {
        component = mount(
            <Carousel
                items={products}
                renderFn={(item, idx) => <Card
                    key={item.id}
                    title={item.name}
                    subHeader={item.price}
                    header={process.env.PUBLIC_URL + item.img}
                    footer={item.category}
                    active={idx === 1}
                    left={idx === 0} />
                }
            />);
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Test 2:: The carousel componet should render children properly', () => {
    let component;
    beforeEach(() => {
        component = mount(
            <Carousel
                items={products}
                renderFn={(item, idx) => <Card
                    key={item.id}
                    title={item.name}
                    subHeader={item.price}
                    header={process.env.PUBLIC_URL + item.img}
                    footer={item.category}
                    active={idx === 1}
                    left={idx === 0} />
                }
            />);
    });

    it('renders three cards', () => {
        expect(component.find(Card)).toHaveLength(3);
    });
    it('renders two navigation buttons', () => {
        expect(component.find(CarouselNavigation)).toHaveLength(2);
    });
});