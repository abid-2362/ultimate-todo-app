import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", () => {
  
  it('Renders an app component', () => {
    let mountedApp = shallow(<App />);
  });

  it('Checking for renderig of todos', () => {
    let mountedApp = shallow(<App />);
    let todos = mountedApp.find('Todos');
    expect(todos.length).toBe(1);
  });
  
}) 
