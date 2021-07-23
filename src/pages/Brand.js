// MUIcons
import FavoriteIcon from "@material-ui/icons/Favorite";

// Components
import Navbar from "components/Navbar";
// Assets
import img1 from "assets/img/product1.jpg";
import img2 from "assets/img/product2.jpg";
import img3 from "assets/img/product3.jpg";

const Brand = () => {
  return (
    <div>
      <Navbar />
      <div className="container brand">
        <ul className="brand-l">
          <li className="sm-no-show mg-b-30">
            <img src={img1} alt="" className="img-w" />
          </li>
          <li className="mg-b-30">
            <img src={img2} alt="" className="img-l mg-r mg-b-16" />
            <img src={img3} alt="" className="img-l" />
          </li>
          <li>
            <img src={img1} alt="" className="img-w" />
          </li>
        </ul>
        <ul className="brand-r mg-b">
          <li className="sm-show mg-b-30">
            <img src={img1} alt="" className="img-w" />
          </li>
          <li>
            <h3>CHANEL N°5</h3>
          </li>
          <li className="mg-b-32">
            <h5>
              N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
            </h5>
          </li>
          <li className="mg-b-12">
            <h5>NT$4,980</h5>
          </li>
          <li className="mg-b-8">
            <input type="number" value="1" />
            <a href="/#">加入購物車</a>
          </li>
          <li className="favorite mg-b-80">
            <FavoriteIcon className="colorBrown" />
            <h6>加入我的收藏</h6>
          </li>
          <li className="mg-b-8">
            <h6 className="fontBold">商品購買須知</h6>
          </li>
          <li className="mg-b-20">
            <h6>
              產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
              商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
              D’Perfume
              盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
            </h6>
          </li>
          <li className="mg-b-8">
            <h6 className="fontBold">退換貨須知</h6>
          </li>
          <li>
            <h6>
              依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brand;
