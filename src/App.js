import React, { useState } from "react";
import "./styles.css";

// const placeList = ["Himachal", "Uttarakhand", "NorthEast"];

const placesDictionary = {
  Himachal: {
    placeInfo: {
      Shimla: "7",
      Manali: "7",
      Chandigarh: "6",
      Dalhousie: "8",
      Chandigarh: "6",
      Amritsar: "8",
      Dharamshala: "7"
    }
  },
  Uttarakhand: {
    placeInfo: {
      Nainital: "7",
      Rishikesh: "8.5",
      Mussorie: "10",
      Haridwar: "6.5",
      Almora: "8.5",
      Dehradun: "9",
      Devprayag: "9",
      Kedarnath: "8.5"
    }
  },
  NorthEast: {
    placeInfo: {
      Cherrapunjee: "10",
      Shillong: "10",
      Silchar: "9",
      Tawang: "8",
      Tezpur: "7.5",
      Guwahati: "5.5",
      Bombdila: "7"
    }
  }
};
const placeList = Object.keys(placesDictionary);

export default function App() {
  const [placessAndratings, setplacessAndratings] = useState({});
  // const [ratings, setratings] = useState([]);
  function placeClickHandler(item) {
    var placeDictionary = placesDictionary[item].placeInfo;
    const restaurantList = Object.keys(placeDictionary);
    const ratingList = Object.values(placeDictionary);
    // console.log(restroList);
    var placessAndratings = {};
    restaurantList.forEach(
      (key1, key2) => (placessAndratings[key1] = ratingList[key2])
    );
    setplacessAndratings(placessAndratings);
    // console.log(placessAndratings);
    // console.log(Object.keys(placessAndratings));
    // setratings(ratingList)
  }

  return (
    <div className="App">
      <h2>Place Recommender🏔️</h2>
      <h4>
        Checkout my favourite spots in North-India.Click on a region to know
        more!
      </h4>
      {placeList.map((item) => {
        return (
          <button
            onClick={() => {
              placeClickHandler(item);
            }}
          >
            {" "}
            {item}{" "}
          </button>
        );
      })}
      <hr></hr>

      {Object.keys(placessAndratings).map((restaurant) => {
        return (
          <div className="div-list-item">
            <div className="div-large-text">{restaurant}</div>
            <div className="div-small-text">
              {" "}
              {placessAndratings[restaurant]} / 10{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
