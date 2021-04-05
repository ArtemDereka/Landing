$(document).ready(function() {

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/php/mail.php",
            data: $(this).serialize()
        }).done(function() {
            swal({
                title: "Good job!",
                text: "Message send!",
                icon: "success",
            });
        });
        return false
    });

});