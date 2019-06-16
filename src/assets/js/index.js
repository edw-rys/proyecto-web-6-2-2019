var toggle=(_selector, _class)=>{
	document.querySelector(_selector).classList.toggle(_class);
}

window.onscroll = function() {myFunction()};
const nav=document.querySelector('.navigation')
const btnScollUp=document.querySelector('.btn-up');
function myFunction() {
	if(window.scrollY>500){
		nav.style.background="var(--color-first)";
		nav.style.position="fixed";
		btnScollUp.style.visibility="visible";
	}else{
		nav.style.background="transparent";
		nav.style.position="initial";
		btnScollUp.style.visibility="hidden";
	}
}