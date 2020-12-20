WA.Proxy("../../WebAppNet/Proxies/ProxyXML.php");

function get_cross(res) {
	if (!res) {
		WA.Request("http://www.bsnux.com/static/data.xml", null, get_cross, true);
		return;
	}
	var data = res.responseXML;
	var username = data.getElementsByTagName("username").item(0).firstChild.data;
	var age = data.getElementsByTagName("age").item(0).firstChild.data;
	alert("User: " + username + "; Age:" + age);
}

