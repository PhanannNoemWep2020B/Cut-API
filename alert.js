const url ="https://jsonplaceholder.typicode.com/users";
const method = "GET";
const syncs = true;
const api = new XMLHttpRequest();
api.open(method, url, syncs);
api.onload = () =>{
    const data = JSON.parse(api.response);
    const result = document.querySelector('table');
    data.forEach(element => {
            result.innerHTML += `
            <tr> 
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>
                ${element.address.street}
                ${element.address.suite}
                ${element.address.city}
                ${element.address.zipcode}
                ${element.address.geo}
            </td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td>
                ${element.company.name}
                ${element.company.catchPhrase}
                ${element.company.bs}
            </td>

    </tr>
            `;
    });
}
api.send();
















































// method that import for push data
// - GET  : use to get data
// - POST : create data
// - PUT  : update data
// - DELETE : delete data
