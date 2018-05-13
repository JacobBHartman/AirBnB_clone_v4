let amen_ID = {};
$(function() {
	$('.amenities .popover li input[type="checkbox"]').click(function() {
	        console.log(amen_ID);
		if ($(this).is(':checked')) {
			amen_ID[$(this).data('id')] = $(this).data('name')
		} else {
			delete amen_ID[$(this).data('id')];
		}
		$('.amenities h4').text(Object.values(amen_ID).join(', '));  
	});   
});

