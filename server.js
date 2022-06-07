const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const questions = {
    '1' :{
        'question' : 'Tell us about yourself.'
    },
    '2': {
        'question' : 'This is question 2'
    },
    '3' : {
        'question' : 'This is question 3'
    }
}

app.use(cors())

//this responds to the get request and sends index.html
app.get('/', (request, response) => (
    response.sendFile(__dirname + '/index.html')
))

app.get('/api/:number', (request, response)=>{
    const questionNumber = request.params.number
    if(questions[questionNumber]) {
        response.json(questions[questionNumber])
    } else {
        response.json(questions['1'])
    }
})

app.listen(process.env.PORT || PORT, ()=>(
    console.log('listening on 8000')
))