import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector(store => store.job);

  const fetchAllJobs = useCallback(async () => {
    try {
      const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setAllJobs(res.data.jobs));
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchedQuery, dispatch]);

  useEffect(() => {
    fetchAllJobs();
  }, [fetchAllJobs]);

  return fetchAllJobs; // Optionally return the function in case you want to manually trigger it elsewhere.
}

export default useGetAllJobs;
