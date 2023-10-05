import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('verify the state after 1st level star is clicked' , () => {
  render(<App />);
  const level = screen.getByText(/1/i);
  fireEvent.click(level);
  const poorMessage = screen.getByText(/Poor/i);
  expect(poorMessage).toBeInTheDocument();
})

test('verify the state after 2nd level star is clicked' , () => {
  render(<App />);
  const level = screen.getByText(/2/i);
  fireEvent.click(level);
  const ratingessage = screen.getByText(/Not satisfactory/i);
  expect(ratingessage).toBeInTheDocument();
})

test('verify the state after 3rd level star is clicked' , () => {
  render(<App />);
  const level = screen.getByText(/3/i);
  fireEvent.click(level);
  const ratingessage = screen.getByText(/Average/i);
  expect(ratingessage).toBeInTheDocument();
})

test('verify the state after 4th level star is clicked' , () => {
  render(<App />);
  const level = screen.getByText(/4/i);
  fireEvent.click(level);
  const ratingessage = screen.getByText(/Good/i);
  expect(ratingessage).toBeInTheDocument();
})


test('verify the state after 5th level star is clicked' , () => {
  render(<App />);
  const level1 = screen.getByText(/5/i);
  fireEvent.click(level1);
  const ratingessage = screen.getByText(/Outstanding/i);
  expect(ratingessage).toBeInTheDocument();
})