<?php
 if (isset($_POST["button"])){
     if(!empty($_POST["name"]) && !empty($_POST["email"])&& !empty($_POST["numberPhone"])&&!empty($_POST["text"])){
        $name =$_POST["name"];
        $email = "melamoblamientos@gmail.com";
        $asunto ="Mensaje de la página Melamoblamientos ";
        $userEmail =$_POST["email"];
        $numberPhone =$_POST["numberPhone"];
        $text ="Mensaje de " . $name . "  :  \r\n \r\n \r\n ". $_POST["text"] . "   \r\n \r\n \r\n ". "Numero de teléfono: " . $numberPhone ;
        $mail =mail($email /*destino */,$asunto, $text /*contenido */);
        header("Location:index.php");
     }
 }

?>