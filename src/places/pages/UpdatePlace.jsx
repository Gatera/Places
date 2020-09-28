import React from "react";
import { useParams } from "react-router-dom";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

function UpdatePlace(props) {
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

  const placeId = useParams().placeId;

  const identifiedPlace = dummyPlaces.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 char)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid="true"
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
}

export default UpdatePlace;
