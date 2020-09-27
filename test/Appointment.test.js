import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'cuteLuna' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(component, container);
    expect(document.body.textContent).toMatch('cuteLuna');
  })
  it('renders another customer first name', () => {
    const customer = { firstName: 'miou' };
    const container = document.createElement('div');
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('miou');
  })
})
