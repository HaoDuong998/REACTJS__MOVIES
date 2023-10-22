import { https } from "./config"

export const quanLyPhimServ = {
    //Phương thức gọi dữ liệu:
    getAllBanner: () => {
        //có 2 tham số cần truyền 1 là endpoint của url đc gọi
        //tham số 2 là data, sẽ dc truyền vào nếu api cần đc gửi dữ liệu lên = pt post
        return https.get('/api/QuanLyPhim/LayDanhSachBanner')
    },
    getAllMovie: () => {
        return https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
    }
};