function onBodyLoad() {
      if (document.getElementById('text').scrollHeight < (window.innerHeight - 130)) {
        document.getElementById('text').style.height = window.innerHeight - 130 + "px";
        document.getElementById('menu').style.height = document.getElementById('text').scrollHeight + "px";
      }
      else {
        document.getElementById('menu').style.height = document.getElementById('text').scrollHeight + "px";
      }
      document.getElementById("text").style.width = (window.innerWidth - 280) + "px";
}

window.onresize = onBodyLoad;
