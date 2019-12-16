const tbody = document.querySelector(".tbodyclass");

const API_SRC = `http://localhost:8080/log`;
fetch(API_SRC).then(function (response) {
    return response.json();
}).then(function (data) {
    for (var i = 0; i < data.length; i++) {

        const tr = document.createElement("tr");
        const tdnum = document.createElement("td");
        const tdlog = document.createElement("td");
        const tdimg = document.createElement("td");
    
        tdnum.innerText = data[i]["botnumber"];
        tdlog.innerText = data[i]["time"];
        tdimg.innerHTML = "<img src = "+data[i]["imagepath"]+">";
        tr.appendChild(tdnum);
        tr.appendChild(tdlog);
        tr.appendChild(tdimg);
        tbody.appendChild(tr);

    }
})