let count = 0; // 1초마다 증가하는 카운트 값
let timerID = null; // 타이머 ID

onessage = function (e) { // 워커 객체로부터 메시지 수신
	if(e.data == "start") { // 카운트 시작
		if(timerID != null)
			return; // 타이머 작동중이면 리턴
		timerID = setInterval(myCallback, 1000); // 1초 간격 myCallback() 호출
	}
	else if(e.data == "stop") { // 카운트 중지
		if(timerID == null)
			return; // 타이머 작동하지 않으면 리턴
		clearInterval(timerID);
		close(); // 워커 태스크 종료. 더 이상 메시지 받지 못함
	}
}

function myCallback() { // 1초 간격으로 호출, count 값을 1 증가 시키고 워커 객체로 전송
	count++; // 카운트값 증가
	postMessage(count); // 카운트 값을 워커 객체로 전송
}