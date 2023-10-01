import React from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router";
import { Chrono } from "react-chrono";
import img from "../../assets/images/qatardayamyeniyeni2.png";
import "./SingleRoute.css";
import "../../components/trainrouteitem/TrainRouteItem.css";

const SingleRoute: React.FC = () => {
  const items = [
    {
      cardTitle: "10-30 - Bakı",
    },
    {
      cardTitle: "10-45 - Biləcəri",
    },
    {
      cardTitle: "11-00 - Xırdalan",
    },
    {
      cardTitle: "11-08 - Sumqayıt",
    },
  ];
  const params = useParams();
  return (
    <Layout>
      <div className="ion-padding">
        <div className="card-wrapper">
          <div className="card-container">
            <div className="card-left">
              <span className="card-left-title">Departure in:</span>
              <span className="card-left-departuretime">20 min</span>
            </div>
            <div className="card-separator"></div>
            <div className="card-right">
              <div className="card-right-info">
                <span className="card-right-info-city">Baku</span>
                <span className="card-right-info-time">18:00</span>
              </div>
              <div className="card-right-img-container">
                <img className="card-right-img" src={img} alt="" />
                <span className="card-right-trainnum">N:6000</span>
              </div>
              <div className="card-right-info">
                <span className="card-right-info-city">Baku</span>
                <span className="card-right-info-time">18:00</span>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ paddingTop: 10 }}>Bakı-Xırdalan-Sumqayıt</h4>
        <div style={{ paddingTop: 20 }}>
          <Chrono
            theme={{
              primary: "green",
              secondary: "green",
              cardBgColor: "transparent",
              cardTitleColor: '#0CB578',
            }}
            hideControls
            cardHeight="200px"
            borderLessCards
            classNames={{
              card: "my-card",
            }}
            items={items}
            mode="VERTICAL"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SingleRoute;
