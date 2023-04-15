import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text', () => {
  const todo = {
    id: 1,
    text: 'Learn React',
    done: false
  };

  const { getByText } = render(<Todo todo={todo} />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const todoText = getByText(todo.text);

  expect(todoText).toBeInTheDocument();
});