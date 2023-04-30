import PropTypes from 'prop-types';
import {
  FilterContainer,
  FilterLabel,
  FilterOption,
  FilterSelect,
} from './Filter.styled';

export function Filter({ filter, handleFilterChange }) {
  return (
    <FilterContainer>
      <FilterLabel>
        Filter:
        <FilterSelect
          id="filter-select"
          value={filter}
          onChange={handleFilterChange}
        >
          <FilterOption value="show all">Show all</FilterOption>
          <FilterOption value="follow">Follow</FilterOption>
          <FilterOption value="followings">Followings</FilterOption>
        </FilterSelect>
      </FilterLabel>
    </FilterContainer>
  );
}
Filter.propTypes = {
  filter: PropTypes.oneOf(['show all', 'follow', 'followings']).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
