import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { name: 'cuteLuna' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    expect(document.body.textContent).toMatch('cuteLuna');
  })
  it.skip('renders another customer first name', () => {
    const customer = { name: 'miou' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    expect(document.body.textContent).toMatch('miou');
  })
})
