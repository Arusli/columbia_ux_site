$( document ).ready(function() {
  // Handler for .ready() called.
  $(".ul-dropdown").on("click", function() {
  	// debugger;
  	$(this).parents().first().toggleClass("menuspacer");
		$(this).children().last().toggleClass("fa-caret-right").toggleClass("fa-caret-down");
		$(this).siblings().first().toggleClass("hide");
		// if($(this).children().last().hasClass("fa-caret-right")) {
		// $(this).children().last().removeClass("fa-caret-right").addClass("fa-caret-down");
		//  }
		// else {
		//	$(this).children().last().removeClass("fa-caret-down").addClass("fa-caret-right");
		//  }
		
		
		// console.log("katie 4eva coding god");
	});


//main page return
  $(".siteTitle").on("click", function () {
    $("#bodysection").children().addClass("hide");
    $(".studentfeaturespage").removeClass("hide");
  });

//end of main page return



//FULL FUNCTIONS for BODY SECTION PANELS MA, MS, and APPLY, REVISED!!!!! 


$(".ul-dropdown-items").children().on("click", function () {
  var panelname = $(this).attr("id");
  $("#bodysection").children().addClass("hide");
  $("."+panelname).removeClass("hide");
  $("."+panelname+"-descriptions-panel").children().addClass("hide");
  $("."+panelname+"-descriptions-overview").removeClass("hide");
});

//ma page functions former
//$("#ma-page").on("click", function () {
//    $("#bodysection").children().addClass("hide");
//    $(".ma-descriptions-panel").children().addClass("hide");
//    var mainpanel = $(this).attr("id");
//    $("."+mainpanel).removeClass("hide");
//    $(".maOverview").removeClass("hide");

//  });
  


//This is to control right hand menu within Master of Arts panel

$(".maButton").on("click", function () {
  	var panelClass = $(this).attr("data-panelClass");
  	$("."+panelClass).siblings().addClass("hide");
  	$("."+panelClass).removeClass("hide");
  });



//ms page functions former
//$("#ms-page").on("click", function () {
//    $("#bodysection").children().addClass("hide");
//    $(".ms-descriptions-panel").children().addClass("hide");
//    var mainpanel = $(this).attr("id");
//    $("."+mainpanel).removeClass("hide");
//    $(".msOverview").removeClass("hide");

//  });





  //This is to control right hand menu within Master of Arts panel

$(".msButton").on("click", function () {
    var panelClass = $(this).attr("data-panelClass");
    $("."+panelClass).siblings().addClass("hide");
    $("."+panelClass).removeClass("hide");
  });


//Apply-page-link menu function former

//$("#apply-page").on("click", function () {
//    $("#bodysection").children().addClass("hide");
//    var mainpanel = $(this).attr("id");
//    $("."+mainpanel).removeClass("hide");
//  });




});
