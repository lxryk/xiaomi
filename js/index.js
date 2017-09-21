
window.onload=function(){
	let ulis=$('.aside-list')[0];
	let list=$('li',ulis);
	let item=$('.item');
	

	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			item[i].style.display='block';
			// animate(item[i],{opacity:1});
		}
		list[i].onmouseout=function(){
			item[i].style.display='none';
			// animate(item[i],{opacity:0})
		}
	}

	let ban=$('.banner-list')[0];
	let blist=$('li',ban);
	let last=$('.banner-last')[0];
	let blast=$('li',last);
	let ner=$('.banner')[0];
	let left=$('.banner-left')[0];
	let right=$('.banner-right')[0];
	let imgw=parseInt(window.getComputedStyle(ban,null).width);
	console.log(left);

	let flag=true;
	let t;
	let now=0;
	let next=0;
	t=setInterval(move, 2000);
	ner.onmouseover=function(){
		clearInterval(t);
	}
	ner.onmouseout=function(){
		t=setInterval(move, 2000);
	}
	right.onclick=function(){
		if(!flag){
			return;
		}
		move();
		flag=false;
	}
	left.onclick=function(){
		if(!flag){
			return;
		}
		moveL();
		flag=false;
	}

	for(let i=0;i<blast.length;i++){
		blast[i].onclick=function(){
			blist[i].style.left=imgw+'px';
			blast[i].style.background='red';
			blast[now].style.background='#808080';
			animate(blist[now],{left:-imgw});
			animate(blist[i],{left:0});
			now=i;
		}
	}
	function move(){
		next++;
		if(next==blist.length){
			next=0;
		}
		blast[next].style.background='red';
		blast[now].style.background='#808080';
		blist[next].style.left=`${imgw}px`;
		animate(blist[now],{left:-imgw});
		animate(blist[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}

	function moveL(){
		next--;
		if(next==-1){
			next=blist.length-1;
		}
		blast[next].style.background='red';
		blast[now].style.background='#808080';
		blist[next].style.left=`${-imgw}px`;
		animate(blist[now],{left:imgw});
		animate(blist[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
	

}