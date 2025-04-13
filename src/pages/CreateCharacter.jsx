import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client.js";
import NavBar from "../components/NavBar.jsx";

const CreateCharacter = () => {
  const [character, setCharacter] = useState({
    name: "",
    numSlot: "",
    health: "",
    speed: "",
  });

  const navigate = useNavigate();

  //change when typing in the input box
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //when click on submit, it creates a character in the database
  const createCharacter = async (e) => {
    e.preventDefault();

    await supabase
      .from("Character")
      .insert({
        name: character.name,
        numSlots: character.numSlot,
        health: character.health,
        speed: character.speed,
      })
      .select();

    navigate("/view");
  };

  return (
    <>
      <NavBar />
      <h1>Create Your Character</h1>
      <div className="form-container">
        <form>
          <div className="form-item">
            <label htmlFor="name">Name</label> <br />
            <input type="text" name="name" id="name" onChange={handleChange} />
          </div>

          <div className="form-item">
            <label htmlFor="numSlot">Numer of Slots</label> <br />
            <input
              type="text"
              name="numSlot"
              id="numSlot"
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="health">Health</label> <br />
            <input
              type="text"
              name="health"
              id="health"
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="speed">Speed</label> <br />
            <input
              type="text"
              name="speed"
              id="speed"
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <input type="submit" value="Submit" onClick={createCharacter} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCharacter;
