
// Initialize Server 
const express = require('express');
const app = express();

// Listen to port no 3000
app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})

// first get request 
app.get('/', (req, res) =>{
    res.send("Hello this is first get req");
});

// HTTP get request on a Creted Routes

app.get('/ankit', (req, res)=>{
    res.send("My name is Ankit");
})


// HTTP Post Request 
// post req's output directly can't see on browser
// use postman
// their we have to parse the req.body data into json format
// that's why body-parser is used 

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // convert data into json data and added into req.body

app.post('/ankit/cars', (req, res) => {
    const {name, brand} = req.body;

    console.log(name);
    console.log(brand);

    res.send("Successfully complete POST request");

})