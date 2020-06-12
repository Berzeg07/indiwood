<?php

$to = "amra_sk@mail.ru";
$phone = $_POST['phone'];
$email = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];
$square =$_POST['square'];
if(isset($_POST['files'])) {
	$files = $_POST['files'];
}
$price = $_POST['price'];
$files = $_POST['files'];
$model = $_POST['model'];
$size = $_POST['size'];
$color = $_POST['color'];
$texture = $_POST['texture'];
$length = $_POST['length'];
$width = $_POST['width'];
$door1 = $_POST['door'];
$door2 = $_POST['door2'];

$options = $_POST['options'];


// Формирование заголовка письма
$subject = 'Калькулятор Заборов';
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
if(!empty($name) && !empty($phone)&& !empty($email)) {
	$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
	$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
	if(!empty($message)) {
		$msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
	}
	$msg .= "<p><strong>Площадь:</strong> ".$square."</p>\r\n";
if(!empty($files)) {
	$msg .= "<p><strong>Файлы:</strong> ".$files."</p>\r\n";
}
	$msg .= "<p><strong>Цена:</strong> ".$price."</p>\r\n";
	$msg .= "<p><strong>Модель:</strong> ".$model."</p>\r\n";
	$msg .= "<p><strong>Размер:</strong> ".$size."</p>\r\n";
	$msg .= "<p><strong>Цвет:</strong> ".$color."</p>\r\n";
	$msg .= "<p><strong>Текстура:</strong> ".$texture."</p>\r\n";
	$msg .= "<p><strong>Высота:</strong> ".$length."</p>\r\n";
	$msg .= "<p><strong>Ширина:</strong> ".$width."</p>\r\n";
	$msg .= "<p><strong>Нужны ли ворота:</strong> ".$door1."</p>\r\n";
	$msg .= "<p><strong>Нужна ли калитка:</strong> ".$door2."</p>\r\n";
	$msg .= "<p><strong>Опции:</strong> ".$options."</p>\r\n";



}

$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>