// const select = document.querySelector(".lesson__options");
// const options = document.querySelectorAll(".lesson__options option");
    
//     // 1
//     select.addEventListener("change", function() {
// 	const url = this.options[this.selectedIndex].value;
// 	console.log(url)
//         if(url) {
// 			console.log(url)
//             location.href = "/"+url;
//         }
// 	});
	
// 	console.log(options)
    
//     // 2
//     for(const option of options) {
// 	const url = option.dataset.url;
// 	console.log(url)
//     if(location.href.includes(url)) {
//         option.setAttribute("selected", "");
//         break;
//     }
// 	}

// 	//let current = window.location.href;
// 	//var newURL = current.replace (/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1');
// 	//alert(newURL+"e")

	
// 	select.forEach{
		
// 	}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */



let btn = document.querySelector('.dropdown__btn');

btn.addEventListener('click',myFunction)

function myFunction() {
	document.getElementById("dropdownList").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropdown__btn')) {
	  var dropdowns = document.getElementsByClassName("dropdown__list");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }


  let links = document.querySelectorAll(".dropdown__list ul > li a");
  console.log(links);
	links.forEach(element => {
		console.log(element.href)
	});