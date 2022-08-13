
fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        var table = document.createElement("table");
        var col = [];

        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }

            }
        }

        for (var i = 0; i < data.length; i++) {

            if (i === 0) {
                var tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = data[0][col[j]];
                    tr.appendChild(th);
                }
            }



            else {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tableCell = tr.insertCell(-1);
                    tableCell.innerHTML = data[i][col[j]];
                }
            }
        }

       
        var Container = document.getElementById("container");
        Container.innerHTML = "";
        Container.appendChild(table);

    }
    
    )
    .catch(err => {
        alert("Json File Not Found")
    })



