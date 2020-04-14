import useAxios from 'axios-hooks';

const useTodosListing = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    '/todos.json'
  );

  const isEmpty = !data || data.length <= 0;

  return {
    data,
    loading,
    error,
    refetch,
    isEmpty,
  };
};

export default useTodosListing;
