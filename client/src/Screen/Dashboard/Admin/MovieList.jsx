import React, { useEffect, useMemo, useState } from "react";
import HomeAdmin from "./HomeAdmin";
import { Table } from "../../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import EditMovieModal from "../../../Components/Modal/EditMovieModal";
import { getAllMoviesAction } from "../../../Redux/Action/movieAction";
import Loader from "../../../Components/Loader";
import Pagination from "../../../Components/Pagination";

const MovieList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const { isSuccess, isLoading, isError, allMovies, totalPage } = useSelector(
    (state) => state.getAllMovies
  );
  const queries = useMemo(() => {
    const query = {
      page: page ? page : 1,
    };
    return query;
  }, [page]);
  useEffect(() => {
    dispatch(getAllMoviesAction(queries));
    if (isError) {
      dispatch({ type: GET_ALL_MOVIES_RESET });
    }
  }, [dispatch, isError, queries]);
  return (
    <HomeAdmin>
      <EditMovieModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></EditMovieModal>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
        </div>
        {isLoading && <Loader></Loader>}
        {isSuccess && <Table admin={true} data={allMovies}></Table>}
        <Pagination totalPage={totalPage} setPage={setPage}></Pagination>
      </div>
    </HomeAdmin>
  );
};

export default MovieList;
