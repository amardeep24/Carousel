import React from 'react';
import { mount, configure } from 'enzyme';
import Search from '../components/Search';
import TextField from '@material-ui/core/TextField';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe('Test 1::The search component should match the snapshot', () => {
    let component;

    beforeEach(() => {
        component = mount(<Search
            search={(() => console.log("searched"))}
        />);
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Test 2::The search component shall call the debounce function', () => {
    let component;
    let spy;
    beforeEach(() => {
        spy =  jest.fn();
        component = mount(<Search
            search={spy}
        />);
    });

    it('should call the callback after debouncing', () => {
        component
        .find(TextField)
        .props()
        .onChange({ target: { value: "mobile" } });
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
        }, 3000);
        jest.runAllTimers();
    });
});