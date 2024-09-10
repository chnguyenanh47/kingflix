import React, { useEffect } from 'react'
import HomeAdmin from './HomeAdmin'
import { RiMovie2Fill } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from '../../../Redux/Action/movieAction';
import { getCategoriesAction } from '../../../Redux/Action/categoryAction';

const Statistics = () => {
  const dispatch = useDispatch()
  const { moviesCount } = useSelector(
    (state) => state.getAllMovies
  );
  const {categories} = useSelector(
    (state) => state.getCategories
  );
  const StatisticsData = [
    {
      bg:"bg-orange-600",
      title:"Total Movies",
      total: moviesCount,
      icon: RiMovie2Fill
    },
    {
      bg:"bg-blue-600",
      title:"Total Categories",
      total: categories?.length,
      icon: TbCategoryFilled
    },
    {
      bg:"bg-green-600",
      title:"Total Users",
      total: 10,
      icon: FaUsers
    },
  ]
  useEffect(() => {
    dispatch(getAllMoviesAction());
    dispatch(getCategoriesAction());
  }, [dispatch]);
  return (
   <HomeAdmin>
    <h2 className='text-xl font-bold'>Statistics</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {StatisticsData.map((stat,index) => (
        <div key={index} className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2">
          <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${stat.bg}`}>
          <stat.icon />
          </div>
          <div className="col-span-3">
            <h2>{stat.title}</h2>
            <p className='mt-2 font-bold'>{stat.total}</p>
          </div>
        </div>
      ))}
      <h3 className='text-md font-medium my-6 text-border'>Recent Movies</h3>
    </div>
   {/* {isSuccess && <Table admin={true} data={listMovie.movies}></Table>} */}

   </HomeAdmin>
  )
}

export default Statistics