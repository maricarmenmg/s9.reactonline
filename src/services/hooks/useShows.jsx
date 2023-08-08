// Encapsulates logic for fetching shows from the API
import { useEffect, useState } from 'react';
import { getPopularTVShows } from '../api/Api';

const useShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const showData = await getPopularTVShows();
      setShows(showData);
    };

    fetchShows();
  }, []);

  return shows;
};

export default useShows;