import React from 'react';


function Journal() {
    return (
    <div class="Journal">
    <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>

    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Players</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Monsters</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Items</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Maps</a>
  </li>
    </ul>
    
    <div class="card" style={{ width: 350}}>
  <img class="card-img-top" src="https://geekandsundry.com/wp-content/uploads/2017/02/Warlock-DD-FI-1024x575.png" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Mage</h5>
    <p class="card-text">Background: Grew up in a temple with other monks before finding interest in the arcane</p>
    <a href="#" class="btn btn-primary">Player Info</a>
  </div>
</div>

<div class="card" style={{ width: 350}}>
  <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcW_qQuHpT-i7gHWY4ccfC9AEabj7xWhBOA&usqp=CAU" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Barbarian</h5>
    <p class="card-text">Background: Fell in love with the fighting ring after watching his father fight.</p>
    <a href="#" class="btn btn-primary">Player Info</a>
  </div>
</div>

</div>

    );
}
export default Journal;