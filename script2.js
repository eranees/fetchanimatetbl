let table = document.getElementById('tblData')
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    for (res of result) {
      let disStr = `
      <tr>
        <td onclick='showData(this)' id="name${res.id}">${res.name}</td>
        <td onclick='showData(this)' id="email${res.id}">${res.email}</td> 
        <td onclick='showData(this)' id="city${res.id}">${res.address.city}</td>
      </tr>
      `
      table.innerHTML += disStr
    }
  }).catch((error) => console.log(error))

function showData(This) {
  console.log(This.id)
  document.getElementById(This.id).style.animation = "mymove 5s";
}