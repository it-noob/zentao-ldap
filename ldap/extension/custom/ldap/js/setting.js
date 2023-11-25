function onClickTest() {
	$.post(createLink('ldap', 'test'),{
		host: $('#ldapHost').val(),
		dn: $('#ldapBindDN').val(),
		pwd: $('#ldapPassword').val(),
	}, function(data) {
		$('#testRlt').html(data);
	});
}

function sync() {
	$('#ldapSync').attr("disabled","true");
	var syncText = $('#ldapSync').text();
	var syncingText = $('#ldapSync').attr("syncingtext");
	$('#ldapSync').text(syncingText);

	$.get(createLink('ldap', 'sync'), function(ret){
		var msg = '用户数据同步结束！\n';
		if( ret && ret.insertRows === 0 && ret.updateRows === 0 ) {
			msg += '本次无用户新增或被更新。';
		} else if ( ret ) {
			msg += '\n';
			if ( ret.insertRows > 0 ) {
				msg += '本次共新增 ' + ret.insertRows + ' 位用户。\n';
			}

			if ( ret.updateRows > 0 ) {
				msg += '本次共更新 ' + ret.updateRows + ' 位用户。\n';
			} 
		}
		alert(msg);
	}).fail(function(ret) {
		alert( "用户数据同步失败！失败原因：\n" + ret.responseText );
	}).always(function() {
		$('#ldapSync').text(syncText);
		$('#ldapSync').removeAttr("disabled");
	});
}