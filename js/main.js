// Accordian
var acc = document.getElementsByClassName("accordion-btn");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-btn");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Colorway Preview Selection
var previews = document.getElementsByClassName("product_previews_img");

for (var i = 0; i < previews.length; i++) {
  previews[i].addEventListener("click", function() {
    if(!hasClass(this, "highlight")){
      this.classList.add("highlight")
      var imgId = this.dataset.previewId;
      selectNewImage(imgId);
    }
  });
}

function selectNewImage(imgId) {
  //deselect current highlight and highlight the right preview
  for (var i = 0; i < previews.length; i++) {
    if(hasClass(previews[i], "highlight")) {
      previews[i].className = previews[i].className.replace(/\bhighlight\b/g, "");
    }
  }

  var largeImages = document.getElementsByClassName("product_image-large");
  for (var i = 0; i < largeImages.length; i++) {
    // hide current large image 
    if (!hasClass(largeImages[i], "hidden")) {
      largeImages[i].classList.add("hidden")
    }
    //display correct large image
    if (largeImages[i].dataset.imageId === imgId) {
      largeImages[i].className = largeImages[i].className.replace(/\bhidden\b/g, "");
    }
  }
  console.log(imgId);
}

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

