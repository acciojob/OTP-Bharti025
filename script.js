//your JS code here. If required.
let digit=document.querySelectorAll(".code");
digit.forEach((input,index)=>{
	input.addEventListener('input',(e)=>{
		const value=e.target.value;
	if(index<digit.length-1){
		digit[index+1].focus();
	};
});
})

digit.forEach((input,index)=>{
	input.addEventListener('keydown',(e)=>{
	if(e.key=="Backspace" && index>0){
		e.target.value="";
		digit[index-1].focus();
	};
});
})