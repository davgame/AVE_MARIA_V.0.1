<?php

/* https://api.telegram.org/bot6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$surname=$_POST['surname'];
$category=$_PST['category'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$token = "6848194800:AAE0HEbU3DWCL9fvBbr5TdlP-mQWNzqctCQ";
$chat_id = "-4140320163";
$arr = array(
  'Имя:' => $name,
  'Фамилия:'=>$surname,
  'Категория обучения:'=>$category,
  'Email' => $email,
  'Телефон:' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: Popup.vue');
} else {
  echo "Error";
}