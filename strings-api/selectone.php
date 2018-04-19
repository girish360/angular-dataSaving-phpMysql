<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

//var_dump($data);

include "db.php";
$sql = "SELECT * FROM strings WHERE _id = '$data->id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $resultData = array() ;
    while($row = $result->fetch_assoc()) {
        $resultData[] = $row;
    }
    echo json_encode($resultData);
} else {
    echo "0";
}
// echo "<pre>";
// print_r($resultData);
// echo "</pre>";
$conn->close();
?>
