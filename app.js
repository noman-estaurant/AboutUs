let display = true
	$(document).ready(function(){
		$("#content .back").toggle()
		$("#content .quote").toggle()
		$("#content .name").toggle()
		$(".frame").click(function(){
			tempsave=this     //Save current "this" as "tempsave" to make back (function) work
			$("#content p").toggle("slow")
			$("#content .title").toggle("slow")
			$("#content .back").toggle("slow")
			$("#content .article").toggle("slow")
			$("#content .subtitle").toggle("slow")
			$("#content .quote").toggle("slow")
			$(".frame").not(this).toggle("slow")
			if($(this).is("#CHUEH")){
				app.CHUEH.is=!app.CHUEH.is;
				display?$("#CHUEH").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH").attr("src","https://i.imgur.com/Fq8AHjI.png");
				$("#CHUEH").toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(this).is("#KE")){
				app.KE.is=!app.KE.is;
				display?$("#KE").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE").attr("src","https://i.imgur.com/eCyrqtM.png")
				$("#KE").toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(this).is("#SU")){
				app.SU.is=!app.SU.is;
				display?$("#SU").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU").attr("src","https://i.imgur.com/f2svmBF.png")
				$("#SU").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#LIAO")){
				app.LIAO.is=!app.LIAO.is;
				display?$("#LIAO").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO").attr("src","https://i.imgur.com/mwhHx7L.png")
				$("#LIAO").toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#WU")){
				app.WU.is=!app.WU.is;
				display?$("#WU").attr("src","https://via.placeholder.com/450x450"):$("#WU").attr("src","https://via.placeholder.com/228x215")
				$("#WU").toggleClass( "showingBottom", 1000);
				display = !display
			}
			if($(this).is("#CHEN")){
				app.CHEN.is=!app.CHEN.is;
				display?$("#CHEN").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN").attr("src","https://i.imgur.com/9s5Mq5w.png")
				$("#CHEN").toggleClass( "showingBottom", 1000);
				display = !display
			}
		})
	})

	function test(){
		$("#content p").toggle("slow")
		$("#content .title").toggle("slow")
		$("#content .article").toggle("slow")
		$("#content .subtitle").toggle("slow")
		$("#content .back").toggle("slow")
		$("#content .quote").toggle("slow")
		$(".frame").not(tempsave).toggle("slow")
		if($(tempsave).is("#CHUEH")){
			app.CHUEH.is=!app.CHUEH.is;
			display?$("#CHUEH").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH").attr("src","https://i.imgur.com/Fq8AHjI.png");
			$("#CHUEH").toggleClass( "showingTop", 1000);
			display = !display
		}
		if($(tempsave).is("#KE")){
			app.KE.is=!app.KE.is;
			display?$("#KE").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE").attr("src","https://i.imgur.com/eCyrqtM.png")
			$("#KE").toggleClass( "showingTop", 1000);
			display = !display
		}
		if($(tempsave).is("#SU")){
			app.SU.is=!app.SU.is;
			display?$("#SU").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU").attr("src","https://i.imgur.com/f2svmBF.png")
			$("#SU").toggleClass( "showing", 1000);
			display = !display
		}
		if($(tempsave).is("#LIAO")){
			app.LIAO.is=!app.LIAO.is;
			display?$("#LIAO").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO").attr("src","https://i.imgur.com/mwhHx7L.png")
			$("#LIAO").toggleClass( "showing", 1000);
			display = !display
		}
		if($(tempsave).is("#WU")){
			app.WU.is=!app.WU.is;
			display?$("#WU").attr("src","https://via.placeholder.com/450x450"):$("#WU").attr("src","https://via.placeholder.com/228x215")
			$("#WU").toggleClass( "showingBottom", 1000);
			display = !display
		}
		if($(tempsave).is("#CHEN")){
			app.CHEN.is=!app.CHEN.is;
			display?$("#CHEN").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN").attr("src","https://i.imgur.com/9s5Mq5w.png")
			$("#CHEN").toggleClass( "showingBottom", 1000);
			display = !display
		}
	}

var app = new Vue({
	el:'#app',
	data:{
		CHUEH:{
			name:'闕郁珊',
			quote:'有錢能使鬼推磨',
			is:false
		},
		KE:{
			name:'葛綜棠',
			quote:'この世界に本当のオリジナルは、自分の人生しかないですから。',
			is:false
		},
		SU:{
			name:'蘇奕紘',
			quote:'發現人生即將邁入壯年，卻又不肯認真運動的懶惰工程師',
			is:false
		},
		LIAO:{
			name:'廖品奇',
			quote:'<fake>這標籤是假的</fake>',
			is:false
		},
		WU:{
			name:'吳岳高',
			quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt, rerum laboriosam eveniet accusamus error fuga nihil maxime iure. Ratione hic veniam quaerat earum nobis distinctio, in eveniet ipsum dolorem.',
			is:false
		},
		CHEN:{
			name:'陳逸寧',
			quote:'多點期待 世界可愛',
			is:false
		},
	}
})
