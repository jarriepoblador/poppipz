import React, { useState, useEffect } from "react";
import './content.css'
import chessPlayers from './../../data/chessPlayers.json';
import image1 from '../assets/img/GarryKasparov.jpg';
import image2 from '../assets/img/MagnusCarlsen.jpg';
import image3 from '../assets/img/AnatolyKarpov.jpg';
import image4 from '../assets/img/BobbyFischer.jpg';

/*function ChessPlayers() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetch('./../../data/chessPlayers.json')
      .then(response => response.json())
      .then(data => setPlayers(data.chessPlayers))
      .catch(error => console.log(error));
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  }

  return (
    <div>
      <h1>Chess Players</h1>
      {players.map(player => (
        <div key={player.id} onClick={() => handlePlayerClick(player)}>
          <h2>{player.name}</h2>
          <p>{player.details}</p>
        </div>
      ))}
      {selectedPlayer && (
        <div>
          <h2>{selectedPlayer.name}</h2>
          <p>{selectedPlayer.details}</p>
        </div>
      )}
    </div>
  );
}*/

class ContentComponent extends React.Component {
  
    render() {
        return (
         
    <section id="team">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Most Famous Chess Players In The World</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Chess is a game that has captivated the minds of people for centuries. Over the years, many great players have emerged, each bringing their unique style and approach to the game. From aggressive and attacking play to calculated and defensive maneuvers, the world of chess has seen it all. In this regard, here are the top 4 most famous chess players in the world, their backgrounds, and their achievements.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="member">
              <div class="pic"><img src={image1} alt=""></img></div>
              <h4>{chessPlayers.chessPlayers[0].name}</h4>
            </div>
          </div>

          <div class="col-md-3">
            <div class="member">
              <div class="pic"><img src={image2} alt=""></img></div>
              <h4>{chessPlayers.chessPlayers[1].name}</h4>
            </div>
          </div>

          <div class="col-md-3">
            <div class="member">
              <div class="pic"><img src={image3} alt=""></img></div>
              <h4>{chessPlayers.chessPlayers[2].name}</h4>
            </div>
          </div>

          <div class="col-md-3">
            <div class="member">
              <div class="pic"><img src={image4} alt=""></img></div>
              <h4>{chessPlayers.chessPlayers[3].name}</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
        )
    }
}

export default ContentComponent