function countdown()
{
	var	arr1;
	var	arr2;
	var	now;
	var	meet;
	var	time;
	var to_write;

	arr1 = document.querySelectorAll("#chatonno .time");
	arr2 = document.querySelectorAll("#soeur .time");
	now = new Date();
	meet_chatonno = new Date(2019, 7, 29, 20, 41, 00, 00);
	meet_soeur = new Date(2019, 11, 24, 9, 40, 00, 00);
	time = meet_chatonno.getTime() - now.getTime();

	to_write = "<strong>"+Math.floor(time / 86400000)+"</strong>";
	to_write += "<p>Days</p>";
	arr1[0].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 3600000 % 24)+"</strong>";
	to_write += "<p>Hours</p>";
	arr1[1].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 60000 % 60)+"</strong>";
	to_write += "<p>Minutes</p>";
	arr1[2].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 1000 % 60)+"</strong>";
	to_write += "<p>Seconds</p>";
	arr1[3].innerHTML = to_write;
	time = meet_soeur.getTime() - now.getTime();
	to_write = "<strong>"+Math.floor(time / 86400000)+"</strong>";
	to_write += "<p>Days</p>";
	arr2[0].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 3600000 % 24)+"</strong>";
	to_write += "<p>Hours</p>";
	arr2[1].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 60000 % 60)+"</strong>";
	to_write += "<p>Minutes</p>";
	arr2[2].innerHTML = to_write;
	to_write = "<strong>"+Math.floor(time / 1000 % 60)+"</strong>";
	to_write += "<p>Seconds</p>";
	arr2[3].innerHTML = to_write;
	setTimeout(countdown, 1000);
}
countdown();
