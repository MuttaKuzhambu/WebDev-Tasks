var reset=0;
var myTimer=0;

var message=function(){
	document.body.innerHtml="<br><br><br><center><h1> Welcome to the new Page !</h1><center><br><br><br>";
}

var timer=function(){
	//Main timer function

	//checks for special cases in the timer.

	if(document.getElementById('seconds').innerHtml==='0'){
		if(Number(document.getElementById('minutes').innerHtml)>0){
			//decrement the minutes by 1 and set second to 59
			document.getElementById('minutes').innerHtml-=1;
			document.getElementById('seconds').innerHtml='59';
			return;
		}

		if(Number(document.getElementById('minutes').innerHtml)===0 && Number(document.getElementById('hours').innerHtml)>0){
			document.getElementById('seconds').innerHtml="59";
			document.getElementById('minutes').innerHtml="59";
			document.getElementById('hours').innerHtml-=1;
			return;
		}

		if(Number(document.getElementById('hours').innerHtml)===0 && Number(document.getElementById('days').innerHtml)>0){
			document.getElementById('hours').innerHtml="23";
			document.getElementById('minutes').innerHtml="59";
			document.getElementById('seconds').innerHtml="59";
			document.getElementById('days').innerHtml-=1;
					return;

		}


	//If it reaches here then,the time is over
	console.log("Timer Out!!")
	document.getElementById('whole_container').style.visibility='hidden';
	document.body.style.backgroundImage="url('images.png')";
	clearInterval(myTimer);
	setTimeout(message,2000);
	}
	else{
		document.getElementById('seconds').innerHtml-=1;
	}

};

var setNow=function(){
	stopTimer();
	setToZero();
	var now=new Date();
	var dd=now.getDate();
	var mm=now.getMonth()+1;//months starts from zero
	var yyyy=now.getFullYear();
	var hh=now.getHours();
	var min=now.getMinutes();
	var ss=now.getSeconds();

	if(dd<10){
		dd="0"+dd;
	}
	if(mm<10){
		mm="0"+mm;
	}
	if(hh<10){
		hh="0"+hh;
	}
	if(min<10){
		min="0"+min;
	}
	if(ss<10){
		ss="0"+ss;
	}

	reset=1; //set reset flag to 1 , as reset button has been clicked

	document.getElementById("date").value=yyyy+'-'+mm+'-'+dd;
	document.getElementById("time").value=(hh+1)+':'+(min)+':'+ss;
	document.getElementById("input_field").style.visibility="visible";
}
var setToZero=function(){
	document.getElementById('days').innerHtml="0";
	document.getElementById('hours').innerHtml="0";
	document.getElementById('minutes').innerHtml="0";
	document.getElementById('seconds').innerHtml="0";
}
var stopTimer=function(){
	clearInterval(myTimer);
	myTimer=0;
}

var startTimer=function(){
	alert("Hey there");
	if(reset===1){
		if(getTimeLeft()===-1){
			setToZero();
			return ;
		}
		reset=0;
	}
	if(!myTimer) myTimer=setInterval(timer,1000);
	document.getElementById('input_field').style.visibility="hidden";
}

var getTimeLeft=function(){
	var eventDate=document.getElementById("date").value;
	var eventTime=document.getElementById("time").value;
	eventDate=eventDate.split("-");
	eventTime=eventTime.split(":");
	if(verifyInput(eventDate,eventTime)===-1){
		alert("Please enter date and time properly")
		setNow();
		setToZero();
		return -1;
	}
	var EventOn=new Date(eventDate[0],parseInt(eventDate[1])-1,eventDate[2],eventTime[0],eventTime[1],eventTime[2]);

	if(!EventOn){
		console.log("set proper value of event date");
		return ;
	}

	console.log(EventOn.toString())

	var t=EventOnTime()-Date.now();
	if(t<=0){
		alert("The event date and time should be in the future.")
		return -1;
	}

	//caculate the required time remaining for the event
	var seconds=Math.floor((t/1000)%60);
	var minutes=Math.floor((t/(1000*60))%60);
	var hours=Math.floor((t/(1000*60*60))%24);
	var days=Math.floor(t/(1000*60*60*24));

	document.getElementById('days').innerHtml=String(days);
	document.getElementById('hours').innerHtml=String(hours);
	document.getElementById('minutes').innerHtml=String(minutes);
	document.getElementById('seconds').innerHtml=String(seconds);
//return control to startTImer
}

var verifyInput=function(date,time){
	yyyy=date[0];
	mm=date[1];
	dd=date[2];
	hh=time[0];
	min=time[1];
	ss=time[2];
	console.log("called verifyInput");

	if(isNaN(yyyy) || isNaN(mm) || isNaN(dd) || isNaN(hh) || isNaN(min) || isNaN(ss))
		return -1;
	console.log("passed 1");

	if(Number(mm)<1 || Number(mm)>12 || Number(dd)<1 )
	return -1;

	if(Number(mm)===2){//checking for the leap year
		console.log("feb");
		if(Number(dd)>29){
			console.log(String(Number(dd))+"feb more days");
			return -1;
		}

		else if(Number(dd)==29){
			if(Number(yyyy)%4===0 && Number(yyyy)%100!=0){
				console.log("condition 1");
				return 0;
			}
			else if(Number(yyyy)%400===0){
				console.log("condition 2");
				return 0;
			}
			else
				return -1;
		}
		return 0;
	}

	if(mm in ['1','3','5','7','8','10','12']){
		if(!(dd<='30'))
			return -1;
	}
	else if(mm in ['4','6','9','10']){
		if(dd>'30')
			return -1;
	}

	else if(Number(hh)>23 || Number(mm)<0 || Number(hh)<0 || Number(min)>59 || Number(ss)<0 || Number(ss)>59)
			return -1;

return 0;
}




//Adding the Event Listeners for the buttons
document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("stop").addEventListener("click",startTimer);
document.getElementById("reset").addEventListener("click",setNow);

setNow();