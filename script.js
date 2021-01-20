if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	document.documentElement.style.setProperty('height', '100vh');
	var syn=document.getElementById('name1')
	syn.style.fontSize = "30px";
	var syn0=document.getElementById('button')
	syn0.style.left="51%";
	syn0.style.top="65%";
	var syn1=document.getElementById('contact')
	syn1.style.left="23%";
	syn1.style.top="48%";
	
  } else {
    void(0)
}
