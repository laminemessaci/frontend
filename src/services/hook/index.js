import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import { END_POINTS } from '../../constants';


/**
 * Fetches data from the SportSee API for a given user ID.
 *
 * @param {string} userId - The ID of the user to fetch data for.
 * @return {object} An object containing the fetched data and loading/error states.
 */
export function useSportSeeApi(userId) {
  const [apiData, setData] = useState({});
  const [isApiLoading, setIsLoading] = useState(true);
  const [errorApi, setErrorApi] = useState(null);

  useEffect(() => {
  /**
   * Fetches data from multiple API endpoints and sets the results in state.
   *
   * @param {string} userId - The user ID used to construct the API endpoints.
   * @return {Promise} A promise that resolves with the fetched data.
   */
    const fetchData = async () => {
      setErrorApi('');
      axios
        .all(END_POINTS(userId).map((endPoint) => axios.get(endPoint)))
        .then(
          axios.spread((user, activity, average, perf) => {
            JSON.stringify(user);
            JSON.stringify(activity);
            JSON.stringify(average);
            JSON.stringify(perf);
            return { user, activity, average, perf };
          })
        )
        .then((results) => {
          setData(results);
          setIsLoading(false);
          setErrorApi(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorApi(error.message);
          throw new Error(error);
        });
    };

    fetchData();
  }, []);

  const { activity, user, perf, average } = apiData;

  const sessionsApi = activity?.data?.data;
  const performancesApi = perf?.data?.data;
  const userApi = user?.data?.data;
  const averageApi = average?.data?.data;
  return {
    userApi,
    sessionsApi,
    performancesApi,
    averageApi,
    isApiLoading,
    errorApi,
  };
}
