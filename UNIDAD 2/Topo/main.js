var puntos=0;

	$(function(){
		
    $(".items").hover(function(){
			
        var tis = $(this);
		tis.find(".hueco").click(function(){			
				
        if(tis.hasClass("active")){
			tis.removeClass("active");
			puntos++;
			$("#puntos").html(puntos);
		} else{
					console.log(":(");
				}
			})
		})
	})
	var iterval = setInterval(function(){
		topoaleatorio();
        ganador();
	},1500);
	

	topoaleatorio = function(){
		var num = parseInt(Math.random() * 2);
		$(".items").removeClass("active");
		$(".items:nth-child("+num+")").addClass("active");
	}
  
    ganador = function(){
        if(puntos == 3){
            alert("Topo Murio");

        }
    }