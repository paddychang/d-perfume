import React from "react";
// Components
import Hero from "components/Hero";
// Assets
import img1 from "assets/img/index2.jpg";
import img2 from "assets/img/index3.png";
import img3 from "assets/img/index4.jpg";
import img4 from "assets/img/index5.jpg";
import img6 from "assets/img/index6.jpg";
import img7 from "assets/img/index7.jpg";
import img8 from "assets/img/index8.jpg";
import img9 from "assets/img/index9.jpg";
// Components
import Subscribe from "components/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mg-b">
        <ul className="home-content">
          <li className="desc mg-l">
            <h3>Gabrielle CHANEL</h3>
            <h5 className="ff-ch  mg-b1">
              全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。
              極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
            </h5>
            <a href="/#" className="link-brown">
              查看更多
            </a>
          </li>
          <li>
            <img src={img1} alt="chanel" />
          </li>
        </ul>
        <ul className="row-r home-content">
          <li className="desc mg-r">
            <h3>Five O’clock Au Gingembre</h3>
            <h5 className="ff-ch mg-b1">
              生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
            </h5>
            <a href="/#" className="link-brown">
              查看更多
            </a>
          </li>
          <li>
            <img src={img2} alt="chanel" />
          </li>
        </ul>
        <ul className="home-content">
          <li className="desc mg-l">
            <h3>CHANEL N°5</h3>
            <h5 className="ff-ch mg-b1">
              N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
            </h5>
            <a href="/#" className="link-brown">
              查看更多
            </a>
          </li>
          <li>
            <img src={img3} alt="chanel" />
          </li>
        </ul>
        <ul className="row-r home-content">
          <li className="desc-l mg-r">
            <h4>1. Levels of Preventive Maintenance Compliance</h4>
            <h6 className="mg-b3-25">
              The core idea of preventative maintenance is the performance of
              proactive actions against unscheduled downtime in order to
              identify potential defects before they evolve into something more
              severe.
            </h6>
            <h4>2. Percentage of Planned Maintenance</h4>
            <h6 className="mg-b3-25">
              The planned maintenance percentage is the total planned
              maintenance time in your CMMS software over a date range over the
              total number of hours of a service performed by the technicians.
            </h6>
            <h4>3. Critical percentage of planned maintenance</h4>
            <h6>
              Calculating the critical percentage of planned maintenance will
              help you prioritize the most important operations that should be
              performed immediately.
            </h6>
          </li>
          <li>
            <img src={img4} alt="chanel" className="img-l" />
          </li>
        </ul>
      </div>
      <div className="promot mg-b">
        <div className="container goods-list">
          <ul className="goods-card">
            <li>
              <img src={img6} alt="poppy" />
            </li>
            <li>
              <h4>Poppy & Barley</h4>
            </li>
            <li className="mg-b1">
              <h6>Jo Malone</h6>
            </li>
            <li>
              <h6>
                NT$1,380 <span className="discount">NT$1,580</span>
              </h6>{" "}
            </li>
          </ul>
          <ul className="goods-card">
            <li>
              <img src={img7} alt="poppy" />
            </li>
            <li>
              <h4>Body Wash</h4>
            </li>
            <li className="mg-b1">
              <h6>Curology</h6>
            </li>
            <li>
              <h6>NT$1,580</h6>
            </li>
          </ul>
          <ul className="goods-card mg-b32">
            <li>
              <div
                className="sold-out"
                style={{
                  backgroundImage: `url(${img8})`,
                }}
              >
                <h4>Sold out</h4>
              </div>
            </li>
            <li>
              <h4>Apple Cider Vinegar Capsule</h4>
            </li>
            <li className="mg-b1">
              <h6>Tonik</h6>
            </li>
            <li>
              <h6>NT$1,580</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <ul className="recycle mg-b">
          <li>
            <img src={img9} alt="bottle recycling" />
          </li>
          <li>
            <ul className="recycle-desc">
              <li>
                <h3>Bottle-Recycling</h3>
              </li>
              <li className="mg-b1">
                <h5>Recycle your used empty bottles and be rewarded!</h5>
              </li>
              <li className="mg-b1">
                <h6>
                  For the past 10 years, we have collected over 800,000 bottles
                  through Empty Bottle Recycling Campaign and planted more than
                  860 pine trees for a better environment.For the past 10 years,
                  we have collected over 800,000 bottles through Empty Bottle
                  Recycling Campaign and planted more than 860 pine trees for a
                  better environment.
                </h6>
              </li>
              <li>
                <a href="/#" className="link-brown">
                  查看更多
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
