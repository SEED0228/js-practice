/*function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}
alert(addString("WebCamp"));*/
/*var promptStr = prompt('何か好きな文字を入力してください')

alert(promptStr)*/
do {
	var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
	if(user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー"){
		var js_hand = getJShand();
		var judge = winLose(user_hand, js_hand);
		alert('あなたの選んだ手は'+ user_hand + 'です。\n'+'JavaScriptの選んだ手は'+ js_hand + 'です。\n結果は'+judge+'です。');
		break;
	}
	else if(user_hand == null){
		alert('またチャレンジしてね');
		break;
	}
	else{
		alert('入力に間違いがあります');
	}
}while(1);



function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );
	if(js_hand_num == 0){
		js_hand = 'グー';
	}
	else if(js_hand_num == 1){
		js_hand = 'チョキ';
	}
	else {
		js_hand = 'パー';
	}
	return js_hand;
}
function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}
		else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}
		else {
			winLoseStr = "負け";
		}
	}
	else if(user == "チョキ"){
		if(js == "チョキ"){
			winLoseStr = "あいこ";
		}
		else if(js == "パー"){
			winLoseStr = "勝ち";
		}
		else {
			winLoseStr = "負け";
		}
	}
	else {
		if(js == "パー"){
			winLoseStr = "あいこ";
		}
		else if(js == "グー"){
			winLoseStr = "勝ち";
		}
		else {
			winLoseStr = "負け";
		}
	}
	return winLoseStr;
}