$(document).ready(function(){var t="ontouchstart"in document.documentElement;t=$(window).width()<768,t?$("link[href*='jquery.fullPage.css']").attr("disabled","disabled"):$("#fullpage").fullpage({anchors:["firstPage","secondPage","3rdPage","4thPage","5thPage","6thPage"],navigation:!0,navigationPosition:"right",navigationTooltips:["Hello!","What is Myhub","Why Myhub","How it Works","Who it's for","Get Started"],afterLoad:function(t,a){var o=$(this),e=o.find("#footer_container");if(o.find(".hbtmBtns").addClass("bounce animated"),6===a){var n=$(window).height();e.css("top",n+"px"),o.addClass("active-trans")}else o.removeClass("active-trans")}}),$(".venobox").venobox()}),$(".dropdown-toggle").dropdown();