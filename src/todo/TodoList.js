import React from 'react';

import { Box, Button, Checkbox, Stack, Text } from '../ui';
import useTodosListing from './useTodosListing';

const TodosList = () => (
  <Box p={12}>
    <Text fontSize="3xl" fontWeight="bold" mb={4}>To-dos</Text>
    <TodoListContent />
  </Box>
);

export default TodosList;

const TodoListContent = () => {
  const todos = useTodosListing();

  // Loading state
  if (todos.loading) return (<Text>Loading to-dos...</Text>);

  // Error state
  if (todos.error) return (
    <Stack spacing={3} align="start">
      <Text>Something went wrong.</Text>
      <Button onClick={todos.refetch}>Reload</Button>
    </Stack>
  );

  // Zero state
  if (todos.isEmpty) return (<Text>No to-dos found.</Text>);

  // Loaded state
  return (
    <Stack spacing={3} align="start">
      {todos.data.map(({ id, title, done }) => (
        <Checkbox key={id} defaultIsChecked={done}>{title}</Checkbox>
      ))}
    </Stack>
  );
};
