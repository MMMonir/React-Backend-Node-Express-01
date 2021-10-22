const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) =>{
    res.send('Wow, I am learning node js')
});

// app.get('/users', (req, res) =>{
//     res.send({id:1, name: 'Shabana', email: 'Shabana@gmail.com'})
// });

const users =[
    {id:0, name: 'Shabana', email: 'Shabana@gmail.com'},
    {id:1, name: 'Razzak', email: 'Razzak@gmail.com'},
    {id:2, name: 'Ronzit', email: 'Ronzit@gmail.com'},
    {id:3, name: 'Shabnoor', email: 'Shabnoor@gmail.com'},
];

//Process - 1: All Users
//URL: http://localhost:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

//Process - 2: Dynamic Api
//URL: http://localhost:5000/users/1
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

//Process - 3: Query Parameter
//URL: http://localhost:5000/users?search=shabana
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

app.listen(port, () =>{
    console.log('Listening to port', port);
});
