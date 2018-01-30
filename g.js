$(() => {

((doc, win) => {
	var 
		c = doc.getElementById('canvas'), 
		ctx = c.getContext('2d'),
		w = c.width,
		h = c.height,
		arcWidth = 10
		rectWidth = 50
		data = [0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0,
				0, 0,10, 0, 0, 0,
				3, 4, 9, 0, 0, 0,
				2, 5, 8, 0, 0, 0,
				1, 6, 7, 0, 0, 0],
		idxt = -1,
		idxb = -1
		;

	var randColor = function() {
		return '#' + ((~~(Math.random() * 0xffffff)) | 0x800000).toString(16);
	};

	var draw = function() {
		var now = new Date();
		ctx.clearRect(0, 0, w, h);
		ctx.save();
		
		ctx.beginPath();
		data.forEach((e, i) => {
			ctx.fillStyle = '#ccc'; // randColor();
			ctx.rect(~~(i / 6) * rectWidth, (i % 6) * rectWidth, rectWidth, rectWidth);
			if (e) {
				ctx.fillStyle = '#000';
				ctx.font="20px Arial";
				ctx.textAlign = 'center';
				ctx.fillText(e, (i % 6) * rectWidth + rectWidth / 2, ~~(i / 6) * rectWidth + rectWidth / 2);
			}
		});
		ctx.stroke();
		ctx.restore();
	};

	var findX = function(goal, top) {
		if (!goal) return;
		data.forEach((e, i) => {
			if (e == goal) {
				top ? idxt = i : idxb = i;
				return;
			}
		});
	};

	var move = function() {
		// top
		data.forEach((e, i) => {

		});
	};

	var clean = function(idx) {
		return idx >= 6 && !data[idx - 6];
	};

	var check = function() {
		return idxt == idxb - 6;
	};


	draw();

	//setInterval(function() {
		//draw();
	//}, 1000);

})(document, window);

});