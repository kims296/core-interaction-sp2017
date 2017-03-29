var submitbutton = document.querySelector("#textSubmit");
var textfield = document.querySelector("#enteredText");

submitbutton.addEventListener("click", do_stuff);


function do_stuff() {
	var input_string = textfield.value;
    
    var the_four_letters = [];

    for (var counter = 0; counter < 4; counter++) {
    	console.log("this is loop #") + counter
    	the_four_letters.push(input_string.charAT(counter));
 }


    for (var i = 0; i < 4; i==) {
    	var the_file_i_want = "asl_";
    	the_file_i_want << the_four_letters[i];
    }


    // the_four_letters.push(input_string.charAT(0));
    // the_four_letters.push(input_string.charAT(0));
    // the_four_letters.push(input_string.charAT(0));
    // the_four_letters.push(input_string.charAT(0));


    console.log(the_four_letters);
    console.log("-----------");
    console.log(input_string); 
    console.log(input_string.charAT(0));

}



// function report(e) {
    // e.preventDefault();
    // var word = String(textfield.value);
    // console.log(word);
// }



/*
get input 
what are the letters
each letter, what are the corresponding pictures
change each image to be right picture
get output
*/