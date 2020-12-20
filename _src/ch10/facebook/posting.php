<?php
	session_start();

	$ptext = '';
	if (empty($_REQUEST['ptext'])) {
		$ptext = $_SESSION['ptext'];
	}
	else {
		$ptext = $_REQUEST['ptext'];
		$_SESSION['ptext'] = $ptext;
	}

    $app_id = <APP_ID>;
    $app_secret = "your_app_secret_key";
    $my_url = "your_redirect_url";
	$scope = "offline_access,publish_stream";
	$url_fb = "https://graph.facebook.com/arturo.f.montoro/feed";

    $code = $_REQUEST["code"];

    if(empty($code)) {
        $dialog_url = "http://www.facebook.com/dialog/oauth?client_id=" 
            . $app_id . "&redirect_uri=" . urlencode($my_url) . "&scope=". $scope;

        echo("<script> top.location.href='" . $dialog_url . "'</script>");
    }

    $token_url = "https://graph.facebook.com/oauth/access_token?client_id="
        . $app_id . "&redirect_uri=" . urlencode($my_url) . "&client_secret="
        . $app_secret . "&code=" . $code;

    $access_token = file_get_contents($token_url);

	$arr_token = split("access_token=", $access_token);
	$acc_token = $arr_token[1];

    $graph_url = "https://graph.facebook.com/me?" . $access_token;

    $user = json_decode(file_get_contents($graph_url));

	$fields = array(
	            'access_token'=>urlencode($acc_token),
	            'message'=>urlencode($ptext)
	        );
	$fields_string = '';	
	
	foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
	rtrim($fields_string,'&');
	
	$ch = curl_init();
	
	curl_setopt($ch,CURLOPT_URL,$url_fb);
	curl_setopt($ch,CURLOPT_POST,count($fields));
	curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	
	curl_exec($ch);
	
	curl_close($ch);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />

<link rel="apple-touch-icon" href="uiuikit/images/apple-touch-icon.png" />
<meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />

<link rel="apple-touch-icon" href="uiuikit/images/apple-touch-icon.png" />
<link rel="apple-touch-icon" href="" />
<link rel="stylesheet" href="uiuikit/stylesheets/iphone.css" />

<title>iPosting</title>
</head>

<body>
<div id="header">
		<h1>iPosting</h1>
	</div>

<form name="frm" method="post" action="posting.php">
<ul class="form">
	<li>
		<textarea name="ptext" rows="4" placeholder="Type here"></textarea>
	</li>
</ul>
<p><a href="javascript: document.frm.submit()" class="button white">Post to your wall</a></p>
</form>

<script type='text/javascript'>
 alert('Text was published in your wall');
</script>

</body>

</html>
