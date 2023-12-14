import {useState} from 'react';

export const useFetching = (callback) => {
  const [loadingStatus, setLoadingStatus] = useState({
    fetchAttempted: false,
    loading: false,
  });
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoadingStatus({...loadingStatus, loading: true});
      await callback();
    } catch (error) {
      setError(error.message)
      console.log(error.message);
    } finally {
      setLoadingStatus({fetchAttempted: true, loading: false});
    }
  };

  return [fetching, loadingStatus, error]

};