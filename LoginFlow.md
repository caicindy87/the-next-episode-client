### Ideal Flow for Sign in

-User presented with a login form

-Sends the email + password to Rails (fetch)

-Rails sends back "token" - contains identifying info

-React includes the token with future requests to prove that it's still the user

-Rails checks the token and authorizes based on that info
