function changePic() {

  /* write code to change the picture to the one linked at:
  
    - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png
    
  - change the width of the image
  */
  img = document.getElementById("uri_logo")
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png";
  img.style.width = "100px";
}


function changeTags() {

  /* write code to change the color of all paragraphs to one of your choosing
  */
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = "green";
  });
}


function removeParagraph() {
  /* write code to use a confirmation box to confirm that the  user wants to remove the paragraph where this button is located. If the user confirms, then remove this paragraph.
  */
  if (confirm("Are you sure you'd like to remove this paragraph?")) {
    document.querySelector("p").remove();
  }
};