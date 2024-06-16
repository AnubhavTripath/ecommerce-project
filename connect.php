<?php
    $fullName = $_POST['fullName'];
    $phoneNumber = $_POST['phNumber'];
    $address = $_POST['address'];
    $cardNumber = $_POST['cardNumber'];
    $cardMonth = $_POST['cardMonth'];
    $cardYear = $_POST['cardYear'];
    $cardCVV = $_POST['cardcvv'];


    //database connection
    $conn = new mysqli('localhost', 'root' , '', 'bhavya store');
    if($conn->connect_error){
        die('connection failed: ' .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into product_order(fullName, phoneNumber, address, cardNumber, cardMonth, 
        cardYear, cardCVV) values(?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sisiiii" , $fullName , $phoneNumber , $address , $cardNumber , 
        $cardMonth , $cardYear , $cardCVV);
        $stmt->execute();
        echo "ordered";
        $stmt->close();
        $conn->close();
    }
?>