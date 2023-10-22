import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRap'
import { Tabs } from 'antd'
import './tabLichChieu.scss'
const TabLichChieu = ({ maHeThongRap }) => {
    const [cumRap, setCumRap] = useState([]);
    console.log(cumRap);
    useEffect(() => {
        quanLyRapServ.layThongTinLichChieuHeThongRap(maHeThongRap)
            .then((res) => {
                console.log(res)
                setCumRap(res.data.content[0].lstCumRap);
            }).catch((err) => {
                console.log(err)
            })
    }, []);

    console.log(cumRap)
    return (
        <div>
            < Tabs
                tabPosition={'left'}
                items={
                    cumRap.map((item, index) => {
                        console.log(item)
                        return {
                            label: (
                                <div className='text-left w-72'>
                                    <h4 className='truncate ...'>{item.tenCumRap}</h4>
                                    <p className='truncate ...'>{item.diaChi}</p>
                                </div>
                            ),
                            key: index,
                            children: <div>
                                {item.danhSachPhim?.map((i, index) => {
                                    return (
                                        <div className='flex'>
                                            <div>
                                                <img className='w-20 h-20' src={i.hinhAnh} alt='' />
                                            </div>
                                            <div>
                                                <h5>{i.tenPhim}</h5>
                                                <div className='grid grid-cols-2 gap-3'>
                                                    {i.lstLichChieuTheoPhim.slice(0, 4).map((lichChieu, index) => {
                                                        return <p key={index}>{lichChieu.ngayChieuGioChieu}</p>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    })
                }
            />
        </div >
    )
}

export default TabLichChieu