<?php
require_once 'vendor/autoload.php';

if($_POST['title'] == 'terras') {



	$to = "amra_sk@mail.ru";
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$name = $_POST['name'];
	$message = $_POST['message'];
	$square =$_POST['square'];
	$price = $_POST['price'];
	$files = $_POST['files'];
	$model = $_POST['model'];
	$size = $_POST['size'];
	$color = $_POST['color'];
	$texture = $_POST['texture'];
	$how = $_POST['how'];
	$forma = $_POST['forma'];
	$aside = $_POST['aside'];
	$bside = $_POST['bside'];

	if(isset($_POST['cside'])) {
		$cside = $_POST['cside'];
	}

	if(isset($_POST['message'])) {
		$message = $_POST['message'];
	}

	if(isset($_POST['dside'])) {
		$dside = $_POST['dside'];
	}

	if(isset($_POST['eside'])) {
		$eside = $_POST['eside'];
	}

	if(isset($_POST['options'])) {
		$options = $_POST['options'];
	}

	if(isset($_POST['stepmodel'])) {
		$stepmodel = $_POST['stepmodel'];
		$stepscol = $_POST['stepscol'];
		$lengthstep = $_POST['lengthstep'];
		$colorstep = $_POST['colorstep'];
	}


	try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'amra_sk@mail.ru';                     // SMTP username
    $mail->Password   = '15198624aFf';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('betokov93@mail.ru', 'Mailer');
    $mail->addAddress('web_masters_07@mail.ru');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

    for ($i=0; $i < count($_FILES['files']['name']); $i++) {
        $mail->addAttachment($_FILES['files']['tmp_name'][$i], $_FILES['files']['name'][$i]);    // Optional name
    }


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Калькулятор Террас';
    $mail->CharSet = "utf-8";
    // $mail->Body = 'Hi Genius';

    if(!empty($name) && !empty($phone)&& !empty($email)) {
        $sendmessage = "<p><strong>Имя:</strong> ".$name."</p>\r\n";
        $sendmessage .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
        $sendmessage .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
        if($message) {
            $sendmessage .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";;
        }
        $sendmessage .= "<p><strong>Площадь:</strong> ".$square."</p>\r\n";
        $sendmessage .= "<p><strong>Модель доски</strong> ".$model."</p>\r\n";
        $sendmessage .= "<p><strong>Размер доски </strong> ".$size."</p>\r\n";
        $sendmessage .= "<p><strong>Цвет доски</strong> ".$color."</p>\r\n";
        $sendmessage .= "<p><strong>Текстура доски</strong> ".$texture."</p>\r\n";
        $sendmessage .= "<p><strong>Способ укладки</strong> ".$how."</p>\r\n";
        $sendmessage .= "<p><strong>Форма террасы</strong> ".$forma."</p>\r\n";
        $sendmessage .= "<p><strong>Сторона А</strong> ".$aside."</p>\r\n";
        $sendmessage .= "<p><strong>Сторона Б</strong> ".$bside."</p>\r\n";

        if($cside) {
           $sendmessage .= "<p><strong>Сторона С</strong> ".$cside."</p>\r\n";
       }
       if($dside) {
           $sendmessage .= "<p><strong>Сторона D</strong> ".$dside."</p>\r\n";
       }
       if($eside) {
           $sendmessage .= "<p><strong>Сторона Е</strong> ".$eside."</p>\r\n";
       }

       if($options) {
           $sendmessage .= "<p><strong>Опции</strong> ".$options."</p>\r\n";
       }

       if($stepmodel) {
        $sendmessage .= "<p><strong>Параметры лестницы:</strong></p>\r\n";
        $sendmessage .= "<p><strong>Модель лестницы</strong> ".$stepmodel."</p>\t\r\n";
        $sendmessage .= "<p><strong>Размер лестницы</strong> ".$lengthstep."</p>\t\r\n";
        $sendmessage .= "<p><strong>Цвет лестницы</strong> ".$colorstep."</p>\t\r\n";
    }
}




try {

    $transport = (new Swift_SmtpTransport('smtp.mail.ru', 465, 'ssl'))
    ->setUsername('betokov93@mail.ru')
    ->setPassword('w5]4=^R0')
    ;

// Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);

// Create a message
    $message = (new Swift_Message('Калькулятор террас'))

    ->setFrom(['betokov93@mail.ru' => 'Betokov Barasbi'])
    ->setTo(['web_masters_07@mail.ru' => 'A name'])
    ->setBody($sendmessage, 'text/html')
    ;


    for ($i=0; $i < count($_FILES['files']['name']); $i++) {
        $message->attach(
            Swift_Attachment::fromPath($_FILES['files']['tmp_name'][$i])->setFilename($_FILES['files']['name'][$i])
        );
    }

// Send the message
    $mailer->send($message);

}
catch (Exception $ex) {
    echo $ex -> getMessage();
}
}
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
//     $mail->isSMTP();                                            // Send using SMTP
//     $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
//     $mail->Username   = 'betokov93@mail.ru';                     // SMTP username
//     $mail->Password   = 'w5]4=^R0';                               // SMTP password
//     $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
//     $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//     //Recipients
//     $mail->setFrom('betokov93@mail.ru', 'Mailer');
//     $mail->addAddress('web_masters_07@mail.ru');     // Add a recipient
//     // $mail->addAddress('ellen@example.com');               // Name is optional
//     // $mail->addReplyTo('info@example.com', 'Information');
//     // $mail->addCC('cc@example.com');
//     // $mail->addBCC('bcc@example.com');

