var wrapper = document.querySelector(".saranwrap");

for (i = 0; i < 23; i++) {
	console.log(i);
	var divtoinsert = document.createElement("div");
	divtoinsert.classList.add("box", "divnumber" + i);


	wrapper.appendChild(divtoinsert);
}

var allthedivs = document.querySelector("box");

allthedivs.forEach(addlisteners);

function addlisteners(thething, itsindex) {

	console.log(thething);

	thething.addEventListeners("click", toggle_state);

}

function toggle_state(theevent) {
	if (this.classList.contains("active")); 
	   this.classList.remove("active");
	}

   else this.classList.add("active");


  }

  function addhover(e) {
  	this.classList.add("hovered");

  }

  function removehover(e) {
  	this.classList.remove("hovered");

  }

