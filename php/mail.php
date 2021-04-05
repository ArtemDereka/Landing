<?php

$recepient = "artemdereka@gmail.com";
$sitename = "artemdereka.tech";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$msg = trim($_POST["message"]);

$message = "Имя: $name \nEmail: $email \nТелефон: $phone \nТекст: $msg ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-tupe: text/plain; charset=\"utf-8\"\n Form: $recepient");