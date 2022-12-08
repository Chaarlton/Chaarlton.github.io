<?php
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

//database Connection Request

$newcon = new mysqli('localhost', 'root', '', 'message');
if($newcon-> connect_error){
    die('Connection Failed:' . $newcon->connect_error);
}
else{
    $stmt = $newcon-> prepare("insert into acquires(Name, Email, Subject, Message)
     values(?,?,?,?)");
}
$stmt->bind_param("ssss", $name, $email, $subject, $message);
$stmt->execute();
$stmt->close();

?>