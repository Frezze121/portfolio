function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".topmenu");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var checkbox = document.getElementById("active");
      checkbox.checked = false;
    });
  });
});


function randomcolor(){
  document.getElementById("skill-html").style.background="linear-gradient(45deg, #73c8fbd4, #a805abb8)"
  document.getElementById("skill-js").style.background="linear-gradient(45deg, #73ffb9e6, #105304d4)"
  document.getElementById("skill-css").style.background="linear-gradient(45deg, #4d1313c4, #e31360e0)"
  document.getElementById("skill-python").style.background="linear-gradient(45deg, #dde145e0, #d19713ed)"
  document.getElementById("skill-wordpress").style.background="linear-gradient(45deg, #001637b3, #0095ff99)"
  document.getElementById("skill-mc").style.background="linear-gradient(45deg, #80db30, #a9960f)"
  document.getElementById("skill-mysql").style.background="linear-gradient(45deg, #fe5affed, #65053a)"
  document.getElementById("skill-adobe").style.background="linear-gradient(45deg, #259b18d9, #60b19ed6)"
}

function original_colors() {

}