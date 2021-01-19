if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0, maximum-scale=1.0, minimum-scale=0.25, user-scalable=yes");
  } else {
    void(0)
}
