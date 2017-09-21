//没有范围  整个文档
function getClass(classname,ranger){
	ranger=ranger?ranger:document;
	if(false){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=ranger.getElementsByTagName('*');
		for(let i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}

}
/*  checkClass(className,classname)
 className  里面是否包含   classname
*/

function checkClass(className,classname){
	var arr=className.split(' ');
	for(let i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}


function $(select,ranger){
	var first=select.charAt(0);
	if(first == '.'){
		return getClass(select.substring(1));
	}else if(first =='#'){
		return  ranger.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return ranger.getElementsByTagName(select);
	}
}					