$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    $("#portfolio ul").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);
	});
});

function showDiv(n) {
  if (document.getElementById(n).style.display == 'none') {
    document.getElementById(n).style.display = "block";
  } else {
    document.getElementById(n).style.display = "none";
  }
}

$(".btnyear").on("click", function() {
    $(this).addClass("bp");
    $(".btntype").removeClass("bp");
});

$(".btntype").on("click", function() {
    $(this).addClass("bp");
    $(".btnyear").removeClass("bp");
});
