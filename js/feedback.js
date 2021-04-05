вгений$("#sendmail").on("click", function() {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var message  = $("#message").val().trim();

    if(name == "") {
        $("#errorMess").text("Введите имя")
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите email")
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите телефон")
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("Введите сообщение не менее 5 символов")
        return false;
    }

    $("#errorMess").text("");

});