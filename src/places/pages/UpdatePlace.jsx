import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

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

function UpdatePlace(props) {
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = dummyPlaces.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min 5 char)."
          onInput={inputHandler}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    )
  );
}

export default UpdatePlace;
