import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../Todos.js';

it('renders without crashing', () => {
    let mountedTodo = shallow(<Todos />);

});
