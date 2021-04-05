$(document).ready(function() {

    $("#formEng").submit(function() {
        $.ajax({
            type: "POST",
            url: "/php/mailEng.php",
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