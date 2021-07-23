import React from "react";
// Components
import Navbar from "components/Navbar";
// MUIcons
import PersonIcon from "@material-ui/icons/Person";

const Member = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex-row mg-t-80">
        <ul className="member-actions flex-col">
          <ul className="mobile-noshow mg-b-28">
            <h5>會員中心</h5>
          </ul>
          <ul className="mg-b-24">
            <a href="/#">會員資料修改</a>
          </ul>
          <ul className="mg-b-24">
            <a href="/#">訂單查詢</a>
          </ul>
          <ul className="mg-b-24">
            <a href="/#">退／換貨申請</a>
          </ul>
        </ul>
        <ul className="form flex-col mg-b-20">
          <li>
            <h6 className="title">個人資料修改</h6>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">會員帳號</h6>
            <h6>email@example.com</h6>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">會員姓名</h6>
            <input type="text" className="long-width" />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">會員性別</h6>
            <select name="gender" id="gender" className="gender">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">電子信箱</h6>
            <input
              type="text"
              className="long-width"
              placeholder="email@example.com"
            />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">手機號碼</h6>
            <input type="text" className="long-width" />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">聯絡地址</h6>
            <select name="area" id="area" className="short-width">
              <option value="台灣及離島">台灣及離島</option>
            </select>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <select name="area" id="area" className="area-short-width mg-r-8">
              <option value="高雄市">高雄市</option>
            </select>
            <select name="area" id="area" className="area-short-width">
              <option value="鹽埕區">鹽埕區</option>
            </select>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <input
              type="text"
              className="long-width"
              placeholder="請輸入地址"
            />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <h6>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="checkbox"
              />
              我願意收到最新優惠情報
            </h6>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">配送地址</h6>
            <select name="area" id="area" className="area-short-width">
              <option value="台灣及離島">台灣及離島</option>
            </select>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <select name="area" id="area" className="area-short-width mg-r-8">
              <option value="高雄市">高雄市</option>
            </select>
            <select name="area" id="area" className="short-width">
              <option value="鹽埕區">鹽埕區</option>
            </select>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <input
              type="text"
              className="long-width"
              placeholder="請輸入地址"
            />
          </li>
          <li className="flex-row mg-b-48">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <a href="/#" className="btn">
              確定修改
            </a>
          </li>
          <li className="mg-b-16">
            <h6 className="title">修改密碼</h6>
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-47">舊密碼</h6>
            <input type="text" className="long-width" />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-47">新密碼</h6>
            <input type="text" className="long-width" />
          </li>
          <li className="flex-row mg-b-20">
            <h6 className="mg-r-31">確認密碼</h6>
            <input type="text" className="long-width" />
          </li>
          <li className="flex-row mg-b-48">
            <h6 className="blank-box  mg-r-31">{""}</h6>
            <a href="/#" className="btn">
              變更密碼
            </a>
          </li>
        </ul>

        <ul className="details mg-b-60">
          <li className="info flex-row mg-b-24">
            <PersonIcon />
            <h6>會員編碼 T00020080615</h6>
          </li>
          <li className="info flex-row mg-b-16">
            <h6 className="mg-r-47">購物車</h6>
            <h6>56</h6>
          </li>
          <li className="info flex-row mg-b-16">
            <h6 className="mg-r-31">我的收藏</h6>
            <h6>23</h6>
          </li>
          <li className="info flex-row mg-b-16">
            <h6 className="mg-r-31">完成訂單</h6>
            <h6>8</h6>
          </li>
          <li className="info flex-row mg-b-16">
            <h6 className="mg-r-31">會員紅利</h6>
            <h6>2680</h6>
          </li>
          <li className="info flex-row">
            <h6 className="mg-r-47">邀請碼</h6>
            <h6>TK2075</h6>
          </li>
          <li>
            <p>新戶輸入邀請碼即可獲贈紅利點數1000點</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Member;
