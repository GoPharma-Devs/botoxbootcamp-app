import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import axios from "axios";

function TopTres() {
  const [top, setTop] = useState([]);
  //se pintan solo tres jugadores
  var topTresRefactor = top.slice(0, 3);

  useEffect(() => {
    var config = {
      method: "get",
      //la consulta es del total de jugaodres
      url: "https://botoxb-be.herokuapp.com/api/players",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setTop(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }


  function putEmoji (i) {
    if (i===1){
      return i = "⭐️ ⭐️ ⭐️"
    }else if (i===2){
      return i = "⭐️ ⭐️"
    }
    else if (i===3){
      return i = "⭐️ "
    }
     

  }

  return (
    <header>
     <Fade bottom>
          <h1>Top 10 players</h1>
        </Fade>
        <Fade bottom>
      <div className="top-tres">
        {topTresRefactor.map((top, index) => (
          <div key={top._id} className="col">
            
            <img src={top.thumbnail} alt="" />
            <p>{putEmoji(index + 1)}</p>
            <p className="name">{top.username}</p>
            <p className="place">{ordinal_suffix_of(index + 1)}</p>
            
            <div className="puntos">
              <p className="puntos-numeros">
                {" "}
                <span>{top.score} PUNTOS</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      </Fade>
    </header>
  );
}

export default TopTres;
