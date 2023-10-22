import React, { useEffect, useState } from 'react'
import { quanLyPhimServ } from '../../services/quanLyPhim'
import BannerCarousel from '../../Components/Carousel/Carousel'
import ListMovie from '../../Components/ListMovie/ListMovie'
import { useDispatch } from 'react-redux'
import { getAllMovieApi } from '../../redux/phimSlice'
import TabHeThongRap from '../../Components/TabHeThongRap/TabHeThongRap'
const Home = () => {
    const dispatch = useDispatch();
    const [listBanner, setListBanner] = useState([]);
    useEffect(() => {
        quanLyPhimServ.getAllBanner().then((result) => {
            console.log(result)
            //setState
            setListBanner(result.data.content);
        })
            .catch((error) => {
                console.log(error)
            });
        dispatch(getAllMovieApi());
    }, []);
    return (
        <div>
            <BannerCarousel listBanner={listBanner} />
            <ListMovie />
            <TabHeThongRap />
        </div>
    );
};

export default Home