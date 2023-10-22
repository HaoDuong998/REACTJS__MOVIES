import { https } from "./config"
export const quanLyNguoiDungserv = {
    dangNhap: (data) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', data);
    },
};