function detect(){
	var userAgent = window.navigator.userAgent,
		platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the pag- No wait, you're an Applefag, so what even is it in your case? <b><i>curl -# -o</i></b>  or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Your call.";
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the page or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Hold up, it's a phonefag, innit? Hope I've bothered turning the blog responsive by now.";
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the pag- No wait, you're on Wangblows, so what even is it in your case? <b><i>curl -# -o</i></b>  or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Your call.";
	} else if (/Android/.test(userAgent)) {
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the page or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Hold up, it's a phonefag, innit? Hope I've bothered turning the blog responsive by now.";
	} else if (/Linux/.test(platform)) {
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the page or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Your call.";
	} else{
		document.getElementById("warning_text").innerHTML = "Clock's tickin' big fella, so what's it gonna be? <b><i>wget -r</i></b> the page or let the domain irreversibly shift to an always-unique randomly generated new one?<br> Your call.";
	}
}
