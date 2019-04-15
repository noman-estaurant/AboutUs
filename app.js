let display = true
	$(document).ready(function(){
		$("#content .back").toggle()
		$("#content .quote").toggle()
		$("#content .name").toggle()
		$(".frame").click(function(){
			tempsave=this     //Save current this as tempsave to make back works
			$("#content p").toggle("slow")
			$("#content .title").toggle("slow")
			$("#content .back").toggle("slow")
			$("#content .quote").toggle("slow")
			$(".frame").not(this).toggle("slow")
			if($(this).is("#CHUEH")){
				display?$("#CHUEH").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH").attr("src","https://i.imgur.com/Fq8AHjI.png");
				$(this).toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(this).is("#KE")){
				display?$("#KE").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE").attr("src","https://i.imgur.com/eCyrqtM.png");
				$(this).toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(this).is("#SU")){
				display?$("#SU").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU").attr("src","https://i.imgur.com/f2svmBF.png")
				$(this).toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#LIAO")){
				display?$("#LIAO").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO").attr("src","https://i.imgur.com/mwhHx7L.png")
				$(this).toggleClass( "showing", 1000);
				display = !display
			}
			if($(this).is("#WU")){
				display?$("#WU").attr("src",""):$("#WU").attr("src","")
				$(this).toggleClass( "showingBottom", 1000);
				display = !display
			}
			if($(this).is("#CHEN")){
				display?$("#CHEN").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN").attr("src","https://i.imgur.com/9s5Mq5w.png")
				$(this).toggleClass( "showingBottom", 1000);
				display = !display
			}
		})
		$(".back").click(function(){
			$("#content p").toggle("slow")
			$("#content .title").toggle("slow")
			$("#content .back").toggle("slow")
			$("#content .quote").toggle("slow")
			$(".frame").not(tempsave).toggle("slow")
			if($(tempsave).is("#CHUEH")){
				display?$("#CHUEH").attr("src","https://i.imgur.com/adK2Tmu.png"):$("#CHUEH").attr("src","https://i.imgur.com/Fq8AHjI.png");
				$(tempsave).toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(tempsave).is("#KE")){
				display?$("#KE").attr("src","https://i.imgur.com/ZRgJHOl.png"):$("#KE").attr("src","https://i.imgur.com/eCyrqtM.png");
				$(tempsave).toggleClass( "showingTop", 1000);
				display = !display
			}
			if($(tempsave).is("#SU")){
				display?$("#SU").attr("src","https://i.imgur.com/Bv17oaZ.png"):$("#SU").attr("src","https://i.imgur.com/f2svmBF.png")
				$(tempsave).toggleClass( "showing", 1000);
				display = !display
			}
			if($(tempsave).is("#LIAO")){
				display?$("#LIAO").attr("src","https://i.imgur.com/zRc62vI.png"):$("#LIAO").attr("src","https://i.imgur.com/mwhHx7L.png")
				$(tempsave).toggleClass( "showing", 1000);
				display = !display
			}
			if($(tempsave).is("#WU")){
				display?$("#WU").attr("src",""):$("#WU").attr("src","")
				$(tempsave).toggleClass( "showingBottom", 1000);
				display = !display
			}
			if($(tempsave).is("#CHEN")){
				display?$("#CHEN").attr("src","https://i.imgur.com/pwQW97u.png"):$("#CHEN").attr("src","https://i.imgur.com/9s5Mq5w.png")
				$(tempsave).toggleClass( "showingBottom", 1000);
				display = !display
			}
    })
	})
