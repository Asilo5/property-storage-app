import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainPage />)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})