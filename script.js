function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function addClass(ele, className) {
  ele.classList.add(className);
}

function removeClass(ele, className) {
  ele.classList.remove(className);
}

function hasClass(ele, className) {
  return ele.classList.contains(className);
}

var imgWrappers = $$(".imageWrapper");
var viewWrapper = $(".viewWrapper");
var visitLink = $("a.viewLink");
var viewImg = $("img.view");
var works = $(".works");

function changeSrc(index) {
  const url = "https://gjinda.github.io/";
  viewImg.src = "img/view" + index + ".gif";
  switch (index) {
    case 2:
      visitLink.href = url + "mi/index.html";
      break;
    case 3:
      visitLink.href = url + "myResume/index.html";
      break;
    case 4:
      visitLink.href = url + "music-player/index.html";
      break;
    default:
      break;
  }
}

for (var i = 0; i < imgWrappers.length; i++) {
  (function (i) {
    imgWrappers[i].onclick = function () {
      const url = viewImg.src;
      if (hasClass(viewWrapper, "hidden")) {
        //change view
        changeSrc(i + 1);
        removeClass(viewWrapper, "hidden");
      } else if (url.charAt(url.indexOf(".gif") - 1) == (i + 1)) {
        //hide
        addClass(viewWrapper, "hidden");
      } else {
        //just change
        changeSrc(i + 1);
      }
    }
  })(i);
}