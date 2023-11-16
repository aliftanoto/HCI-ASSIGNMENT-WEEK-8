 $(function() {
                var fullWidth = 1000; // Width in pixels of full-sized image
                var fullHeight =   1000; // Height in pixels of full-sized image
                var thumbnailWidth = 600;  // Width in pixels of thumbnail image
                var thumbnailHeight = 768;  // Height in pixels of thumbnail image

                // Set size of div
                $('#picture').css({
                        'width': thumbnailWidth+'px',
                        'height': thumbnailHeight+'px'
                });

                $('#thumbnail').css({
                        'width': 668,
                        'heigth': 400
                });
                

                // Hide the full-sized picture
                $('#full').hide();

                // Toggle pictures on click
                $('#picture').click(function() {
                        $('#thumbnail').toggle();
                        $('#full').toggle();
                });

                // Do some calculations
                $('#picture').mousemove(function(e) {
                        var mouseX = e.pageX - $(this).attr('offsetLeft'); 
                        var mouseY = e.pageY - $(this).attr('offsetTop'); 

                        var posX = (Math.round((mouseX/thumbnailWidth)*100)/100) * (fullWidth-thumbnailWidth);
                        var posY = (Math.round((mouseY/thumbnailHeight)*100)/100) * (fullHeight-thumbnailHeight);

                        $('#full').css({
                                'left': '-' + posX + 'px',
                                'top': '-' + posY + 'px'
                        });
                });
        });