<?php
//Include PHPMailer library
use PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\src\Exception;

require 'PHPMailer/PHPMailer/src/Exception.php';
require 'PHPMailer/PHPMailer/src/PHPMailer.php';
require 'PHPMailer/PHPMailer/src/SMTP.php';

//Checking if the form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
	$name = htmlspecialchars(trim($_POST['name']));
	$email = htmlspecialchars(trim($_POST['email']));
	$phone = htmlspecialchars(trim($_POST['phone']));
	$message = htmlspecialchars(trim($_POST['message']));

	//Validating required fields
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo "<script>alert('Please enter a valid email address.');
		window.history.back();</script>";
		exit;
	}

	//Creating a new PHPMailer instance
	$mail = new PHPMailer(true);

	try{
		//SMTP Config
		$mail -> isSMTP();
		$mail -> Host = 'smtp.gmail.com';
		$mail -> SMTPAuth = true;
		$mail -> Username = 'm.shen.ache@gmail.com';
		$mail -> Password = 'hitmen47';
		$mail -> SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
		$mail -> 465;

		//Email headers
		$mail => setFrom($email, $name);
		$mail -> addAddress('familyoffaith@gmail.com', 'Family of Faith Bible Church');
		$mail -> addReplyTo($email, $name);

		//Email content
		$mail -> isHTML(true);
		$mail -> Subject = "New Contact Form Submission from $name";
		$mail -> body = "<h2>New Message from Contact Form</h2>
		<p><strong>Name: </strong> $name</p>
		<p><strong>Email: </strong> $email</p>
		<p><strong>Phone: </strong> $phone</p>
		<p><strong>Message: </strong> $message</p>";
		$mail -> AltBody = "New Message from Contact Form:\n\nName: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

		//Sending mail
		$email -> send();

		echo "<script>
		alert('Thank you for your message! We will get back to you shortly.');
		window.location.href = 'contact.html';
		</script>";
	} catch(Exception $e){
		echo "<script>
		alert('Message could not be sent. Mailer Error: {$mail -> ErrorInfo}');
		window.history.back();
		</script>";
	}

}	else{
		//Redirect if accessed directly
		header("Location: contact.html");
		exit;
	}

	//Email recipient
	/*$to = "familyoffaith@gmail.com";
	$subject = "New Contact Form Submission from $name";

	//Email content
	$email_body = "You have received a new message from the contact form on your website.history
	
	Name: $name
	Email: $email
	Phone: $phone
	Message: $message";

	//Email headers
	$headers = "From: $email\r\n";
	$headers = "Reply-to: $email\r\n";

	//Send the email
	if(mail($to, $subject, $email_body, $headers)){
		echo "<script> alert('Thank you for your message!. We will get back to you shortly.');
		window.location.href = 'contact.html;
		</script>";
	} else{
		echo "<script> alert('Oops! Something went wrong. Please try again later.');
		window.history.back();
		</scipt>";
	}*/
/*} else{
	header("Location: contact.html");
}*/
?>