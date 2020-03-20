// Auth Tokens: https://stackabuse.com/handling-authentication-in-express-js/

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const { getHashedPassword, generateAuthToken } = require('./utilities');
const app = express();

// Admin credientials
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    // This is the SHA256 hash for value of `password`
    password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
  }
]

const authTokens = {};

// Review comments
const reviewComments = [  
  {
    name: 'Andy Zeen',
    comment: 'Does what is described in the product overview',
    contactLink: '',
  },
  {
    name: 'Kevin Lu',
    comment: 'Would be great if they added a feature to check previous builds',
    contactLink: '',
  },
  {
    name: 'Harry Lewis',
    comment: 'This product is great!',
    contactLink: '',
  }
]

// To parse cookies from the HTTP Request
app.use(cookieParser());
// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('ping!');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = getHashedPassword(password);

  const user = users.find(u => u.username === username && hashedPassword === u.password);

  if (!user) {    
    return res.status(400).json({
      status: "Error",
    })
  }

  const authToken = generateAuthToken();
  authTokens[authToken] = user;

  res.cookie('AuthToken', authToken);    

  return res.status(200).json({
    status: "Success",
  });
})

app.get('/session', (req, res) => {
  const { AuthToken } = req.body;

  const token = Object.keys(authTokens).find(tok => tok === AuthToken);

  if (!!token) {
    return res.status(200).json({
      status: "Success",
    });
  } 

  return res.status(400).json({
    status: "Error",
  });
});

app.get('/reviews', (req, res) => {
  return res.status(200).json({
    status: "Success",
    data: reviewComments
  });
});

app.post('/reviews', (req, res) => {
  const { name, comment, contactLink } = req.body;

  if (!!name && !!comment) {
    reviewComments.push({ name, comment, contactLink });

    return res.status(200).json({
      status: "Success"
    });
  }

  return res.status(400).json({
    status: "Error",
  })
});

app.listen(process.env.PORT || 8080);