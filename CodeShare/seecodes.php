<?php
include('server.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>View the codes here</title>
</head>
<body>
		
			<form method="post" action="seecodes.php">
				<?php

		$query="SELECT username FROM users";
			$result=mysqli_query($db,$query);
			$row=mysqli_num_rows($result);
			echo "<select name='show_users'>";
			while($row=mysqli_fetch_array($result)){
			echo "<option value='". $row['username'] ."'>" .$row['username'] ."</option>" ;
					}
					echo "</select>";
			?>
			<input type="submit" name="submit" value="see codes">
			
			</form>
			<?php	
				if(isset($_POST['submit'])){
				$selected_val = $_POST['show_users'];  
				echo "You have selected :" .$selected_val; 
				}
				$result = mysqli_query($db,"SELECT * FROM codebase where username='$selected_val'");
				while($row = mysqli_fetch_array($result)){

					echo "<textarea rows='100' cols='200' placeholder='mytextarea'>";

					echo ($row['code']);
				echo"</textarea>";
					
				}
				
	?>
</body>
</html>


