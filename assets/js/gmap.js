$(function(){

    var options = {
        map: ".map_canvas",
        location: "Denver, CO, United States",
        markerOptions: {
            icon: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Bubble-Azure-icon.png"
        }
    };

    var $geoComplete = $("#geocomplete");

    $geoComplete.geocomplete(options);

    $("body").on('click', '.show_location', function(e){
        e.preventDefault();

        $.get("http://ipinfo.io", function (response) {
            console.log(response);

            var $address = response.city + ", " + response.region + ", " + response.country;

            $geoComplete.val($address);
            $geoComplete.trigger("geocode");

        }, "jsonp");

        $(this).closest('.modal').modal('hide');

    }).on('click', '.close_modal', function(e){
            e.preventDefault();
            $(this).closest('.modal').modal('hide');
        });


});