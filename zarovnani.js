function onBodyLoad() {
      if (document.getElementById('text').scrollHeight < (window.outerHeight - 130)) {
        document.getElementById('text').style.height = window.outerHeight - 130 + "px";
        document.getElementById('menu').style.height = document.getElementById('text').scrollHeight + "px";
      }
      else {
        document.getElementById('menu').style.height = document.getElementById('text').scrollHeight + "px";
      }
    document.getElementById("text").style.width = (document.body.clientWidth - 265) + "px";
      console.log(window.outerWidth + "\n");
}

window.onresize = onBodyLoad;
