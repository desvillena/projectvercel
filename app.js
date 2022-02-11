function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const btnNew = document.getElementById("btnNew2");
// btnNew.addEventListener("click", fetchCreatePlayer);


// async function fetchCreatePlayer() {
//   const newPlayer = { "name": "miguel", "surname": "martinez", "team": "Real madrid", "position": "Delantero" };
//   const response = await fetch(
//     "https://apifullstack.herokuapp.com/players",
//     //"http://192.168.1.115:3000/products_api",
//     {
//       method: "POST",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': "application/json"
//       },
//       body: JSON.stringify(newPlayer)
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);


//     })
//     .catch((error) => console.log(error));
// }

async function fetchPlayers() {
  const response = await fetch(
    "https://apifullstack.herokuapp.com/players_api",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.players);
      const container = document.getElementById('container');
      let players = data;
      //console.log(products);

      for (let player of players) {
        let a = createNode('a');
        a.setAttribute('href', "show.html?id=" + player._id);
        let div = createNode('div');
        let span1 = createNode('span');
        let span2 = createNode('span');
        let span3 = createNode('span');

        span1.innerHTML = `${player.name} ${player.surname}`;
        span2.innerHTML = `${player.team}`;
        span3.innerHTML = `${player.position}`;

        append(a, div);
        append(div, span1);
        append(div, span2);
        append(div, span3);
        append(container, a);

      }

    })
    .catch((error) => console.log(error));
}

fetchPlayers();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
