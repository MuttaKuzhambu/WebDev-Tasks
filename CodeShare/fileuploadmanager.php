<?php
include('server.php');
if($_SERVER["REQUEST_METHOD"]=="POST"){
	echo"file successfully uploaded";
	if(isset($_FILES['photo']) && $_FILES['photo']['error']==0){
		$file_name     = $_FILES["photo"]["name"]; 
        $file_type     = $_FILES["photo"]["type"]; 
        $file_size     = $_FILES["photo"]["size"]; 
        $file_tmp_name = $_FILES["photo"]["tmp_name"]; 
        $file_error    = $_FILES["photo"]["error"]; 
        $data = mysqli_real_escape_string($db,file_get_contents($file_tmp_name));
		$username=mysqli_real_escape_string($db,$_SESSION['username']);
		$query="UPDATE codebase SET code='$data' WHERE username='$username'";
		mysqli_query($db,$query);
		header("location:index.php");
	}
}
?>