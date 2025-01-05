const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/',(req, res)=>{
  res.send(
    `<h1>"Welcome to CRUD operations page!!!!!</h1>
     <h3>change the above path to /api/user"<h3/>
     <p>Open post man tool and perform CRUD operations</p>`
  ) 
})
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
