var text = "This text(from data) will show up on the website";
var para = document.createElement("p"); //creates a new paragraph element
var newText = document.createTextNode(text); //creates text along with output to be displayed 
para.appendChild(newText); //created text is appended to the paragraph element created
document.body.appendChild(para); // created paragraph and text along with output is appended to the document body
