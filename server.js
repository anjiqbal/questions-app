const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const questions = {
    '1' :{
        'question' : 'Tell us about yourself.'
    },
    '1': {
        'question' : ' Give me an example of the project or initiative that you started on your own. It can be a non-business one. What prompted you to get started?'
    },
    '2' : {
        'question' : 'Tell me about a time you had to work on several projects at once. How did you handle this?'
    },
    '3' : {
        'question' : 'Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?'
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