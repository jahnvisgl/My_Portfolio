// set interval functional

// var scrollInterval = setInterval(function(){
// 	window.scrollBy(0,50) ;
// }, 80);



// var targetpos = 1145 ;
// var cuttrntpos = 0;

// var scrollInterval = setInterval(function(){
// 	if(cuttrntpos >= targetpos){
// 		clearInterval(scrollInterval) ;
// 		return ;
// 	}
// 	currentpos += 50 ;
// 	window.scrollBy(0,500) ;
// },50 ) ;

// ---------------

// function scrstart() {
//     window.scrollBy(0,50) ;
// };

// var scrolInter = setInterval(scrstart,90) ;

// function scrstop() {
//     clearInterval(scrolInter) ;
// };

// scrstop() ;

// clearInterval(scrolInter) ;
// --------------



// var edusection = document.getElementById('edu') ;

// var coodinate = edusection.getBoundingClientRect() ;

// edusection.addEventListener('click',function(){
// 	var targetpos = 3332.449951171875 ;
// var currpos = 0 ;

// var scrinter = setInterval(function(){
// 	if(currpos>=targetpos) {
// 		clearInterval(scrinter) ;
// 	}

// 	currpos += 50 ;
// 	window.scrollBy(0,50) ;
// },85);

// });

// ----------------


// var navmenu = document.querySelectorAll('.nav-menu a') ;

// for (var i=0 ;i<navmenu.length ;i++) {
// 	navmenu[i].addEventListener('click',function(){
// 		event.preventDefault() ;

// 		// to fetch section name from
// 		var targetsectionid = this.textContent.toLowerCase();
// 		var tagetsection = document.getElementById(targetsectionid) ;
// 	});
// };

// -------------------


// var navmenu = document.querySelectorAll('.nav-menu a') ;

// for (var i=0 ;i<navmenu.length ;i++) {
// 	navmenu[i].addEventListener('click',function(event){
// 		event.preventDefault() ;

// 		// to fetch section name from
// 		var targetsectionid = this.textContent.trim().toLowerCase();
// 		var tagetsection = document.getElementById(targetsectionid) ;
// 		console.log(tagetsection) ;

		

// 		var interval = setInterval(function(){
// 			var  targetsectioncord = tagetsection.getBoundingClientRect() ;
// 		    console.log(targetsectioncord) ;
// 			if(targetsectioncord.top <= 0) {
// 				clearInterval(interval) ;
// 				return ;
// 			}
// 			window.scrollBy(0,50) ;
// 		},25);
// 	});
// };


// ---------scroll function-----------