//     // Attachments
//     // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//     for ($i=0; $i < count($_FILES['files']['name']); $i++) {
//         $mail->addAttachment($_FILES['files']['tmp_name'][$i], $_FILES['files']['name'][$i]);    // Optional name
//     }


//     // Content
//     $mail->isHTML(true);                                  // Set email format to HTML
//     $mail->Subject = 'Калькулятор Террас';
//     $mail->CharSet = "utf-8";
//     // $mail->Body = 'Hi Genius';
//     if(!empty($name) && !empty($phone)&& !empty($email)) {
//       $mail->Body = "<p><strong>Имя:</strong> ".$name."</p>\r\n";
//       $mail->Body .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
//       $mail->Body .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
//       if($message) {
//        $mail->Body .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
//    }
//    if($files) {
//        $mail->Body .= "<p><strong>Файлы:</strong> ".$files."</p>\r\n";
//    }
//    $mail->Body .= "<p><strong>Площадь:</strong> ".$square."</p>\r\n";
//    $mail->Body .= "<p><strong>Модель доски</strong> ".$model."</p>\r\n";
//    $mail->Body .= "<p><strong>Размер доски </strong> ".$size."</p>\r\n";
//    $mail->Body .= "<p><strong>Цвет доски</strong> ".$color."</p>\r\n";
//    $mail->Body .= "<p><strong>Текстура доски</strong> ".$texture."</p>\r\n";
//    $mail->Body .= "<p><strong>Способ укладки</strong> ".$how."</p>\r\n";
//    $mail->Body .= "<p><strong>Форма террасы</strong> ".$forma."</p>\r\n";
//    $mail->Body .= "<p><strong>Сторона А</strong> ".$aside."</p>\r\n";
//    $mail->Body .= "<p><strong>Сторона Б</strong> ".$bside."</p>\r\n";
//    if($cside) {
//        $mail->Body = "<p><strong>Сторона С</strong> ".$cside."</p>\r\n";
//    }
//    if($dside) {
//        $mail->Body = "<p><strong>Сторона D</strong> ".$dside."</p>\r\n";
//    }
//    if($eside) {
//        $mail->Body = "<p><strong>Сторона Е</strong> ".$eside."</p>\r\n";
//    }

//    if($options) {
//        $mail->Body = "<p><strong>Опции</strong> ".$options."</p>\r\n";
//    }

//    if($stepmodel) {
//        $mail->Body = "<p><strong>Параметры лестницы:</strong></p>\r\n";
//        $mail->Body = "<p><strong>Модель лестницы</strong> ".$stepmodel."</p>\t\r\n";
//        $mail->Body = "<p><strong>Размер лестницы</strong> ".$lengthstep."</p>\t\r\n";
//        $mail->Body = "<p><strong>Цвет лестницы</strong> ".$colorstep."</p>\t\r\n";
//    }

