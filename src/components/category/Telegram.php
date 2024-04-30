<?php


/* https://api.telegram.org/bot6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$chat_id = "-4140320163";
// Ваш API-ключ Telegram бота (Token)
$telegram_api_key = '6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ';

//Определяем переменные для передачи данных из нашей формы

$name = $_POST['name'];
$surname=$_POST['surname'];
$category=$_POST['category'];
$email = $_POST['email'];
$phone_input = $_POST['phone_input'];

// Сообщение для отправки в группу
$message = "Новая заявка на обратный звонок:\nИмя: $name\nНомер Фамилия: $surname\nКатегория:$category\nEmail:$email";


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$telegram_url= "https://api.telegram.org/bot$telegram_api_key/sendMessage?chat_id=$chat_id&text=" . urlencode($message);

// Отправляем запрос к API Telegram
$response = file_get_contents($telegram_url);