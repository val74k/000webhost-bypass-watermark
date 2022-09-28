for (var i = 0; document.getElementsByTagName("div").length; ++i) {
  if (document.getElementsByTagName("div")[i].style.zIndex == "9999999") {
    document.getElementsByTagName("div")[i].remove()
  } }
