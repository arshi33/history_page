/* Created in CSE HTML Validator */

var tabs = document.querySelectorAll(".tabs_wrap ul li");
var today = document.querySelectorAll(".today");
var week = document.querySelectorAll(".week");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "today"){
			today.forEach((today)=>{
				today.style.display = "block";
			})
		}
		else if(tabval == "week"){
			week.forEach((week)=>{
				week.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})