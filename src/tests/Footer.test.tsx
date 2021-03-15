import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer/Footer'

function setup() {
    const props = { };
    const wrapper = shallow(<Footer />);
    return { wrapper, props };
}

describe("Footer", () => {
    it("should render", () => {
        const {wrapper}  = setup();
        expect(wrapper.find('p').exists()).toBe(true);
    });
    it("should contain text", () => {
        const {wrapper}  = setup();
        expect(wrapper.find('p').text()).toContain('Made with love by Jamin Quimby');
    });
});