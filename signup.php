<?php
header('Access-Control-Allow-Origin: *');

require 'config.php';

 
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  
  $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username' OR email = '$email'");
  if(mysqli_num_rows($duplicate) > 0){
    echo
       'Username or Email Has Already Taken';
  }
  else{
    
      $query = "INSERT INTO tb_user VALUES('','$username','$email','$password')";
      mysqli_query($conn, $query);
      echo 'success';
    
   
  }

?>

