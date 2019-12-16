const tbody = document.querySelector(".tbodyclass");



function printToDoList(){
    const tr = document.createElement("tr");
    const tdlog = document.createElement("td");
    const tdimg = document.createElement("td");

    tdlog.innerText = '19111111';
    tdimg.innerText = `<img src="../image/cat1.PNG">`;
    tr.appendChild(tdlog);
    tr.appendChild(tdimg);
    tbody.appendChild(tr);
}


printToDoList();