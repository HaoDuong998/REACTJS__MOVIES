import React, { useState } from 'react'
import { Carousel } from 'antd';
import TrailerModal from '../TrailerModal/TrailerModal';
import './carousel.scss';

const contentStyle = {
    margin: 0,
    height: '500px',
    position: 'relative',
};
const trailerBanner = [
    <iframe width="100%" height="350" src="https://www.youtube.com/embed/8jraVtX821Q" title="BÀN TAY DIỆT QUỶ | TRAILER | KHỞI CHIẾU 09.04.2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe width="100%" height="350" src="https://www.youtube.com/embed/2EnP2tVC00Q" title="Phim &quot;Lật Mặt 6: Tấm Vé Định Mệnh&quot; Trailer | KC 28.04.2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    <iframe width="100%" height="350" src="https://www.youtube.com/embed/MYa7L4jp11E" title="Mortal Kombat 1 - Official Launch Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
];

const BannerCarousel = ({ listBanner }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contentModal, setContentModal] = useState("");
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-right"></i>

            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        );
    }
    return (
        <>
            <Carousel afterChange={onChange} id="banner" arrows={true} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />}>
                {listBanner.map((item, index) => {
                    // console.log(item)
                    return (
                        <div key={index}>
                            <div style={contentStyle}>
                                <img className='h-full w-full object-cover' src={item.hinhAnh} alt='' />
                                <div onClick={() => {
                                    setIsModalOpen(true);
                                    setContentModal(trailerBanner[index]);
                                }} className="icon_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[60px]">
                                    <i class="fa-regular fa-circle-play"></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            <TrailerModal isModalOpen={isModalOpen} onCancel={() => {
                setIsModalOpen(false);
            }}
                contentModal={contentModal}
            />
        </>
    );
};

export default BannerCarousel