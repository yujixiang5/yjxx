(function(doc,win){
			var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function(){//resize重置窗口事件
				var clientWidth = docEl.clientWidth;
				if(!clientWidth) return;
				if(clientWidth>=640){//浏览器窗口大于640的时候让根元素100=1rm 
					docEl.style.fontSize = '100px'; //1rem  = 100px
					// document.documentElement.style.fontSize = "100px" 相当于根节点的字体大小
				}
				else{
					//屏幕小于640的时候等比例缩放
					docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
					//想让浏览器的内容随着浏览器变化 把  if() else() 删除 只保留else里面的内容
					
				}
			};
			if (!doc.addEventListener) return;
	        win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);
  // 6.4rem 
// 100* 页面比例
// 匿名函数的调用： 
// ()()
// 1. 函数的调用：a) 
 //获取屏幕的宽度