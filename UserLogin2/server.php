<?php
	
	session_start();

	$username="";
	$email="";
	$errors=array();

	$db =mysqli_connect('localhost','root','','registration');

	if(isset($_POST['register'])){
		$username=mysql_real_escape_string($_POST['username']);
		$email=mysql_real_escape_string($_POST['email']);
		$password_1=mysql_real_escape_string($_POST['password_1']);
		$password_2=mysql_real_escape_string($_POST['password_2']);

		if(empty($username)){
			array_push($errors,"Username is Required");
		}
		if(empty($email)){
			array_push($errors,"Email is Required");
		}
		if(empty($password_1)){
			array_push($errors,"Password is Required");
		}
		if($password_1 != $password_2){
			array_push($errors,"Password doesn't match");
		}

		if(count($errors)==0){
			$password=md5($password_1) ;
			$sql="INSERT INTO users(username,email,password) VALUES ('$username','$email','$password')";
			mysqli_query($db,$sql);	

			$_SESSION['username']=$username;
			$_SESSION['success']="You are now logged in!";
			header("location: index.php");
		}

	}
	//login code
	if(isset($_POST['login'])){
		$username=mysql_real_escape_string($_POST['username']);
		$password=mysql_real_escape_string($_POST['password']);

		if(empty($username)){
			array_push($errors,"Username is Required");
		}
		if(empty($password)){
			array_push($errors,"Password is Required");
		}
		if(count($errors)==0){
			$password=md5($password);
			$query="SELECT * FROM users WHERE username='$username' AND password='$password'";
			$result=mysqli_query($db,$query);
			if(mysqli_num_rows($result)==1){
				//log in the user here :)

				$_SESSION['username']=$username;
			$_SESSION['success']="You are now logged in!";
			header("location: index.php");		
			}
			else{
				array_push($errors,"Wrong username or password");
				header("location:login.php");
			}
		}
	}

	//logout

	if(isset($_GET['logout'])){
		session_destroy();
			unset($_SESSION['username']);
			header('location:login.php');
	}


?>