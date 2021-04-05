<?php

$recepient = "artemdereka@gmail.com";
$sitename = "artemdereka.tech";

$nameEng = trim($_POST["nameEng"]);
$emailEng = trim($_POST["emailEng"]);
$phoneEng = trim($_POST["phoneEng"]);
$messageEng = trim($_POST["messageEng"]);

$message = "Имя: $nameEng \nEmail: $emailEng \nТелефон: $phoneEng \nТекст: $messageEng ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-tupe: text/plain; charset=\"utf-8\"\n Form: $recepient");