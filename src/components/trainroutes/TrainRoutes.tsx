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
    const storedTheme = localStorage.getItem("darkmode");
    const theme = storedTheme ? JSON.parse(storedTheme) : null;
  return (
    <>
      <div className="selectRoute ion-padding ">
      <Select
          className="react-select"
          classNamePrefix="react-select"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: theme ? "#45616A" : "#ececec" ,
              borderRadius: "15px",
              height: "70px",
              padding: "10px",
              boxShadow: "none",
              border: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: theme ? "white" : 'black',
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: theme ? "white" : 'black',
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "15px",
              overflow: "hidden",
              zIndex:3
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: theme ? "#45616A" : '#ececec',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              padding: "15px",
              backgroundColor: theme ? state.isFocused ? "#364e54" : "#41616A" : state.isFocused ? "#dbd9d9" : "#ececec",
              color: theme ? state.isFocused ? "white" : "white" : state.isFocused ? "black" : "black" ,
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color: theme ? 'white' : 'black',
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
