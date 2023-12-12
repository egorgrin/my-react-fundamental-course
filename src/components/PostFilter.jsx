import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {

  return (
      <div>
        <MyInput
            value={filter.searchQuery}
            onChange={e => setFilter({
                  ...filter,
                  searchQuery: e.target.value,
                },
            )}
            placeholder="Search..."
        />

        <MySelect
            value={filter.selectedSort}
            onChange={selectedVal => {
              setFilter({
                    ...filter,
                    selectedSort: selectedVal,
                  },
              );
            }}
            defaultVal={'Sort By'}
            options={[
              {value: 'title', name: 'By name'},
              {value: 'body', name: 'By desc'},
            ]}
        />
      </div>
  );
};

export default PostFilter;