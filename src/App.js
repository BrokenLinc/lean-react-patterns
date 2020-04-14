import React from 'react';

import { ThemeProvider } from './ui';
import TodoList from './todo/TodoList';

export default () => (
  <ThemeProvider>
    <TodoList />
  </ThemeProvider>
);
