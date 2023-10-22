import React from 'react'
import { useSelector } from 'react-redux'
import CarouselMovie from '../CarouselMovie/CarouselMovie';
const ListMovie = () => {
    const { listPhim } = useSelector((state) => state.phimSlice);
    return (
        <div className='listMovies container mx-auto text-center py-20 bg-slate-700'>
            <h2 className='text-3xl font-bold '>Danh sách phim
            </h2>
            <CarouselMovie listPhim={listPhim} />
        </div>
    )
}

export default ListMovie