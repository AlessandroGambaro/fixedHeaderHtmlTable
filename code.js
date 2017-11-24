var startingPositionArray = []
$(function () {
    $.each($('thead th div'), function (key, value) {
        startingPositionArray.push($(value).position().left)
    })
    $("#tableWrapper").scroll(function () {
        $.each(startingPositionArray, function (key, value) {
            $($('thead th div')[key]).css('left', value + $('#prima').position().left)
        })
    })
})
