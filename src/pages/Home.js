import React from 'react'
import { Header } from '../header/Header'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Home.css"
import image_1 from '../assets/images/content-img.jpg'
import image_2 from '../assets/images/content-img-2.jpg'
import image_3 from '../assets/images/content-img-3.png'
import image_4 from '../assets/images/content-img-4.webp'
import img_introduce_1 from '../assets/images/img-introduce.webp'
import img_introduce_2 from '../assets/images/img-introduce-2.webp'
import img_introduce_3 from '../assets/images/img-introduce-3.webp'
import img_introduce_4 from '../assets/images/img-introduce-4.webp'
import logo_intro from '../assets/images/logo-intro.png'
import nangluong_icon from '../assets/images/icon-nangluong.png'
import thanthien_icon from '../assets/images/icon-thanthien.png'
import icon_tamnhin from '../assets/images/icon-tam-nhin.webp'
import icon_sumenh from '../assets/images/icon-su-menh.webp'
import icon_giatri from '../assets/images/icon-gia-tri-cot-loi.webp'
import hinh_khi_dau_mo from '../assets/images/hinh-khi-dau-mo.webp'
import hinh_khi_thien_nhien from '../assets/images/hinh-khi-thien-nhien.webp'
import hinh_khi_thien_nhien_nen from '../assets/images/hinh-khi-thien-nhien-nen.webp'
import hinh_vo_chai_lpg from '../assets/images/hinh-vo-chai-lpg.webp'
import { Footer } from '../footer/Footer';
const PrevArrow = ({ onClick }) => (
    <button
      className="slick-prev"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'gray',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        left: '10px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      &lt;
    </button>
  );
  
  const NextArrow = ({ onClick }) => (
    <button
      className="slick-next"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'gray',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        right: '10px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      &gt;
    </button>
  );
