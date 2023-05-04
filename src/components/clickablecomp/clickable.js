import React, { useState, useEffect } from "react";
import './clickable.css'
import data from './../../data/data.json';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
  
    useEffect(() => {
      setUsers(data);
      setSelectedUserId(data[0].id); // set the default selected user to the first user in the array
    }, []);

    const handleClick = (id) => {
        const user = users.find(user => user.id === id);
        //alert(`${user.name}'s path is ${user.imagePath}`);
      }

      const handleUserClick = (userId) => {
        setSelectedUserId(userId);
      }

    return (

<section id="team">
<h3 class="section-title-2">THE KINGS AND THEIR LEGACY</h3>
<div class="section-title-divider"></div>
<br />
<div class="container second-section" data-aos="fade-up">
  <div class="row clearfix">
        <div class="col-lg-12">
            <div class="card chat-app">
                <div id="plist" class="people-list">
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                    </div>
                    <ul class="list-unstyled chat-list mt-2 mb-0">

                        {users.map(user => (
                        <li key={user.id} onClick={() => {handleClick(user.id); handleUserClick(user.id)}} class="clearfix">
                        <img src={user.imagePath} alt=""></img>
                            <div class="about">
                                 <div class="name">{user.name}
                                </div>
                            </div>
                        </li>
                        ))}

                    </ul>
                </div>
                <div class="chat">
                    <div class="chat-header clearfix">
                        <div class="row">
                            <div class="col-lg-8">
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                </a>
                                <div class="chat-about">
                                {selectedUserId && (
                                    <h4>{users.find(user => user.id === selectedUserId).name}</h4>
                                    )}
                                </div>
                            </div>
                    
                        </div>
                    </div>
                    <div class="chat-history">
                    {selectedUserId && (
                        <h6>{users.find(user => user.id === selectedUserId).details}</h6>
                    )}
                    </div>
                    <div class="chat-message clearfix">
                        <div class="input-group mb-0">
                            <div class="input-group-prepend">
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
      
    );
  }
  
  export default App;

/*
class ClickableComponent extends React.Component {

    
    render() {
        return (

<section id="team">
    <h3 class="section-title-2">THE KINGS AND THEIR LEGACY</h3>
    <div class="section-title-divider"></div>
    <br />
    <div class="container second-section" data-aos="fade-up">
      <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <div id="plist" class="people-list">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            </div>
                        </div>
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            <li class="clearfix">
                            <img src={image1} alt=""></img>
                                <div class="about">
                                    <div class="name">{chessPlayers.chessPlayers[0].name}
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix">
                            <img src={image2} alt=""></img>
                                <div class="about">
                                    <div class="name">{chessPlayers.chessPlayers[1].name}</div>
                            
                                </div>
                            </li>
                            <li class="clearfix">
                            <img src={image3} alt=""></img>
                                <div class="about">
                                    <div class="name">{chessPlayers.chessPlayers[2].name}</div>
                        
                                </div>
                            </li>                                    
                            <li class="clearfix">
                            <img src={image4} alt=""></img>
                                <div class="about">
                                    <div class="name">{chessPlayers.chessPlayers[3].name}</div>
                            
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-8">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                    </a>
                                    <div class="chat-about">
                                        <h4>Magnus Carlsen</h4>
                                    </div>
                                </div>
                        
                            </div>
                        </div>


                        <div class="chat-history">
                        {chessPlayers.chessPlayers[1].details}
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                                <div class="input-group-prepend">
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</section>
        )
        }

}


export default ClickableComponent
*/