(function(){
var navmenu = document.querySelectorAll('.nav-menu a') ;
var interval;

for (var i=0 ;i<navmenu.length ;i++) {
	navmenu[i].addEventListener('click',function(event){
		event.preventDefault() ;

		// to dhundne ke lea section name from
		var targetsectionid = this.textContent.trim().toLowerCase();
		var tagetsection = document.getElementById(targetsectionid) ;
		console.log(tagetsection) ;

// 		interval = setInterval(scrollvar(),25,tagetsection);
        
        interval = setInterval(function(){
        	scrollvar(tagetsection) ;
        },25) ;
	});
};

function scrollvar(tagetsection){
	var  targetsectioncord = tagetsection.getBoundingClientRect() ;
	console.log(targetsectioncord) ;
		if(targetsectioncord.top <= 0) {
			clearInterval(interval) ;
			return ;
		}
	window.scrollBy(0,50) ;
};


// --------skilss container --------

var progbar = document.querySelectorAll('.skill-prog > div');
var skillcont = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationdone = false;

function setbarzero(){
	for(let bar of progbar) {
		bar.style.width = 0 + '%' ;
	};
};

setbarzero();

function fillBars(){
	for(let bar of progbar){
		let targetwidth = bar.getAttribute('data-bar-width');
		let currwidth = -1;
		let fillintervat = setInterval(function(){
			if(currwidth > targetwidth){
				clearInterval(fillintervat);
				return ;
			};
				currwidth++;
				bar.style.width = currwidth + '%' ;
		},8);
	};
};

function checkScroll(){
	var cord = skillcont.getBoundingClientRect() ;
	if(!animationdone && cord.top < window.innerHeight){
		animationdone = true ;
		console.log('skills-section visible');
		fillBars();
	}else if(cord.top > window.innerHeight){
		animationdone = false;
		setbarzero();
	};
};

// -----------TIMER --------

// ---------countdown

// const countdownt = document.getElementById('countdown');

// var destination = new Date("jan 5, 2022 15:37:25").getTime();

// var kk = setInterval(function(){

//     var now = new Date().getTime();
    
//     var diff = destination-now;

//     var days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     // console.log(days);
//     var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     // console.log(hours);
//     var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     // console.log(min);
//     var seconds = Math.floor((diff % (1000 * 60)) / 1000);
//     // console.log(seconds);

// //     to display
//     document.getElementById("countdown").innerHTML = days+"d"+hours+"h"+min+"m"+seconds+"s";

//     if(diff<0){
//         document.getElementById(countdown).innerHTML = "EXPIRED" ;
//     }

// },1000);



// --------TIMER COUNT-UP--------

// ------TIMER COUNT UP 1 ---------

const timercounter1 = document.querySelectorAll('.timer-counter-js-1');
const timerspeed1 = 200;

timercounter1.forEach(timercounter1 =>{
	const updatetimercount1 = () => {
		const targettimer1 = +timercounter1.getAttribute('data-target');

		console.log(typeof targettimer1);

		const counttimertext1 = +timercounter1.innerText;

		const inctimmer1 = Math.ceil(targettimer1/timerspeed1);

		console.log(inctimmer1);

		if(counttimertext1<targettimer1){
			timercounter1.innerText = counttimertext1 + inctimmer1;
			setTimeout(updatetimercount1,4000);
		}else{
			counttimertext1.innerText = targettimer1;
		}
	}

	updatetimercount1();
});

// -----------TIMER COUNT UP 2 --------------------

const timercounter2 = document.querySelectorAll('.timer-counter-js-2');
const timerspeed2 = 200;

timercounter2.forEach(timercounter2 =>{
	const updatetimercount2 = () => {
		const targettimer2 = +timercounter2.getAttribute('data-target');

		console.log(typeof targettimer2);

		const counttimertext2 = +timercounter2.innerText;

		const inctimmer2 = Math.ceil(targettimer2/timerspeed2);

		console.log(inctimmer2);

		if(counttimertext2<targettimer2){
			timercounter2.innerText = counttimertext2 + inctimmer2;
			setTimeout(updatetimercount2,3000);
		}else{
			counttimertext2.innerText = targettimer2;
		}
	}

	updatetimercount2();
});

// -----------TIMER COUNT UP 3 ------------

const timercounter3 = document.querySelectorAll('.timer-counter-js-3');
const timerspeed3 = 200;

timercounter3.forEach(timercounter3 =>{
	const updatetimercount3 = () => {
		const targettimer3 = +timercounter3.getAttribute('data-target');

		console.log(typeof targettimer3);

		const counttimertext3 = +timercounter3.innerText;

		const inctimmer3 = Math.ceil(targettimer3/timerspeed3);

		console.log(inctimmer3);

		if(counttimertext3<targettimer3){
			timercounter3.innerText = counttimertext3 + inctimmer3;
			setTimeout(updatetimercount3,1500);
		}else{
			counttimertext3.innerText = targettimer3;
		}
	}

	updatetimercount3();
});

// ----------TIMER COUNT UP 4 ----------

const timercounter4 = document.querySelectorAll('.timer-counter-js-4');
const timerspeed4 = 200;

timercounter4.forEach(timercounter4 =>{
	const updatetimercount4 = () => {
		const targettimer4 = +timercounter4.getAttribute('data-target');

		console.log(typeof targettimer4);

		const counttimertext4 = +timercounter4.innerText;

		const inctimmer4 = Math.ceil(targettimer4/timerspeed3);

		console.log(inctimmer4);

		if(counttimertext4<targettimer4){
			timercounter4.innerText = counttimertext4 + inctimmer4;
			setTimeout(updatetimercount4,1000);
		}else{
			counttimertext4.innerText = targettimer4;
		}
	}

	updatetimercount4();
});


























}) ();