$(document).ready(function() {
    $.getJSON("https://jsonplaceholder.typicode.com/albums", function(data) {
        var albums = "";
        $.each(data, function(key, value) {
            albums += "<tr>";
            albums += "<td>" + value.userId + "</td>";
            albums += "<td>" + value.id + "</td>";
            albums += "<td>" + value.title + "</td>";

            albums += "<tr>";
        });
        $("#albums").append(albums);
    });
});