import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { quanLyNguoiDungserv } from "../../services/quanLyNguoiDung";
import { saveLocalStore } from "../../util/localStore";
import { message } from "antd";
const LoginForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            quanLyNguoiDungserv.dangNhap(values).then((res) => {
                console.log(res);
                //lưu local
                saveLocalStore("user", res.data.content);
                messageApi.success("Đăng nhập thành công");
                // Đưa ng dùng về lại trang chủ
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }).catch((err) => {
                console.log(err);
                messageApi.error(err.response.data.content);
            })
                ;
        },
        validationSchema: yup.object({
            taiKhoan: yup.string().required("Vui lòng không bỏ trống"),
            matKhau: yup.string().required("Vui lòng không bỏ trống"),
        }),
    });

    const { handleSubmit, handleChange, handleBlur, values } = formik;
    return (
        <>
            {contextHolder}
            <div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link
                            to={"/"}
                            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                            Login
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    <div>
                                        <label
                                            htmlFor="taiKhoan"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Tài Khoản
                                        </label>
                                        <input
                                            type="texts"
                                            name="taiKhoan"
                                            id="taiKhoan"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Nhập tài khoản"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                            <p className="text-red-500 mt-2">
                                                {formik.errors.taiKhoan}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="matKhau"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Mật Khẩu
                                        </label>
                                        <input
                                            type="password"
                                            name="matKhau"
                                            id="matKhau"
                                            placeholder="Nhập mật khẩu"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {formik.touched.matKhau && formik.errors.matKhau ? (
                                            <p className="text-red-500 mt-2">{formik.errors.matKhau}</p>
                                        ) : null}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-primary-800"
                                    >
                                        Đăng nhập
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet?{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        >
                                            Đăng ký
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoginForm;
