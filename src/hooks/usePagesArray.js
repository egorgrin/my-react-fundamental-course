import {useMemo} from 'react';

export const usePagesArray = (totalPages) => {

  return useMemo(() => {
    // console.log(`Total pages: ${totalPages} Use memo have worked`);
        let result = [];
        for (let i = 0; i < totalPages; i++) {
          result.push(i + 1);
        }

        return result;
      }, [totalPages],
  );
};