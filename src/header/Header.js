import React from 'react'
import './Header.css'
import logo from '../assets/images/logo.png'
import location from '../assets/images/location.png'
import email_svg from '../assets/images/email-part-2-svgrepo-com.svg'
import search_icon from '../assets/images/search.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Header = () => {
    
    return (
        <div className='header'>
            <div className="top-header"></div>
            <div className="content-header">
                <img className='logo' src={logo}></img>
                <div className="logo-text">
                    <div className="text-1">CÔNG TY CỔ PHẦN KINH DOANH KHÍ MIỀN NAM</div>
                    <div className="text-2">SOUTHERN GAS TRADING JSC</div>
                </div>
                <div className="address">
                    <div className="location-svg">
                        <img src={location} ></img>
                    </div>
                    <div className="address-text">
                        <div className="address-text-1">
                            Lầu 4, PetroVietnam Tower,
                        </div>
                        <div className="address-text-2">
                            1-5 Lê Duẩn, P. Bến Nghé, Q.1, TP. HCM
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="email-svg">
                        <img src={email_svg} ></img>
                    </div>
                    <div className="contact-text">
                        <div className="contact-text-1">
                            Email
                        </div>
                        <div className="contact-text-2">
                            lienhe@pgs.com.vn
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="menu-item">TRANG CHỦ

                </div>
                <div className="menu-item">GIỚI THIỆU
                    <div className="list-down">
                        <div className="item-down">
                            Thông tin chung
                        </div>
                        <div className="item-down">
                            Cơ cấu tổ chức
                        </div>
                        <div className="item-down">
                            Đơn vị trực thuộc - Thành viên
                        </div>
                        <div className="item-down">
                            Hệ thống kho chứa - Trạm nạp
                        </div>
                   </div>

                </div>
                <div className="menu-item">TIN TỨC
                    <div className="list-down">
                        <div className="item-down">
                            Tin Gas South
                        </div>
                        <div className="item-down">
                            Tin Dầu khí
                        </div>
                        <div className="item-down">
                            Hình ảnh hoạt động
                        </div>
                   </div>

                </div>
               
                <div className="menu-item">SẢN PHẨM - DỊCH VỤ
                    <div className="list-down">
                        <div className="item-down">
                           Khí thiên nhiên hóa lỏng (LNG)
                        </div>
                        <div className="item-down">
                            Khí Thiên nhiên nén (CNG)
                        </div>
                        <div className="item-down">
                            Khí dầu mỏ hóa lỏng (LPG)
                        </div>
                        <div className="item-down">
                            Vỏ chai (LPG)
                        </div>
                   </div>
                </div>
                <div className="menu-item">AN TOÀN - SỨC KHỎE - MÔI TRƯỜNG
                    <div className="list-down">
                        <div className="item-down">
                           Hệ thống quản lý An toàn - Chất lượng - Môi trường - Năng lượng
                        </div>
                        <div className="item-down">
                            Chính sách An toàn - Môi trường - Chất lượng -Năng lượng
                        </div>
                        <div className="item-down">
                            Mục tiêu An toàn - Chất lượng - Môi trường
                        </div>
                        <div className="item-down">
                            Giấy chứng nhận bảo hiểm trách nhiệm
                        </div>
                   </div>

                </div>
                <div className="menu-item">QUAN HỆ CỔ ĐÔNG
                <div className="list-down">
                        <div className="item-down">
                           Thông tin cổ đông
                        </div>
                        <div className="item-down">
                            Văn bản công ty
                        </div>
                        <div className="item-down">
                            Thông tin cổ phiếu
                        </div>

                   </div>
                </div>
                <div className="menu-item">THÔNG TIN ĐẤU THẦU</div>
                <div className="menu-item">LIÊN HỆ</div>
                <div className="menu-item"><img style={{width:'40px'}} className='search-icon' src={search_icon}></img></div>
            </div>
            <div className="header-bottom">

            </div>
        </div>
        
    )
}
