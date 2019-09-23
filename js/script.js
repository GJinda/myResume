// function $(selector) {
//   return document.querySelector(selector);
// }

// function $$(selector) {
//   return document.querySelectorAll(selector);
// }

// function addClass(ele, className) {
//   ele.classList.add(className);
// }

// function removeClass(ele, className) {
//   ele.classList.remove(className);
// }

// function hasClass(ele, className) {
//   return ele.classList.contains(className);
// }

var imgWrappers = document.querySelectorAll(".imageWrapper");
var viewWrapper = $(".viewWrapper");
var visitLink = $("a.viewLink");
var viewImg = $("img.view");
var works = $(".works");

function changeSrc(index) {
  const link = "https://gjinda.github.io/";
  const imgUrl = "img/view" + index + ".gif";
  viewImg.attr("src", imgUrl);
  switch (index) {
    case 1:
      visitLink.attr("href", "");
      break;
    case 2:
      visitLink.attr("href", link + "mi/index.html");
      break;
    case 3:
      visitLink.attr("href", link + "myResume/index.html");
      break;
    case 4:
      visitLink.attr("href", link + "music-player/index.html");
      break;
    default:
      break;
  }
}

for (var i = 0; i < imgWrappers.length; i++) {
  (function (i) {
    imgWrappers[i].onclick = function () {
      const url = viewImg.attr("src");
      if (viewWrapper.hasClass("hidden")) {
        //change view
        changeSrc(i + 1);
        viewWrapper.removeClass("hidden");
      } else if (url.charAt(url.indexOf(".gif") - 1) == (i + 1)) {
        //hide
        viewWrapper.addClass("hidden");
      } else {
        //just change
        changeSrc(i + 1);
      }
    }
  })(i);
}

// for(var i=0;i<5;i++){
//   setTimeout(function(){
//   console.log(i);
//   },1000);
//   console.log(i);
// }