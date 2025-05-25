import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input, Box, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Box maxW="md" mx="auto" mt={4}>
      <FormLabel htmlFor="filter">Find contacts by name:</FormLabel>
      <Input
        id="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Search..."
      />
    </Box>
  );
};

export default Filter;
