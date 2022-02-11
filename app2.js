const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", fetchCreatePlayer);


async function fetchCreatePlayer() {
  //const newProduct = {name: "miguelinnnnnnn",price: 25.5, category:"vegetable"};
  const nameField = document.getElementById("txtName").value;
  const surnameField = document.getElementById("txtSurname").value;
  const teamField = document.getElementById("txtTeam").value;
  const positionField = document.getElementById("txtPosition").value;
  console.log(nameField + " " + surnameField + " " + teamField + " " + positionField);

  const newPlayer = { name: nameField, surname: surnameField, team: teamField, position: positionField };

  const response = await fetch(
    "https://apifullstack.herokuapp.com/players",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlayer)
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const span = document.getElementById('playerSpan');
      let player = data.player;
      span.innerHTML = `${player._id} ${player.name} ${player.surname} ${player.team} ${player.position}`;

    })
    .catch((error) => console.log(error));
}


function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}
function selects() {
  const positions = ["GK", "DF", "MF", "FW"];
  const team = [
    "REAL MADRID",
    "FC BARCELONA",
    "PSG",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
  ];
  let select = document.getElementById("txtPosition");
  for (let position of positions) {
    let op = createNode('option');
    op.innerHTML = position;
    append(select, op);
  }
  let select2 = document.getElementById("txtTeam");
  for (let teamm of team) {
    let op = createNode('option');
    op.innerHTML = teamm;
    append(select2, op);
  }
}
selects();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}