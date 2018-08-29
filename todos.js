//check of specific todos
$("ul").on("click", "li",function(){
$(this).toggleClass("completed");

});

// Click on X to delete Todo
$("ul").on("click", "span",function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});	
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	//grabbing a new todo text from input
	var todotext = $(this).val();
	$(this).val("");	
	// create a new li and add to ul 
	$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todotext + "</li>");
	}


});

$(".fa-plus").click(function(){
	$("input").fadeToggle(300);
});