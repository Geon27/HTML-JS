onmessage = function (e) {
	let sum = 0;
	let from = parseInt(e.data.from); //from은 시작 숫자
	let to = parseInt(e.data.to); // to는 끝 숫자
	for(let i=from; i<=to; i++)
		sum += i;
	postMessage(sum);
}