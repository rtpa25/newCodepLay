/** @format */

import { AppDispatch } from '../index';
import { Cell } from '../cell';
import { getCells, setErr, setLoading } from '../slice/cells-slice';
import { axiosInstance } from '../../config';

export const fetchCells = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    try {
      const res = await axiosInstance.get('/fetchCells');

      const data: Cell[] = res.data.Cells;

      dispatch(getCells({ cells: data }));
    } catch (error: any) {
      dispatch(setErr(error.message));
    }
    dispatch(setLoading());
  };
};
