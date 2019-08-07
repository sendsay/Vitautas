<?php


    function checkMail($mail){
        $res = false;

        $fileListMails = fopen('mailsList.txt', 'r');

        foreach ($fileListMails as $fileListMail) {

            echo $fileListMail;

            if ($fileListMail == $mail) {
                $res = true;
            }
        }
        fclose($fileListMails);
        return $res;
    }


	$recipient = "sendsay-admin@s2.ho.ua" ; //$_POST["recipient"];
	$subject = "TEST"; //$_POST["subject"];
	$inhtml = $_POST["inhtml"];	
	$email = "sendsay-admin@s2.ho.ua"; // $_POST["email"];
	$name = $_POST["name"];	
	$message = "HELLO"; //$_POST["message"];	
	$charset = 'utf-8';
	$head =
		"From: " + $email  + "\r\n" .
		"MIME-Version: 1.0\r\n" .
		"Content-Type: text/html; charset=$charset\r\n" .
		"Content-Transfer-Encoding: 8bit";
	$body = '';

	if ($inhtml == 'yes'){
		$body = '<html><body style="font-family: Arial; color: #727272;">';
		$body = $body . '<h3 style="font-size: 16px;">Subject: ' . $subject . '</h3>';
		$body = $body . '<h4 style="font-size: 14px;">From: ' . $name . ' (' . $email . ') </h4>';
		$body = $body . '<p style="font-size: 13px;">' . $message . '</p>';
		$body = $body . '</body></html>';
	}
	else {
		$body = $body . 'Subject: ' . $subject . 'From: ' . $name . ' (' . $email . ') Message:' . $message ;
	}

	if (mail($recipient, "=?$charset?B?" . base64_encode($subject) . "?=", $body, $head)) {



		$fileListMails = fopen('mailsList.txt', 'w');    //формирую данные для записи.
    //    if (!checkMail($email)) {                                        //проверяю налилчие мыла в файле.

            fwrite($fileListMails, $email);                               //записываю данные.
    //    }

        fclose($fileListMails);
        header("Location: ../form-success.htm");

        exit;

	} else {
	 	header("Location: ../form-error.htm");
	 	exit;
	}



