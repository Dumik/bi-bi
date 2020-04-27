<?php

/* https://api.telegram.org/bot1099629944:AAEBYws6FqA-ZwAHno5wuzteLvyn5PNLsz8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$vin_kod = $_POST['vin'];
$model= $_POST['model_car'];
$year = $_POST['year'];
$body_type = $_POST['body_type'];
$motor = $_POST['motor'];
$fuel = $_POST['fuel'];
$info= $_POST['user_info'];
$token = "1099629944:AAEBYws6FqA-ZwAHno5wuzteLvyn5PNLsz8";
$chat_id = "-408057442";
$txt = "";
$arr = array(
  'Ім`я користовача: ' => $name,
  'Телефон: ' => $phone,
  'VIN код: ' => $vin_kod,
  'Модель авто: ' => $model, 
  'Рік випуску: ' => $year, 
  'Тип кузова: ' => $body_type, 
  'Об`єм мотору: ' => $motor, 
  'Тип палива: ' => $fuel, 
  'Що потрібно: ' => $info
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>