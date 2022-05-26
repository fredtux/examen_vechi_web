const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// const jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/.'));

app.post('/p4', (req, res) => {
    let persoane = [{ nume: "Ion", sex: "m", varsta: 3 }, { nume: "Oana", sex: "f", varsta: 23 }, { nume: "Daria", sex: "f", varsta: 10 }, { nume: "Mihai", sex: "m", varsta: 19 }, { nume: "Gabriel", sex: "m", varsta: 22 }, { nume: "Simona", sex: "f", varsta: 11 }, { nume: "Bogdan", sex: "m", varsta: 28 }];
    let p = persoane.filter((item) => {
        return item.nume == req.body.name;
    })

    if (!p || p.length == 0) {
        res.send(JSON.stringify({ eroare: "Nu exista numele cautat" }));
    } else {
        res.send(JSON.stringify(p[0]));
    }
});

app.listen(3000, () => console.log('Running'));