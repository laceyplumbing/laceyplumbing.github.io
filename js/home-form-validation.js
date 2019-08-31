function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

$(document).ready(function(){
	
	//$(".refresh").click(function () {
		//$(".imgcaptcha").attr("src","demo_captcha.php?_="+((new Date()).getTime())); 
	//});
	
	$('#cnt_form_1').submit(function(e) {
		
		if($('#entername').val() == ''){
			alert("Please enter your Name");
			$('#entername').focus();
			return false;
		}
		if($('#entertelephone').val() == ''){
			alert("Please fill your Phone No");
			$('#entertelephone').focus();
			return false;
		}
		if(!isValidEmailAddress($('#enteremaill').val())){
			alert("Please enter your Valid Email Address");
			$('#enteremaill').focus();
			return false;
		}
		$.post("home-form.php", $("#cnt_form_1").serialize(), function(response){
			//if(response==0){
			//   alert("wrong captcha code! Please enter correct code");
			//}else{
			//}
			window.location.href = 'thanks.html';
		});
		return false;
	});
});