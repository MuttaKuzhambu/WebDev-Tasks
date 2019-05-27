<?php
echo "<pre>";
print_r($_FILES);
echo"</pre>";
?>
<form action='' method="post" enctype="multipart/form-data">
<input type='file' name='file'>
<input type='submit' value='upload image'>
</form>


