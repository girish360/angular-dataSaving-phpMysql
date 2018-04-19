<?php
$data = json_decode(file_get_contents("php://input"));
echo "<pre>";
print_r($data);
echo "</pre>";

include "db.php";

//Record in DB and return a status message if data was inserted correctly etc.. 
header('Content-Type: application/json');

$sql = "UPDATE `strings` SET
        `stringName` ='$data->stringName',  
        `textId` ='$data->textId',
        `stringDesc` ='$data->stringDesc',
        `usage` ='$data->usage'
        WHERE _id = $data->_id ";
$qry = $conn->query($sql);
if($data->stringName){
    $response = $conn->query($sql);
    echo($conn->error);
}
$conn->close();
?>
