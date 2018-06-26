// Select color input
// Select size input
var colour, height, width;
// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    
})
function makeGrid(n, m) {

// Your code goes here!
    $('tr').remove();
    for (var i = 1; i <= n; i++) {
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (var j = 1; j <= m; j++) {
            $('#table' + i).append('<td></td>');
    }
}
// adds colour to each cell when clicked
    $('td').click(function addColor() {
        colour = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + colour)
        }
    })
 

}
