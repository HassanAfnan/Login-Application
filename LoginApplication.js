var database = [
    {
      username: "Ali",
      password: "123"
    },

    {
      username: "Khan",
      password: "1234"
    },

    {
      username: "Nasir",
      password: "karachi"
    }
];

var newsfeed = [
    {
    	username: "Khan",
    	timeline: "I am very happy"
    },
    
    {
    	username: "Nasir",
    	timeline: "Hello javascript"
    },
    
    {
    	username: "Basit",
    	timeline: "I am not feeling good today"
    }
];

function validate(username , password)
{
   for ( var i = 0 ; i < database.length ; i++ ) 
   {
      if(username == database[i].username && password == database[i].password)
      {
        return true;        
      }    
   }
   return false;
}

function signIn(username,password)
{
    var bool = validate(username,password);
    if(bool)
    {
    	alert("Welcome user");
    	console.log(newsfeed);
    }	
    else
    {
    	alert("Invalid username or password");
    }
}

var user = prompt("Enter your username");
var pass = prompt("Enter your password");
signIn(user,pass);