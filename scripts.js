var a = ['','Satu ','Dua ','Tiga ','Empat ', 'Lima ','Enam ','Tuju ','Delapan ','Sembilan ','Sepuluh ','Eleven ','Twelve ','Thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
		var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

		function inWords (num) {
			if ((num = num.toString()).length > 9) return 'overflow';
			n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
			if (!n) return; var str = '';
			str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])   : '';
			return str;
		}

		function getNumber() {
	        var minNumber = 1; // nilai max
	        var maxNumber = 9; // nilai min
	        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
	        var randomnumber2 = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
	        $('#result').val(randomnumber);
	        $('#stringHolder').val("Berapa " + inWords(randomnumber) + "Ditambah " + inWords(randomnumber2)+ "?");
	        $('#result2').val(randomnumber2);
	        $('#summary').val(randomnumber + randomnumber2);	        
	    }

	    function compare() {
	    	if ($('#jawaban').val() == $('#summary').val()) {
	    		alert('Jawaban Betul');
	    	}
	    	else{
	    		alert('Jawaban Salah');
	    	}
	    }



var canvas = document.getElementById('canv'),
		ctx = canvas.getContext('2d');

function grow(el) {
	el.style.height = "10rem";
	el.style.height = (el.scrollHeight)+"px";
}

var generate = function() {
	var text = document.getElementById('stringHolder').value.split("\n").join("\n");
	var x = 12.5;
	var y = 15;
	var lineheight = 30;
	var lines = text.split('\n');
	var lineLengthOrder = lines.slice(0).sort(function(a, b) {
		return b.length - a.length;
	});
	ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 170;
	ctx.canvas.height = (lines.length * lineheight);

	ctx.fillStyle = "#232323";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.textBaseline = "middle";
	ctx.font="20px Anonymous Pro";
	ctx.fillStyle = "#BBBBBB";
	for (var i = 0; i<lines.length; i++)
		ctx.fillText(lines[i], x, y + (i*lineheight) );
}
	generate();

	$(document).ready(function () { getNumber();generate();});

