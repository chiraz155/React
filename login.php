<?php
session_start();
header('Access-Control-Allow-Origin: *');

require 'config.php';


$username = $_POST["username"];
$password = $_POST["password"];
$result = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username'");
$row = mysqli_fetch_assoc($result);

if (mysqli_num_rows($result) > 0) {
    if ($password == $row['password']) {
      $_SESSION["isLoggedIn"] = true;
      $_SESSION["username"] = $row["username"];
      $_SESSION["id"] = $row["id"];

        echo 'success';
        exit;
        
    } else {
        echo "Wrong Parameters!!";
        exit;
    }
}
  

  
?>




