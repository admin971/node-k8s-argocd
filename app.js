const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => 
  res.send('Hello from Node.js on K8s via ArgoCD final cheackwith karthick automatic')
);

app.listen(port, () => console.log(`App running on port ${port}`));

