This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Security Vulnerabilities on this app:

**XSS attacks on the \<a> tag:**
There is a vulnerability with the href tag, allowing users to manually enter input into this allows for attacks to add payloads prefixed with javascript. As an example the following can be entered into the href input: <br/>
```javascript: alert('XSS Vulnerability')```
<br/>
<br/>
This attack can be tested on the /reviews page in the *contact link* input.
<br/>
<br/>
Note: A PR has been raised regarding this issue: https://github.com/facebook/react/issues/3473
