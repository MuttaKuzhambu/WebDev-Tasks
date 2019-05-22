<?php if(count($errors)>0 ) : ?>
		<div class='error'>
			<?php foreach($errors as $i) : ?>
			<p><?php echo $i; ?></p>
			<?php endforeach ?>
		</div>
<?php  endif ?>