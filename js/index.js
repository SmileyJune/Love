var bb= document.getElementById("bb"),
	str ="无法可修饰的一对手，带出温暖永远在背后，总是罗嗦始终关注，不懂珍惜太内疚，沉醉于音阶她不赞赏，母亲的爱却永远未退让，决心冲开心中挣扎，亲恩终可报答，春风化雨暖透我的心，一生眷顾无言地送赠，是你多么温馨的目光，教我坚毅望着前路，叮嘱我跌倒不应放弃，没法解释怎可报尽亲恩，爱意宽大是无限，请准我说声----真的爱你!";
var temp;
	console.log(str.length);
	console.log(str.charAt(0));
	temp=str.charAt(0);
	console.log(temp);
var strnum=0;
var timer=setInterval(function(){
	strnum=strnum+1;
	temp = temp+str.charAt(strnum);
	bb.innerHTML=temp;
	if(strnum==str.length){
		clearInterval(timer);
	};
},100);



var main = document.getElementById("main");
var textStr = "B e y o n d 我 爱 你 ！";
var num = textStr.length;
var numTemp = 0;
/*负责写入的函数*/
var write = function(e){
	
//console.log(e);
var x = e.clientX;
var y = e.clientY;


var col1 = Math.floor(Math.random()*106+100);
var col2 = Math.floor(Math.random()*106+100);
var col3 = Math.floor(Math.random()*106+100);
var write = document.createElement("div");
write.className = "bbtext";
write.style.position = "absolute";
write.style.left = x + "px";
write.style.top = y + "px";
write.style.color = "rgb("+col1+","+col2+","+col3+")";
write.style.fontWeight = "900";

col1=col1+50;
col2+=50;
col3+=50;
write.style.textShadow = "0px 0px 20px rgb("+col1+","+col2+","+col3+")";


/*write.style = {
	position:"absolute",
	left:x+"px"
	
};*/
//console.log(write.style);
write.innerHTML = textStr[numTemp];
numTemp ++;
if(numTemp == num){
	numTemp = 0;
}
main.appendChild(write);

setTimeout(function(){
	main.removeChild(write);
},2000)
}

/*main.onmousemove = function(e){
write();//写入文字函数

}*/
main.addEventListener('mousemove',function(e){
write(e);
})
main.addEventListener('touchmove',function(e){
//console.log(e);
write(e.touches[0]);
})

			
