for (i=1; i<=5; i++) {
	var num=65;
	for (j=1; j<=i; j++) {
		document.write(String.fromCharCode(num));
		num++;
	}
	document.write("<br>");
}