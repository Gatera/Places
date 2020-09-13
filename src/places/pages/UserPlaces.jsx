import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const dummyPlaces = [
  {
    id: "p1",
    title: "Kigali Convention Center",
    description: "The best building in Rwanda",
    imageURL:
      "https://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2018/09/21/radisson.jpg",
    address: "KG 2 Roundabout, Kigali",
    location: {
      lat: -1.9545556,
      lng: 30.0916647,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Kigali Heights",
    description: "The best mall in Rwanda",
    imageURL:
      "https://www.kigaliheights.com/wp-content/uploads/2013/10/5-600x360.jpg",
    address: "KG 7 Ave, Kigali",
    location: {
      lat: -1.9534834,
      lng: 30.0964293,
    },
    creator: "u2",
  },
];

function UserPlaces(props) {
  const userId = useParams().uid;
  const loadedPlaces = dummyPlaces.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
