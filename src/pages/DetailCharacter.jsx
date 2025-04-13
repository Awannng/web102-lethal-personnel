import React, { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({
    name: "",
    numSlots: "",
    health: "",
    speed: "",
  });

  const navigation = useNavigate();

  const { id } = useParams();

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
  }, []);

  // delete a character based on id from database and goes back to ViewCharacter
  const deleteCharacter = async () => {
    await supabase.from("Character").delete().eq("id", id);
    navigation('/view')
  };

  return (
    <>
      <NavBar />
      <div className="character-detail">
        {character && (
          <div>
            <p>Name: {character.name}</p>
            <p>Munber of Slots: {character.numSlots}</p>
            <p>Health: {character.health}</p>
            <p>Speed: {character.speed}</p>

            <div className="buttons">
              <button className="delete" onClick={deleteCharacter}>
                Delete
              </button>
              <button className="back">
                <Link to="/view">Back</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailCharacter;