// }

// $mail->AltBody = '';

// $mail->send();
// echo 'Message has been sent';
// } catch (Exception $e) {
// 	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }


// }

// if($_POST['title'] == 'fence') {

// 	$to = "amra_sk@mail.ru";
// 	$phone = $_POST['phone'];
// 	$email = $_POST['email'];
// 	$name = $_POST['name'];
// 	$square =$_POST['square'];
// 	$price = $_POST['price'];
// 	$model = $_POST['model'];
// 	$size = $_POST['size'];
// 	$color = $_POST['color'];
// 	$texture = $_POST['texture'];
// 	$length = $_POST['length'];
// 	$width = $_POST['width'];
// 	$door1 = $_POST['door'];
// 	$door2 = $_POST['door2'];


// 	if(isset($_POST['message'])) {
// 		$message = $_POST['message'];
// 	}
// 	if(isset($_POST['options'])) {
// 		$options = $_POST['options'];
// 	}

// 	if(isset($_POST['doorName'])) {
// 		$doorName = $_POST['doorName'];
// 		$doorSize = $_POST['doorSize'];
// 	}




// // Формирование заголовка письма

//     try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
//     $mail->isSMTP();                                            // Send using SMTP
//     $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
//     $mail->Username   = 'betokov93@mail.ru';                     // SMTP username
//     $mail->Password   = 'w5]4=^R0';                               // SMTP password
//     $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
//     $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//     //Recipients
//     $mail->setFrom('betokov93@mail.ru', 'Mailer');
//     $mail->addAddress('web_masters_07@mail.ru');     // Add a recipient
//     // $mail->addAddress('ellen@example.com');               // Name is optional
//     // $mail->addReplyTo('info@example.com', 'Information');
//     // $mail->addCC('cc@example.com');
//     // $mail->addBCC('bcc@example.com');

//     // Attachments
//     // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//     for ($i=0; $i < count($_FILES['files']['name']); $i++) {
//         $mail->addAttachment($_FILES['files']['tmp_name'][$i], $_FILES['files']['name'][$i]);    // Optional name
//     }


//     // Content
//     $mail->isHTML(true);                                  // Set email format to HTML
//     $mail->Subject = 'Калькулятор Заборов';
//     $mail->CharSet = "utf-8";
//     // $mail->Body = 'Hi Genius';
//     if(!empty($name) && !empty($phone)&& !empty($email)) {
//      if(!empty($name) && !empty($phone)&& !empty($email)) {
//         $mail->Body = "<p><strong>Имя:</strong> ".$name."</p>\r\n";
//         $mail->Body .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
//         $mail->Body .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
//         if($message) {
//             $mail->Body .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
//         }
//         $mail->Body .= "<p><strong>Площадь:</strong> ".$square."</p>\r\n";
//         if($files) {
//             $mail->Body .= "<p><strong>Файлы:</strong> ".$files."</p>\r\n";
//         }
//         $mail->Body .= "<p><strong>Цена:</strong> ".$price."</p>\r\n";
//         $mail->Body .= "<p><strong>Модель:</strong> ".$model."</p>\r\n";
//         $mail->Body .= "<p><strong>Размер:</strong> ".$size."</p>\r\n";
//         $mail->Body .= "<p><strong>Цвет:</strong> ".$color."</p>\r\n";
//         $mail->Body .= "<p><strong>Текстура:</strong> ".$texture."</p>\r\n";
//         $mail->Body .= "<p><strong>Высота:</strong> ".$length."</p>\r\n";
//         $mail->Body .= "<p><strong>Ширина:</strong> ".$width."</p>\r\n";
//         $mail->Body .= "<p><strong>Нужны ли ворота:</strong> ".$door1."</p>\r\n";
//         $mail->Body .= "<p><strong>Нужна ли калитка:</strong> ".$door2."</p>\r\n";
//         if($options) {
//             $mail->Body .= "<p><strong>Опции</strong> ".$options."</p>\r\n";
//         }
//         if($doorName) {
//             $mail->Body .= "<p><strong>Ворота: </strong>".$doorName.", ".$doorSize."</p>";
//         }

//     }
// }

// $mail->AltBody = '';

// $mail->send();
// echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }

// }

//