export const Home = () => {
   
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow:<NextArrow></NextArrow>
      };
    
  return (
      <div className='homepage'>
          <Header></Header>
          <Slider {...settings} className='slider-content'>
              <div className='content-img'>
                  <img src={image_1}></img>
              </div>
              <div className='content-img'>
                  <img src={image_2}></img>
              </div>
              <div className='content-img'>
                  <img src={image_3}></img>
              </div>
              <div className='content-img'>
                  <img src={image_4}></img>
              </div>
          </Slider>
          <div className="introduce-company">
              <div className="img-introduce">
                  <div className='img-intro' style={{ backgroundImage: `url(${img_introduce_1})` }}>
                      <div className="item-logo-intro">
                          <img className='logo-intro' src={logo_intro}></img>
                      </div>
                  </div>
              </div>

              <div className="text-introduce">
                  <h4 className='text-1'>GIỚI THIỆU DOANH NGHIỆP</h4>
                  <h3 className='text-2'>CÔNG TY CỔ PHẦN KINH DOANH KHÍ MIỀN NAM</h3>
                  <p>Sau hơn 23 năm hoạt động, hiện Gas South&nbsp;là một trong những nhà cung cấp nhiên liệu khí hàng đầu tại Việt Nam. Ngoài sản phẩm phục vụ dân dụng là&nbsp;LPG chai mang 06 nhãn hiệu Gas Dầu khí, VT-Gas, AGas, Đặng Phước Gas, JP Gas, Đăk Gas được phân phối rộng khắp từ Cà Mau đến Nghệ An, chúng tôi còn cung cấp cho khách hàng công nghiệp các sản phẩm LPG, CNG và sắp tới là LNG, bao gồm việc vận chuyển, đầu tư lắp đặt và vận hành thiết bị. Tại Thành phố Hồ Chí Minh, Gas South là đơn vị duy nhất cung cấp CNG cho hơn 500 xe buýt phục vụ giao thông công cộng. Với thế mạnh cung cấp đồng thời 03 loại nhiên liệu LPG, CNG và LNG, Gas South tự tin đáp ứng tối ưu nhu cầu của khách hàng từ việc đảm bảo ổn định nguồn cung, chất lượng sản phẩm đến giá thành cạnh trạnh nhất.</p>
                  <h3 className='slogan'>Phương châm hoạt động "AN TOÀN - CHẤT LƯỢNG - HIỆU QUẢ"</h3>
                  <div className="icon-content">
                  <div className="icon">
                      <img src={nangluong_icon}></img>
                      <div>Năng lượng
                      từ thiên nhiên</div>
                  </div>
                  <div className="icon">
                      <img src={thanthien_icon}></img>
                      <div>Thân thiện
                          với môi trường</div>
                  </div>
              </div>
              </div>
          </div>
          <div className="tamnhin-sumenh-cotloi">
          <div className="list-box">  
                <div className="box">
                      <div className="box-icon">
                      <div className="icon-thutu">
                                01
                          </div>
                      <img src={icon_tamnhin}></img>
                    </div>
                    <div className="text" style={{ marginBottom: '60px', marginTop:'80px' }}>
                        <div className="text-tieude">
                            Tầm nhìn
                        </div>
                        <div className="text-noidung">
                          Xây dựng và phát triển Công ty Cổ phần Kinh doanh Khí miền Nam bền vững,
                          trở thành nhà cung cấp nhiên liệu sạch hàng đầu Việt Nam.
                        </div>
                    </div>
                  </div>
                  <div className="box">
                      <div className="box-icon">
                          <div className="icon-thutu">
                                02
                          </div>
                      <img src={icon_sumenh}></img>
                        </div>
                        <div className="text"  >
                            <div className="text-tieude">
                                Sứ mệnh
                            </div>
                            <div className="text-noidung">
                                Kiến tạo những giải pháp an toàn, hiệu quả từ nguồn nhiên liệu sạch,
                                mang lại giá trị bền vững cho khách hàng, cổ đông, người lao động và xã hội.
                            </div>
                        </div>
                  </div>
                  <div className="box">
                      <div className="box-icon">
                      <div className="icon-thutu">
                                03
                          </div>
                      <img src={icon_giatri}></img>
                        </div>
                      <div className="text"  >
                          
                            <div className="text-tieude">
                            Giá trị cốt lõi
                            </div>
                            <div className="text-noidung">
                              Đặt lợi ích khách hàng là trên hết, luôn coi trọng chữ tín và tôn trọng mọi
                              người. Luôn khát vọng vươn lên, sáng tạo và không ngừng đổi mới để phát triển.
                            </div>
                        </div>
                  </div>
              </div>
              <div className="img-tamnhin-sumenh" style={{backgroundImage:`url(${img_introduce_1})`}}>
                  
              </div>
              <div className="text-tamnhin-sumenh">
                  
              </div>
          </div>
          <div className="sanpham">
              <div className="tieude-sanpham">
                SẢN PHẨM
              </div>
              <div className="sanpham-content">
                    <div className="block-sp">
                      <img src={hinh_khi_dau_mo}></img>
                      <div className="tensanpham">KHÍ DẦU MỎ HÓA LỎNG (LPG)</div>
                      <div className="tt-sp">
                          <div className="tieude-sanpham">
                          Khí dầu mỏ hóa lỏng (LPG)
                          </div>
                          <div className="noidung-sanpham">
                              Khí dầu mỏ hóa lỏng (LPG - Liquefied Petroleum Gas)
                              thường được gọi là gas, thành phần gồm các loại khí Hydro-Carbon,
                              chủ yếu bao gồm Propane và Butane (gồm cả Iso-Butane),
                              thu được từ quá trình lọc dầu thô hoặc xử lý khí tự nhiên.
                          </div>
                      </div>
                    </div>
                    <div className="block-sp">
                      <img src={hinh_khi_thien_nhien}></img>
                      <div className="tensanpham">KHÍ THIÊN NHIÊN HÓA LỎNG (LPG)</div>
                      <div className="tt-sp">
                          <div className="tieude-sanpham">
                          KHÍ THIÊN NHIÊN HÓA LỎNG (LNG)
                          </div>
                          <div className="noidung-sanpham">
                              Khí thiên nhiên hóa lỏng (LNG) là một loại khí thiên nhiên
                              có thành phần chính là methan. Hiện đang được phân phối
                              bởi Gas South. Cùng tìm hiểu!
                          </div>
                      </div>
                    </div>
                    <div className="block-sp">
                      <img src={hinh_khi_thien_nhien_nen}></img>
                      <div className="tensanpham">KHÍ THIÊN NHIÊN NÉN (CNG)</div>
                      <div className="tt-sp">
                          <div className="tieude-sanpham">
                          Khí thiên nhiên nén (CNG)
                          </div>
                          <div className="noidung-sanpham">
                              CNG (Compressed Natural Gas) là khí thiên nhiên nén,
                              được lấy từ những mỏ khí thiên nhiên. Vậy nó có gì
                              nổi bật hơn so với các nhiên liệu khác?
                          </div>
                      </div>
                    </div>    
                    <div className="block-sp">
                      <img src={hinh_vo_chai_lpg}></img>
                      <div className="tensanpham">VỎ CHAI LPG</div>
                      <div className="tt-sp">
                          <div className="tieude-sanpham">
                          Vỏ chai LPG
                          </div>
                          <div className="noidung-sanpham">
                              Sản phẩm vỏ chai LPG của Gas South đạt các quy chuẩn,
                              tiêu chuẩn sản xuất chai chứa LPG trong nước và quốc tế
                          </div>
                      </div>
                    </div>
              </div>
          </div>
          <Footer></Footer>
    </div>
  )
}
