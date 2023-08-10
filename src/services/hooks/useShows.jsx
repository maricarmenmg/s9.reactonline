// Encapsulates logic for fetching shows from the API

import { useEffect, useState } from 'react';
import { 
  getTopRatedTVShows,
  getTVShowDetails,
  getTVShowCredits 
} from '../api/Api';

function useShows (id) {
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [show, setShowDetails] = useState({});
  const [showCredits, setShowCredits] = useState({});
  
  
  useEffect(() => {
    const fetchData = async () => {
      const shows = await getTopRatedTVShows();
      setTopRatedShows(shows);
    }
      const fetchTVShowDetails = async () => {
        if (id) {
          const details = await getTVShowDetails(id);
          setShowDetails(details);
        }
      }

      const fetchTVShowCredits = async () => {
        if (id) {
          const credits = await getTVShowCredits(id);
          setShowCredits(credits);
        }
      }

     


    fetchData();
    fetchTVShowDetails();
    fetchTVShowCredits();


  }, [id]);

  return { topRatedShows, show, showCredits };
}

export default useShows;