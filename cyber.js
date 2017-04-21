function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];
    return color;
}

$(document).ready(function() {
    var container = $('#container');
    var canvas = $("#c");

    var insertCyber = function() {
        var cyber = $('<div class="cyber">CYBER</div>')
        var height = Math.floor(Math.random() * $(document).height() * 0.9);
        var width = Math.floor(Math.random() * $(document).width() * 0.6);
        cyber.animate({
        left: width,
        top: height,
        fontSize: "+=" + Math.floor(Math.random() * 200),
        })
        container.append(cyber);
        setTimeout(function() {cyber.fadeOut("fast")}, 400)
    }

    var repeatInsert = function(num) {
        insertCyber();
        if(num > 0)
            setTimeout(function() {repeatInsert(num - 1);}, 150);
        else {
            console.log('else')
            $('#hacker').css({position: 'absolute', marginTop: '30%', opacity: 0.6})
            $('#hacker').fadeIn(2000);
            var msg = $('<p hidden id="msg"><br>Your phone has been infected with a virus.</br><br>You have 30 minutes to find the password or all your files will be permanently delete</br></p>')
            container.append(msg)
            msg.fadeIn(8000)
            //setTimeout(function(){msg.fadeIn('slow'), 20000})
        }
    }

    var insertHacker = function() {
        var hacker = $('<img id="hacker" src=hacker.jpg>');
        container.append(hacker);
    }

    insertHacker();
    $("#hacker").fadeOut(4000, function() {setTimeout(function() {repeatInsert(50)}, 1500);})

})