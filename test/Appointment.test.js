import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;
  beforeEach(() => {
    container = document.createElement('div');
  });
  const render = (component) => ReactDOM.render(component, container);
  it('renders the customer first name', () => {
    customer = { firstName: 'cuteLuna' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('cuteLuna');
  })
  it('renders another customer first name', () => {
    customer = { firstName: 'miou' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('miou');
  })
})
