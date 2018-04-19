<?php
$data = json_decode(file_get_contents("php://input"));
echo "<pre>";
print_r($data);
echo "</pre>";

include "db.php";

//Record in DB and return a status message if data was inserted correctly etc.. 
header('Content-Type: application/json');

$sql = "INSERT INTO `strings`(`stringName`, `textId`, `stringDesc`, `usage`) VALUES ('$data->stringName', '$data->textId', '$data->stringDesc', '$data->usage')";

if($data->stringName){
	$response = $conn->query($sql);
}

$conn->close();
?>
