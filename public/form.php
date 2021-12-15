<?php
  // Globals
  $to = "jfollest@spots.codes";
  // Assign Vars
  $formEmail = $_POST['email'];
  $formName = $_POST['name'];
  $formPhone = $_POST['phone'];
  $formMessage = $_POST['message'];
  // Check if we have everything we need
  if(
    isset($formEmail) &&
    isset($formName) &&
    isset($formPhone) &&
    isset($formMessage)
  ) {
    // =======================
    // Send Email
    // =======================
    // Formulate Message
    $subject = "Web Email: " . $formName;
    $message = $formName . ",\n\n" . $formMessage . "\n\n" . $formPhone . "\n" . $formEmail;
    $headers = "From:" . $from;
    // Send Email
    mail($to,$subject,$message,$headers);
    header('Location: /Contact?failed=0');
  } else {
    header('Location: /Contact?failed=1'); 
  }
?>