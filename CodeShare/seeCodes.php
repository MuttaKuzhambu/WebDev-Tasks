<?php 
	include('server.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>View codes</title>
</head>
<body>	
	<?php
$con=mysqli_connect("localhost","root","","code_share");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM codebase");

echo "<table border='1'>
<tr>
		<th>Submission ID</th>
		<th>Name</th>
		<th>Code</th>
	</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['id'] . "</td>";
echo "<td>" . $row['username'] . "</td>";
echo "<td>" . $row['code'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>
</table>

</body>
</html>