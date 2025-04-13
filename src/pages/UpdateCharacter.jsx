import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client.js";
import NavBar from "../components/NavBar.jsx";

const UpdateCharacter = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [character, setCharacter] = useState({
    name: "",
    numSlots: "",
    health: "",
    speed: "",
  });

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

  // fetch the character info based on id
  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await supabase
        .from("Character")
        .select()
        .eq("id", id)
        .single();

      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  //when click on Update, it update the character in the database
  const updateCharacter = async (e) => {
    e.preventDefault();

    await supabase
      .from("Character")
      .update({
        name: character.name,
        numSlots: character.numSlots,
        health: character.health,
        speed: character.speed,
      })
      .eq("id", id);

    navigation("/view");
  };

  return (
    <>
      <NavBar />
      <h1>Update Your Character</h1>
      <div className="form-container">
        <form>
          {/* display the character current info in each input box */}
          <div className="form-item">
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              name="name"
              id="name"
              value={character.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="numSlots">Numer of Slots</label> <br />
            <input
              type="text"
              name="numSlots"
              id="numSlots"
              value={character.numSlots}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="health">Health</label> <br />
            <input
              type="text"
              name="health"
              id="health"
              value={character.health}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="speed">Speed</label> <br />
            <input
              type="text"
              name="speed"
              id="speed"
              value={character.speed}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <input type="submit" value="Update" onClick={updateCharacter} />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCharacter;
