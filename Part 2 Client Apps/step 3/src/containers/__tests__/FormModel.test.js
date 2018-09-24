import React from 'react';
import { shallow } from 'enzyme';
import FormModel from '../FormModel.js';

it('renders without crashing', () => {
    let mountedForm = shallow(<FormModel />);
});
