// Import Packages
const express = require('express')
const axios  = require('axios')
const morgan = require('morgan')
const { response } = require('express')
const token = 'a897364197a9891a4d07e3779d062fc3';
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//Using packages
const app = express()

//set port for APP
let port = 8080

//Middleware
app.use(express.json())
app.use(morgan('dev'))


//Defininn Routes
app.get('/',(req, res)=> {
    res.send("<h1> Working in Progress </h1>")
})



//Get 1 Capitan America
app.get('/Capitan',(req, res)=> {
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/characters?name=Captain%20America&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(END_POINT)
        .then(function(response){
           
            res.send(response.data)
        })
})

// Get 2 Iron Man 
app.get('/Iron',(req, res)=> {
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/characters/1009368?&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(END_POINT)
        .then(function(response){
           
            res.send(response.data)
        })
})

// Get 3 Xmen Comic
app.get('/X-Men',(req, res)=> {
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/comics?title=ULTIMATE%20X-MEN&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(END_POINT)
        .then(function(response){
           
            res.send(response.data)
        })
})

// Get 4 Guardians of the Galaxy Comic
app.get('/GOTG',(req, res)=> {
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/comics?title=GUARDIANS%20OF%20THE%20GALAXY&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(END_POINT)
        .then(function(response){
           
            res.send(response.data)
        })
})

// Get 5 Creator
app.get('/Balak',(req, res)=> {
    const END_POINT = ' https://gateway.marvel.com:443/v1/public/creators?firstName=Balak&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(END_POINT)
        .then(function(response){
           
            res.send(response.data)
        })
})


app.post('/characters',(req, res)=>{
    const{ name } = req.body
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/characters?'
    const takh ='&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(`${END_POINT + 'name=' + name + takh}`)
    .then(function(response){
        //const results = response.data.data.results
        const { etag} = response.data
        res.json({etag})
    })
    
    //try, catch..
    .catch(function(error){
        const error_code = error.response.status;
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.post('/series',(req, res)=>{
    const{ title } = req.body
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/series?'
    const takh ='&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(`${END_POINT + 'title=' + title + takh}`)
    .then(function(response){
        //const results = response.data.data.results
        const { etag} = response.data
        res.json({etag})
    })
    
    //try, catch..
    .catch(function(error){
        const error_code = error.response.status;
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.post('/comics',(req, res)=>{
    const{ title } = req.body
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/comics?'
    const takh ='&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(`${END_POINT + 'title=' + title + takh}`)
    .then(function(response){
        //const results = response.data.data.results
        const { etag} = response.data
        res.json({etag})
    })
    
    //try, catch..
    .catch(function(error){
        const error_code = error.response.status;
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.post('/creator',(req, res)=>{
    const{ name } = req.body
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/creators?'
    const takh ='&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(`${END_POINT + 'firstName=' + name + takh}`)
    .then(function(response){
        //const results = response.data.data.results
        const { etag} = response.data
        res.json({etag})
    })
    
    //try, catch..
    .catch(function(error){
        const error_code = error.response.status;
        const { message } = error
        res.status(error_code).json({ message })
    })
})

app.post('/event',(req, res)=>{
    const{ name } = req.body
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/events?'
    const takh ='&ts=1&apikey=a897364197a9891a4d07e3779d062fc3&hash=c555e8cfbb00e886af08cf9c2447129d'

    axios.get(`${END_POINT + 'name=' + name + takh}`)
    .then(function(response){
        //const results = response.data.data.results
        const { etag} = response.data
        res.json({etag})
    })
    
    //try, catch..
    .catch(function(error){
        const error_code = error.response.status;
        const { message } = error
        res.status(error_code).json({ message })
    })
})
//Listen server 
app.listen(port, ()=>{
    console.log("Server runnin on port" + port);
})