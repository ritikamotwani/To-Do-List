$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(){
	
	$(this).parent().fadeOut(500,function(){
		remove();
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$("ul").append("<li><span>X</span> " + todoText + "</li>"); 
	}

})