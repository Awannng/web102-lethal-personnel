import React, { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const ViewCharacter = () => {
  const [character, setCharacter] = useState([]);

  // fetch the character data from the supabase
  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await supabase
        .from("Character")
        .select()
        .order("created_at", { ascending: true });

      setCharacter(data);
    };
    fetchCharacter();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Character Gallery</h1>
      <div className="character-container">
        {character.length > 0 ? (
          character.map((char, index) => {
            return (
              <div key={index} className="character-info">
                <img
                  src="src/assets/worker.png"
                  width="200px"
                  alt="a player img"
                />
                <div className="info-content">
                  <p>Name: {char.name}</p>

                  <div className="buttons">
                    <button className="update">
                      <Link to={`/update/${char.id}`}>Update</Link>
                    </button>
                    <button className="detail">
                      <Link to={`/detail/${char.id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <h1>No characters being added yet...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewCharacter;
