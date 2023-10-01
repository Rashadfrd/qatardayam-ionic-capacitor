import { IonToggle} from "@ionic/react";
import "./TrainRoutes.css";
import Select from "react-select";
import TrainRouteItem from "../trainrouteitem/TrainRouteItem";

const options = [
  { value: "Baku-Pirsagi-Sumqayit", label: "Baku-Pirsagi-Sumqayit" },
  { value: "Sumqayit-Pirsagi-Baku", label: "Sumqayit-Pirsagi-Baku" },
  { value: "Baku-Xirdalan-Sumqayit", label: "Baku-Xirdalan-Sumqayit" },
  { value: "Sumqayit-Xirdalan-Baku", label: "Sumqayit-Xirdalan-Baku" },
];

const TrainRoutes: React.FC = () => {
  return (
    <>
      <div className="selectRoute ion-padding ">
        <Select
          className="react-select"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#ececec",
              borderRadius: "15px",
              height: "70px",
              padding: "10px",
              boxShadow: "none",
              border: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "15px",
              overflow: "hidden",
              zIndex: 3,
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "#ececec",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              padding: "15px",
              backgroundColor: state.isFocused ? "#dbd9d9" : "#ececec",
              color: state.isFocused ? "black" : "black",
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color: "black",
            }),
          }}
          options={options}
          isSearchable={false}
          placeholder="Istiqaməti seçin"
        />
      </div>

      <div className="toggle ion-padding">
        <IonToggle>İstirahət günləri</IonToggle>
      </div>

      <div className="cards ion-padding">
        <TrainRouteItem />
      </div>
    </>
  );
};

export default TrainRoutes;
