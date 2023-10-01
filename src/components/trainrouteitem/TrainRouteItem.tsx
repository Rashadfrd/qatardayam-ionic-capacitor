import { useIonRouter } from "@ionic/react";
import img from "../../assets/images/qatardayamyeniyeni2.png";
import "./TrainRouteItem.css";

const TrainRouteItem: React.FC = () => {
  const router = useIonRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/route/1`)}
        className="card-wrapper card-deactive"
      >
        <div className="card-container">
          <div className="card-left">
            <span className="card-left-title">Departed</span>
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
      <div onClick={() => router.push(`/route/1`)} className="card-wrapper">
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
    </>
  );
};

export default TrainRouteItem;
