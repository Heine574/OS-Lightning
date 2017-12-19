function getMousePos( canvas, evt ) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor( ( evt.clientX - rect.left ) / ( rect.right - rect.left ) * canvas.width ),
        y: Math.floor( ( evt.clientY - rect.top ) / ( rect.bottom - rect.top ) * canvas.height )
    };
}

l_bool = {
	val: false
}

OS = {
	code_i: 0,
	vars: {
		'dollar': '$',
		'timeRef': new Date(),
		'font': "15px sans-serif",
		'keys': "",
	},
	sys_vars: {},
	files: {
		'home\\startup.exe': 'del_sprites;$ printcolor 0 0 0;$ println "Initializing djPro\'s Text Engine";$ println "Initializing mocqoro\'s Sound Engine";$ println "Initializing MagicWars010098\'s 3D Engine";$ println "Initializing OS-Lightning 0.3";$ sleep 1;$ clear;$ image box -240 -180 240 180 0 | end 1;$ image polygon (((255 * 65536) + (255 * 256)) + 0) ((255 * 65536) + (255 * 256)) 0 -20 -5 -10 5 0 -5 10 8 20 -8 20 -15 10 -10 0 -15 -10 0 -20 | end 2;$ image text "Lightning Graphics" -100 100 0 0 2 (((255 * 65536) + (255 * 256)) + 0) | end 3;$ Sprite 1 0 0 1 0 "none" end 1;$ Sprite 1 0 0 2 0 "@home\\bounce.script" end 2;$ Sprite 1 0 -60 3 0 "none" end 3;$ sleep 1;$ rot_var = (0);$ y_sin = (0);$ play_sound "startup.sound";$ run_lightning;$ wait 35;$ stop_lightning;$ sleep 3;$ desktop = ("box,,-240,,-180,,240,,180,,(rgb 40 40 40)");$ import home\\taskbar.exe;',
		'home\\bounce.script': 'goto 0 ((sin y_sin) * 20);$| rot (rot_var);$| rot_var = (rot_var + 1);$| y_sin = (y_sin + 10);',
		'alps.exe': 'printcolor 0 0 0;$ println "Alps Terminal 0.3";$ #Start mark$ mark start;$ println (":~" join dollar);$ push 0;$ input;$ editLast (":~" join dollar join " " join answer);$ CommandsList = (split answer " " true true);$ if {(index 1 CommandsList) == "echo"} then goto_mark echo;$ if {(index 1 CommandsList) == "playsound"} then goto_mark playsound;$ if {(index 1 CommandsList) == "run"} then goto_mark run;$ if {(index 1 CommandsList) == "help"} then goto_mark help;$ if {(index 1 CommandsList) == "exit"} then goto_mark exit;$ if {(index 1 CommandsList) == "stats"} then goto_mark stats;$ if {(index 1 CommandsList) == "set_var"} then goto_mark set_var;$ println ((index 1 CommandsList) join " is not a command");$ goto_mark start;$ #echo mark$ mark echo;$ println (">>> " join (index 2 CommandsList));$ goto_mark start;$ #set_var mark$ mark set_var;$ @set_var "(index 2 CommandsList)" "(index 3 CommandsList)";$ goto_mark start;$ #playsound mark$ mark playsound;$ play_sound (index 2 CommandsList);$ goto_mark start;$ #run mark$ mark run;$ push 0;$ run_file (index 2 CommandsList);$ stop 0;$ #exit mark$ mark exit;$ push 0;$ run_file ("home\\\\taskbar.exe");$ stop 0;$ #stats mark$ mark stats;$ println (">>> Math and List handler speed test:");$ println (">>> Calculating...");$ push 0;$ resetTimer;$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ test = ((len (list (log (sin (cos (tan (1111 + (2222 - (3333 * (4444 / (5555 ^ 6666))))))))))) join system.files);$ t = (timer / 10);$ println (">>> Average speed: " join t join " seconds");$ println (">>> Printer speed test:");$ resetTimer;$ println (">>> |");$ editLast (">>> ||");$ editLast (">>> |||");$ editLast (">>> ||||");$ editLast (">>> |||||");$ editLast (">>> ||||||");$ editLast (">>> |||||||");$ editLast (">>> ||||||||");$ editLast (">>> |||||||||");$ editLast (">>> ||||||||||");$ editLast (">>> |||||||||||");$ editLast (">>> ||||||||||||");$ editLast (">>> |||||||||||||");$ editLast (">>> ||||||||||||||");$ editLast (">>> |||||||||||||||");$ editLast (">>> ||||||||||||||||");$ editLast (">>> |||||||||||||||||");$ editLast (">>> ||||||||||||||||||");$ editLast (">>> |||||||||||||||||||");$ editLast (">>> ||||||||||||||||||||");$ push 0;$ mark wait1;$ if {(len tasks) > 0} then goto_mark wait1;$ t = (timer / 20);$ println (">>> Average speed: " join t join " seconds");$ goto_mark start;$ #help mark$ mark help;$ println (">>> type \'echo [string]\' to print text into the terminal");$ println (">>> type \'playsound [file]\' to play a sound");$ println (">>> type \'run [file]\' to execute a file");$ println (">>> type \'exit\' to return to the desktop");$ println (">>> type \'stats\' to wiew system statistics");$ println (">>> type \'set_var\' to set a variable");$ goto_mark start;',
		'home\\taskbar.exe': 'menu = (0);$ raw_image (desktop) 1;$ image box -240 -15 240 15 (20 * 20) | end 4;$ image box -240 -15 -200 15 (rgb 255 0 0) | end 5;$ image box -240 -150 -40 180 (rgb 100 100 100) | end 6;$ image box -240 -150 -40 -110 (rgb 70 70 70) | text "Alps Terminal 0.3" -230 -50 -135 -135 2 (rgb 255 255 0) | end 7;$ image box -240 -110 -40 -70 (rgb 70 70 70) | text "Clock" -230 -50 -95 -95 2 (rgb 255 255 0) | end 8;$ image box -240 -70 -40 -30 (rgb 70 70 70) | text " i  Info" -230 -50 -55 -55 2 (rgb 255 255 0) | oval 12 12 -222 -48 (rgb 255 255 0) 2 | end 9;$ image box -240 -30 -40 10 (rgb 70 70 70) | text "Flash" -230 -50 -15 -15 2 (rgb 255 255 0) | end 10;$ del_sprite 1;$ del_sprite 2;$ del_sprite 3;$ Sprite 1 0 0 1 0 "none" end 1;$ Sprite 1 0 -165 4 0 "none" end 2;$ Sprite 1 0 -165 5 0 "@startbtn.script" end 3;$ Sprite 1 0 0 6 0 "@menu.script" end 4;$ Sprite 1 0 0 7 0 "if {menu == 0} then goto_line 4;$| if {menu == 1} then goto_line 6;$| stop 0;$| hide;$| stop 0;$| show;$| if {mouseDown == true} {mouseX < -40} {mouseY < -110} {mouseX > -240} {mouseY > -150} {menu == 1} then goto_line 9;$| stop 0;$| clearShell;$| play_sound click.sound;$| push 0;$| run_file alps.exe;" end 5;$ Sprite 1 0 0 8 0 "if {menu == 0} then goto_line 4;$| if {menu == 1} then goto_line 6;$| stop 0;$| hide;$| stop 0;$| show;$| if {mouseDown == true} {mouseX < -40} {mouseY < -70} {mouseX > -240} {mouseY > -110} {menu == 1} then goto_line 9;$| stop 0;$| clearShell;$| play_sound click.sound;$| push 0;$| run_file clock.exe;" end 6;$ Sprite 1 0 0 9 0 "if {menu == 0} then goto_line 4;$| if {menu == 1} then goto_line 6;$| stop 0;$| hide;$| stop 0;$| show;$| if {mouseDown == true} {mouseX < -40} {mouseY < -30} {mouseX > -240} {mouseY > -70} {menu == 1} then goto_line 9;$| stop 0;$| clearShell;$| play_sound click.sound;$| push 0;$| reader.file = (info.txt);$| run_file reader.exe;" end 7;$ Sprite 1 0 0 10 0 "if {menu == 0} then goto_line 4;$| if {menu == 1} then goto_line 6;$| stop 0;$| hide;$| stop 0;$| show;$| if {mouseDown == true} {mouseX < -40} {mouseY < 10} {mouseX > -240} {mouseY > -30} {menu == 1} then goto_line 9;$| stop 0;$| clearShell;$| play_sound click.sound;$| push 0;$| input;$| flash.file = (answer);$| run_file cloud://hmi.com/boot files/Flash.lightning;" end 8;$ run_lightning;',
		'startbtn.script': 'if {mouseDown == true} {mouseX < -200} {mouseY < -150} {menu == 0} then goto_line 4;$| if {mouseDown == true} {mouseX < -200} {mouseY < -150} {menu == 1} then goto_line 8;$| stop 0;$| menu = (1);$| play_sound click.sound;$| push 0;$| stop 0;$| menu = (0);',
		'menu.script': 'if {menu == 0} then goto_line 4;$| if {menu == 1} then goto_line 6;$| stop 0;$| hide;$| stop 0;$| show;',
		'connect.exe': '@connect_to hmi.com;'
	},
	sprites: [null],
	images: [null],
	svgImages: {},
	tasks: [],
	lKeys: ['wait'],
	run_lightning: l_bool,
	isTopSystem: true,
	oldshell: [],
	shell: [],
	objects: {},
	fps: 16,
	status: 200,
	sys_info: []
};

document.getElementById("canvas").addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
	OS.vars['mouseX'] = mousePos.x - 240;
	OS.vars['mouseY'] = 360 - (mousePos.y + 180);
} );

var mouseDown = false;
document.getElementById("canvas").onmousedown = function() { 
  mouseDown = true;
  OS.vars['mouseDown'] = mouseDown.toString();
}
document.getElementById("canvas").onmouseup = function() {
  mouseDown = false;
  OS.vars['mouseDown'] = mouseDown.toString();
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = " | " + String.fromCharCode(charCode);
	OS.vars.keys = OS.vars.keys.split(charStr).join("");
    OS.vars.keys += charStr;
};

document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = " | " + String.fromCharCode(charCode);
    OS.vars.keys = OS.vars.keys.split(charStr).join("");
};

setInterval(function() {
var vars = "";
		for (var i in OS.vars) {
			vars += i + ": " + OS.vars[i] + "<br>";
		}
		for (var i in OS.sprites) {
			vars += "Sprite " + i + ": " + OS.sprites[i] + "<br>";
		}
		
		document.getElementById("data").innerHTML = vars;
	}, 100);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function get_UID(system) {
	var i = 0;
	while (system.vars.hasOwnProperty('x' + i.toString())) {
		i += 1;
	}
	return 'x' + i.toString();
}

function drawEllipse(context, centerX, centerY, width, height) {
	
	height = height*2
	width = width*2

	context.beginPath();

	context.moveTo(centerX, centerY - height/2); // A1

	context.bezierCurveTo(
		centerX + width/2, centerY - height/2, // C1
		centerX + width/2, centerY + height/2, // C2
		centerX, centerY + height/2); // A2

	context.bezierCurveTo(
		centerX - width/2, centerY + height/2, // C3
		centerX - width/2, centerY - height/2, // C4
		centerX, centerY - height/2); // A1

	context.strokeStyle = "red";
	context.stroke();
	context.closePath();	
}

function run_text(system) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	//console.log(system.vars["font"]);
	ctx.font = system.vars["font"];
	var spacing = parseInt(system.vars["font"].split(" ")[0].replace("px", ""));
	var text_y = 360 - spacing/2;
	for (i = system.shell.length - 1; i >= 0; i--) {
		ctx.fillText(system.shell[i], 10, text_y);
		text_y -= spacing;
	}
}

function tick_lightning(system) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var oldstyle;
	var subsystem = {
		code_i: 0,
		vars: system.vars,
		sys_vars: {},
		files: system.files,
		sprites: system.sprites,
		images: system.images,
		tasks: system.tasks,
		run_lightning: system.run_lightning,
		isTopSystem: false,
		oldshell: system.oldshell,
		shell: system.shell,
		status: 200,
	};
	var x;
	var y;
	var bp;
	var dir;
	var img;
	var startDate = new Date();
	var temp;
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0, 0, 480, 360);
	for (var i = 0; i < system.sprites.length; i++) {
		if (system.sprites[i] != null) {
			temp = system.sprites[i].split(",|");
			if (temp[6] == "1") {
				x = parseInt(temp[1]);
				y = parseInt(temp[2]);
				//console.log(x);
				//console.log(y);
				bp = system.images[parseInt(temp[3])];
				dir = temp[4];
				img = bp.split(";;");
				//console.log(dir);
				ctx.setTransform(1,0,0,1,240 + x,180 + (-y));
				ctx.rotate(dir*Math.PI/180);
				for (var v = 0; v < img.length; v++) {
					var itemp = img[v].split(",,");
					if (itemp[0] == "box") {
						oldstyle = ctx.fillStyle;
						var color = parseInt(itemp[5]).toString(16);
						while (color.length < 6) {
							color = "0" + color;
						}
						ctx.fillStyle = "#" + color;
						//console.log([parseInt(itemp[1]) + 240 + x, 360 - (parseInt(itemp[4]) + 180 + y), parseInt(itemp[3]) + 240 + x, 360 - (parseInt(itemp[2]) + 180 + y)].toString());
						ctx.fillRect(
							parseInt(itemp[1]), 
							0 - (parseInt(itemp[4])),
							(parseInt(itemp[3])) - (parseInt(itemp[1])),
							(0 - (parseInt(itemp[2])) - (0 - (parseInt(itemp[4])))
						));
						ctx.fillStyle = oldstyle;
					}
					else if (itemp[0] == "polygon") {
						oldstyle = ctx.fillStyle;
						ctx.beginPath();
						ctx.moveTo(parseInt(itemp[3]), 0 - (parseInt(itemp[4])));
						for (var e = 5; e < itemp.length; e += 2) {
							ctx.lineTo(parseInt(itemp[e]), 0 - (parseInt(itemp[e + 1])));
						}
						//ctx.strokeStyle = "#" + parseInt(temp[1]).toString(16);
						ctx.fillStyle = "#" + parseInt(itemp[2]).toString(16);
						//ctx.stroke();
						ctx.fill();
						ctx.fillStyle = oldstyle;
					}
					else if (itemp[0] == "text") {
						ctx.font = (parseInt(itemp[6]) * 12).toString() + "px sans-serif";
						oldstyle = ctx.fillStyle;
						ctx.fillStyle = "#" + parseInt(itemp[7]).toString(16);
						var lines = itemp[1].split("\n");
						for (var l = 0; l < lines.length; l++) {
							ctx.fillText(lines[l], parseInt(itemp[2]), ((parseInt(itemp[6]) * 12) * l) - (parseInt(itemp[4])));
						}
						//console.log(parseInt(itemp[2]) + 240 + x);
						//console.log(360 - (parseInt(itemp[4]) + 180 + y));
						ctx.fillStyle = oldstyle;
					}
					else if (itemp[0] == "oval") {
						oldstyle = ctx.fillStyle;
						ctx.fillStyle = "#" + parseInt(itemp[5]).toString(16);
						drawEllipse(ctx, parseInt(itemp[3]), 0 - (parseInt(itemp[4])), parseInt(itemp[1]), parseInt(itemp[2]));
						ctx.fillStyle = oldstyle;
					}
					else if (itemp[0] == "svg") {
						var svgimg = system.svgImages[itemp[1]];
						
						ctx.drawImage(svgimg, parseInt(itemp[2]), -(parseInt(itemp[3])));
					}
				}
				ctx.setTransform(1,0,0,1,0,0);
			}
			
			if (temp[5] != "none") {
				if (temp[5][0] == '@') {
					var data = open_file(system, temp[5].replace('@', ''));
					system.sprites[i] = system.sprites[i].replace(temp[5], data);
					temp[5] = data;
				}
				
				temp[5] = temp[5].replace(/\\"/g, "\"");
				var ccode = compile_code(subsystem, temp[5], "Sprite " + i.toString(), "$| ", 0);
				//console.log(ccode);
				while (subsystem.status != 200) {
					if (subsystem.status == 300) {
						console.log(ccode);
						for (var v = 0; v < ccode.length; v++) {
							system.tasks.push(ccode[v]);
						}
						console.log(system.tasks);
						subsystem.status = 200;
					}
					if (subsystem.status == 301) {
						var inf = subsystem.sys_info;
						run(subsystem, ccode);
						var ncode = compile_code(subsystem, temp[5], "Sprite " + i.toString(), "$| ", inf[2]);
						for (var v = 0; v < ncode.length; v++) {
							ccode.push(ncode[v]);
						}
						console.log(ncode);
						console.log(ccode);
					}
				}
				while (ccode.length > 0) {
					if (ccode[0] == "move") {
						temp[1] = (parseFloat(temp[1]) + parseFloat(ccode[1])).toString();
						temp[2] = (parseFloat(temp[2]) + parseFloat(ccode[2])).toString();
						ccode.splice(0, 3);
					}
					else if (ccode[0] == "rot") {
						temp[4] = ccode[1];
						ccode.splice(0, 2);
					}
					else if (ccode[0] == "turn") {
						temp[4] = (parseFloat(temp[4]) + parseFloat(ccode[1])).toString();
						ccode.splice(0, 2);
					}
					else if (ccode[0] == "goto") {
						temp[1] = ccode[1];
						temp[2] = ccode[2];
						ccode.splice(0, 3);
					}
					else if (ccode[0] == "hide") {
						temp[6] = "0";
						ccode.splice(0, 2);
					}
					else if (ccode[0] == "show") {
						temp[6] = "1";
						ccode.splice(0, 2);
					}
					else if (ccode[0] == "edit_code") {
						temp[5] = ccode[1];
						ccode.splice(0, 2);
					}
					else if (ccode[0] == "edit_image") {
						temp[3] = ccode[1];
						ccode.splice(0, 2);
					}
					else {
						ccode.splice(0, 1);
					}
				}
				system.sprites[i] = temp.join(",|");
			}
		}
	}
	//ctx.fillRect(20,20,150,100);
	//subsystem.run_lightning.val = false;
	//console.log(system.run_lightning.val);
	var curDate = new Date();
	//(startDate + ((1 / 1) * 1000))-curDate
	setTimeout(run, (1 / system.fps) * 1000, system, null);
}

function run(system, ccode) {
	if (ccode != null) {
		for (var i = 0; i < ccode.length; i++) {
			system.tasks.push(ccode[i]);
		}
		console.log(ccode);
	}
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	while (system.tasks.length > 0 || (system.run_lightning.val && system.isTopSystem)) {
		//basic commands
		if (system.tasks[0] == "sleep") {
			var date = new Date();
			system.tasks[0] = "sleep_exec";
		}
		if (system.tasks[0] == "sleep_exec") {
			var curDate = new Date();
			if (curDate - date >= system.tasks[1] * 1000) {
				system.tasks.splice(0, 2);
			}
		}
		else if (system.tasks[0] == "println") {
			var lineJoin = "";
			for (var i = 0; i < system.tasks[1].length; i++) {
				lineJoin += system.tasks[1][i];
				var spacing = parseInt(system.vars["font"].split(" ")[0].replace("px", ""));
				if (lineJoin.length >= 480 / (spacing * 0.5)) {
					system.shell.push(lineJoin);
					lineJoin = "";
				}
			}
			system.shell.push(lineJoin);
			system.tasks.splice(0, 2);
		}
		else if (system.tasks[0] == "print") {
			system.tasks.splice(0, 1);
			var oldstyle = ctx.fillStyle;
			//ctx.fillStyle
			ctx.fillText(system.shell[i], 10, text_y);
		}
		else if (system.tasks[0] == "clearShell") {
			system.tasks.splice(0, 1);
			system.shell = [];
		}
		else if (system.tasks[0] == "editLast") {
			system.shell[system.shell.length] = system.tasks[1];
			system.tasks.splice(0, 2);
		}
		else if (system.tasks[0] == "fps") {
			system.fps = system.tasks[1];
			system.tasks.splice(0, 2);
		}
		else if (system.tasks[0] == "printcolor") {
			ctx.fillStyle = rgb(parseInt(system.tasks[1]), parseInt(system.tasks[2]), parseInt(system.tasks[3]));
			system.tasks.splice(0, 4);
		}
		else if (system.tasks[0] == "compile_run") {
			setTimeout(compile_and_run, 10, system, open_file(system, system.tasks[1]), 0);
			system.tasks = [];
		}
		else if (system.tasks[0] == "write_file") {
			system.files[system.tasks[1]] = system.tasks[2];
			system.tasks.splice(0, 3);
		}
		else if (system.tasks[0] == "") {
			system.tasks.splice(0, 1);
		}
		//lightning commands
		else if (system.tasks[0] == "clear") {
			ctx.clearRect(0, 0, 480, 360);
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "Sprite") {
			system.tasks.splice(0, 1);
			var join = "";
			while (system.tasks[1] != "end") {
				join += system.tasks[0] + ",|";
				system.tasks.splice(0, 1);
				if (system.tasks[1] == null) {
					system.tasks.push("println");
					system.tasks.push("Syntax Error");
				}
			}
			join += system.tasks[0];
			system.tasks.splice(0, 2);
			while (system.sprites.length < parseInt(system.tasks[0]) + 1) {
				system.sprites.push(null);
			}
			system.sprites[parseInt(system.tasks[0])] = join + ",|1";
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "image") {
			system.tasks.splice(0, 1);
			var join = "";
			if (system.tasks[0] == "svg") {
				var data = system.tasks[2];
				data = data.replace(/\\"/g, '"');
				system.vars.test = data;

				var DOMURL = window.URL || window.webkitURL || window;

				var svgimg = new Image();
				var svg = new Blob([data], {type: 'image/svg+xml'});
				var url = DOMURL.createObjectURL(svg);
				
				svgimg.onload = function() {
					DOMURL.revokeObjectURL(url);
				}
				
				svgimg.src = url;
				system.svgImages[system.tasks[1]] = svgimg;
				system.tasks.splice(2, 1);
				join += system.tasks[0];
			}
			else {
				join += system.tasks[0];
			}
			system.tasks.splice(0, 1);
			while (system.tasks[1] != "end") {
				if (system.tasks[1] == "end") {
					
				}
				else if (system.tasks[0] == "|") {
					join += ";;";
					system.tasks.splice(0, 1);
					join += system.tasks[0];
					system.tasks.splice(0, 1);
				}
				else if (system.tasks[0] == "svg") {
					var data = system.tasks[2];
					data = data.replace(/\\"/g, '"');
					system.vars.test = data;

					var DOMURL = window.URL || window.webkitURL || window;

					var svgimg = new Image();
					var svg = new Blob([data], {type: 'image/svg+xml'});
					var url = DOMURL.createObjectURL(svg);
					
					svgimg.onload = function() {
						DOMURL.revokeObjectURL(url);
					}
					
					svgimg.src = url;
					system.svgImages[system.tasks[1]] = svgimg;
					system.tasks.splice(2, 1);
					join += ",," + system.tasks[0];
				}
				else {
					join += ",," + system.tasks[0];
					system.tasks.splice(0, 1);
				}
				if (system.tasks[1] == null) {
					system.tasks.push("println");
					system.tasks.push("Syntax Error");
				}
			}
			system.tasks.splice(0, 2);
			while (system.images.length < parseInt(system.tasks[0]) + 1) {
				system.images.push(null);
			}
			system.images[parseInt(system.tasks[0])] = join;
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "raw_image") {
			while (system.images.length < parseInt(system.tasks[2]) + 1) {
				system.images.push(null);
			}
			system.images[parseInt(system.tasks[2])] = system.tasks[1];
			system.tasks.splice(0, 3);
		}
		else if (system.tasks[0] == "del_sprite") {
			while (system.sprites.length < parseInt(system.tasks[1]) + 1) {
				system.sprites.push(null);
			}
			system.sprites[parseInt(system.tasks[1])] = null;
			system.tasks.splice(0, 2);
		}
		else if (system.tasks[0] == "del_sprites") {
			system.sprites = [null];
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "run_lightning") {
			system.run_lightning.val = true;
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "stop_lightning") {
			system.run_lightning.val = false;
			system.tasks.splice(0, 1);
		}
		else if (system.tasks[0] == "") {
			system.tasks.splice(0, 1);
		}
		
		else if (system.tasks.length == 0) {
			//console.log(system.run_lightning.valueOf());
			if (system.run_lightning.val && system.isTopSystem) {
				tick_lightning(system);
				break;
			}
		}
		else if (system.tasks[0] == "wait" && system.isTopSystem) {
			if (system.run_lightning) {
				tick_lightning(system);
				system.tasks[1] = (parseInt(system.tasks[1]) - 1).toString();
				if (parseInt(system.tasks[1]) == 0) {
					system.tasks.splice(0, 2);
				}
				break;
			}
			else {
				system.tasks.splice(0, 2);
			}
		}
		
		else if (system.tasks.length > 0) {
			console.log(system.tasks);
			if (is3Dcmd(system.tasks[0])) {
				command(system, system.tasks[0]);
			}
			else {
				system.tasks.splice(0, 1);
			}
		}
		
		system.vars["tasks"] = system.tasks.join(" | ");
		
		if (system.shell.join() != system.oldshell.join() && !system.run_lightning.val) {
			ctx.clearRect(0, 0, 480, 360);
			run_text(system);
			system.oldshell = system.shell.slice(0);
		}
		//prompt(system.tasks.toString());
	}
	//var x = prompt();
}

function sleep(ms) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < ms);
}

function start(system, file) {
	ccode = compile_file(system, file);
	run(system, ccode);
	if (system.status == 301) {
		var inf = system.sys_info;
		setTimeout(compile_and_run, 1000, inf[0], inf[1], inf[2]);
	}
}

function compile_and_run(system, code, line) {
	ccode = compile_code(system, code, "null", "$ ", line);
	run(system, ccode);
	if (system.status == 301) {
		var inf = system.sys_info;
		setTimeout(compile_and_run, 0, inf[0], inf[1], inf[2]);
	}
}

function compile_file(system, file) {
	ccode = [];
	try {
		code = open_file(system, file);
	}
	//catch(err) {console.log("Error " + err); ccode = ["println", "Error " + err];}
	finally {}
	try {
		ccode = compile_code(system, code, file, "$ ", 0);
	}
	//catch (err) {console.log("Error " + err); ccode.push("println"); ccode.push("CompileError");}
	finally {}
	return ccode;
}

function open_file(system, file) {
	//console.log(system);
	if (file.split("//")[0] == "cloud:") {
		var data = get("cloudData/" + file.split("//")[1], [])/*.replace(/\r\n/g, "\n")/*.replace(/\\\\/g, "\\")*/;
		console.log(data);
		return data;
	}
	else {
		if (system.files[file] == null) {
			//throw "404: FileNotFoundError";
			console.log("println \"Error 404: File " + file + " not found.\";");
			return "println \"Error 404: File " + file + " not found.\";";
		}
		else {
			return system.files[file];
		}
	}
}

function update_timer(system) {
	date = new Date();
	system.vars["timer"] = (date - system.vars["timeRef"]) / 1000;
}

function math_split(str, sep, include) {
	var1 = 0;
	join = "";
	temp = [];
	splitType = "none";
	while (var1 < str.length) {
		var2 = 0;
		join2 = "";
		for (var var2 = 0; var2 < sep.length; var2++) {
			if (splitType != "str") {
				if (str[var1 + var2] == "\"") {
					if (str[var1 + var2 - 1] == "\\") {
						join2 += str[var1 + var2];
					}
					else {
						if (include) {
							join += str[var1];
						}
						splitType = "str";
						var1++;
					}
				}
				else {
					join2 += str[var1 + var2];
				}
			}
		}
		if (splitType == "str") {
			if (str[var1] == "\"") {
				if (str[var1 - 1] == "\\") {
					join += str[var1];
				}
				else {
					if (include) {
						join += str[var1];
					}
					splitType = "none";
				}
			}
			else if (str[var1] == "\\") {
				if (str[var1 - 1] == "\\") {
					join += str[var1];
				}
			}
			else {
				join += str[var1];
			}
		}
		else if (join2 == sep) {
			temp.push(join);
			join = "";
			var1 += sep.length - 1;
		}
		else {
			join += str[var1];
		}
		var1++;
	}
	temp.push(join);
	return temp;
}

function do_math(system, equation) {
	equation = equation.toString();
	update_timer(system);
	var a;
	//console.log(equation);
	var mtemp = math_split(equation, " ", false);
	for (var t2 = 0; t2 < mtemp.length; t2++) {
		if (mtemp[t2][0] == "\"") {
			mtemp[t2] = mtemp[t2].slice(0, -1);
		}
		else if (mtemp[t2] in system.vars) {
			mtemp[t2] = system.vars[mtemp[t2]];
		}
		else if (parseInt(mtemp[2]) == NaN) {
			system.vars[mtemp[t2]] = "0";
			mtemp[2] = 0;
		}
	}
	if (mtemp[0] == "round") {
		a = Math.round(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "abs") {
		a = Math.abs(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "floor") {
		a = Math.floor(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "ceiling") {
		a = Math.ceil(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "sqrt") {
		a = Math.sqrt(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "sin") {
		a = Math.sin(toRadians(parseFloat(mtemp[1])));
	}
	else if (mtemp[0] == "cos") {
		a = Math.cos(toRadians(parseFloat(mtemp[1])));
	}
	else if (mtemp[0] == "tan") {
		a = Math.tan(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "asin") {
		a = Math.asin(toRadians(parseFloat(mtemp[1])));
	}
	else if (mtemp[0] == "acos") {
		a = Math.acos(toRadians(parseFloat(mtemp[1])));
	}
	else if (mtemp[0] == "atan") {
		a = Math.atan(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "ln") {
		a = Math.log(parseFloat(mtemp[1]));
	}
	else if (mtemp[0] == "log") {
		a = Math.log(parseFloat(mtemp[1]));
	}
	else if (mtemp[1] == "^") {
		a = Math.pow(parseFloat(mtemp[0]), parseFloat(mtemp[2]));
	}
	else if (mtemp[0] == "list") {
		var temp = [];
		for (var i = 1; i < mtemp.length; i++) {
			//var id = mtemp[1] + i.toString();
			//set_var(system, id, mtemp[i + 1]);
			//temp.push(id);
			temp.push(mtemp[i]);
			if (temp[i - 1].split(" ").length > 1) {
				temp[i - 1] = "\\\"" + temp[i - 1] + "\\\"";
			}
		}
		a = "\"" + temp.join(" | ") + "\"";
	}
	else if (mtemp[0] == "index") {
		var l = mtemp[2].slice(0, mtemp[2].length).split(" | ");
		if (l.length == 1) {
			a = l.toString().replace(/"/g, "").replace(/\\\|/g, "|");
		}
		else {
			try {
				//console.log(l[mtemp[1] - 1]);
				a = l[mtemp[1] - 1].replace(/\\\|/g, "|");
			}
			//catch(err) {console.log(err);}
			finally {}
		}
		if (a == undefined) {
			throw "IndexError";
			a = "";
		}
	}
	else if (mtemp[0] == "read_file") {
		a = open_file(system, mtemp[1]);
	}
	else if (mtemp[1] == "in") {
		a = (mtemp[0] in mtemp[2].split(" | "));
	}
	else if (mtemp[0] == "system.files") {
		var keys = [];
		for(var k in system.files) keys.push(k);
		a = keys.join(" | ");
	}
	else if (mtemp[0] == "len") {
		a = mtemp[1].split(" | ").length;
	}
	else if (mtemp[0] == "rgb") {
		a = ((parseInt(mtemp[1]) * 65536) + (parseInt(mtemp[2]) * 256) + parseInt(mtemp[3]));
	}
	else if (mtemp[0] == "edit_index") {
		var temp = mtemp[2].split(" | ");
		temp[mtemp[1] - 1] = mtemp[3];
		a = temp.join(" | ");
	}
	else if (mtemp[0] == "split") {
		console.log(mtemp);
		if (mtemp[3].toString() == "true") {
			var temp = math_split(mtemp[1].replace(/\|/g, "\\|"), mtemp[2], (mtemp[4].toString() == "true"));
			for (var i = 0; i < temp.length; i++) {
				var id = get_UID(system);
				set_var(system, id, temp[i]);
				temp[i] = id;
			}
			a = temp.join(" | ");
		}
		else {
			console.log(mtemp[2]);
			var temp = mtemp[1].replace(/\|/g, "\\|").split(mtemp[2]);
			for (var i = 0; i < temp.length; i++) {
				var id = get_UID(system);
				set_var(system, id, temp[i]);
				temp[i] = id;
			}
			a = temp.join(" | ");//home\taskbar.exe
		}
	}
	else if (mtemp[0] == "round") {
		a = 0;
	}
	else if (mtemp[0] == "round") {
		a = 0;
	}
	
	
	
	else if (mtemp.length == 1) {
		a = mtemp[0];
	}
	else {
		mvar = 2;
		a = mtemp[0];
		while (mvar < mtemp.length) {
			if (mtemp[mvar - 1] == "+") {
				a = parseFloat(a) + parseFloat(mtemp[mvar]);
			}
			if (mtemp[mvar - 1] == "-") {
				a = parseFloat(a) - parseFloat(mtemp[mvar]);
			}
			if (mtemp[mvar - 1] == "/") {
				a = parseFloat(a) / parseFloat(mtemp[mvar]);
			}
			if (mtemp[mvar - 1] == "*") {
				a = parseFloat(a) * parseFloat(mtemp[mvar]);
			}
			if (mtemp[mvar - 1] == "join") {
				if (mtemp[mvar] == "@spacebr") {
					a = a.toString() + " ";
				}
				else {
					a = a.toString() + mtemp[mvar];
				}
				//console.log(mtemp);
			}
			mvar += 2;
		}
	}
	//console.log(a);
	if (typeof a != "string") {
		a = a.toString();
	}
	a = a.replace(/\\"/g, "\"");
	if (a.includes(' ') && a[0] != '"') {
		a = a.replace(/"/g, "\\\"");
		a = '"' + a + '"';
	}
	//console.log(a);
	return [a, mtemp];
}

function solve(system, input, info) {
	var str_var = input;
	var a = 0;
	var mtemp = [];
	var ptemp = [];
	var par_join = "";
	var par_join2 = "";
	var par_count = 0;
	var par_len = 0;
	var par_max = 0;
	var str_check = false;
	for (var i = 0; i < str_var.length; i++) {
		if (str_var[i] == "\"") {
			if (str_check) {
				str_check = false;
			}
			else {
				str_check = true;
			}
		}
		if (str_var[i] == "(" && !str_check) {
			par_count += 1;
		}
		if (str_var[i] == ")" && !str_check) {
			par_count += -1;
		}
		if (par_count > par_len) {
			par_len = par_count;
		}
	}
	for (var v = 0; v < par_len; v++) {
		par_count = 0;
		par_max = 0;
		for (var i = 0; i < str_var.length; i++) {
			if (str_var[i] == "(" && !str_check) {
				par_count += 1;
			}
			if (str_var[i] == ")" && !str_check) {
				par_count -= 1;
			}
			if (par_count > par_max) {
				par_max = par_count;
			}
		}
		if (par_count == 0) {
			ptemp = [];
			par_join = "";
			par_join2 = "";
			par_count = 0;
			for (var par_var = 0; par_var < str_var.length; par_var++) {
				if (str_var[par_var] == "\"") {
					if (str_check) {
						str_check = false;
					}
					else {
						str_check = true;
					}
				}
				if (str_var[par_var] == "(" && !str_check) {
					par_count += 1;
					if (str_var[par_var + 1] == "(" && !str_check) {
						par_join += str_var[par_var];
					}
					else if (par_count == par_max && str_var[par_var + 1] != "(") {
						par_join2 = "";
					}
					else if (par_count != par_max && str_var[par_var + 1] != "(") {
						par_join += str_var[par_var];
					}
				}
				else if (str_var[par_var] == ")" && !str_check) {
					if (par_count == par_max && str_var[par_var - 1] != ")") {
						var resp = do_math(system, par_join2);
						a = resp[0];
						mtemp = resp[1];
						par_join += a;
					}
					else {
						par_join += str_var[par_var];
					}
					par_count -= 1;
				}
				else {
					if (par_count == par_max) {
						par_join2 += str_var[par_var];
					}
					else {
						par_join += str_var[par_var];
					}
				}
			}
			str_var = par_join;
		}
		else {
			throw "89: UnbalanceParenthepar_varsError";
		}
	}
	if (typeof a != "string") {
		a = a.toString();
	}
	if (a[0] == "\"") {
		a = a.slice(1, -1);
	}
	if (info) {
		return [a, mtemp];
	}
	else {
		return a;
	}
}

function set_var(system, varName, value) {
	system.vars[varName] = value;
}

function set_sys_var(system, varName, value) {
	system.sys_vars[varName] = value;
}

function get_sys_var(system, varName) {
	return system.sys_vars[varName];
}

function get_var_vals(system, temp) {
	for (var i = 0; i < temp.length; i++) {
		if (temp[i] in system.vars) {
			temp[i] = system.vars[temp[i]];
		}
		if (temp[i][0] == "\"") {
			temp[i] = temp[i].replace(/"/g, "");
		}
		if (temp[i][0] == "(") {
			par_count = 1;
			join = "(";
			for (var bv = 1; bv < temp[i].length; bv++) {
				join += temp[i][bv];
				if (temp[i][bv] ==  "(") {
					par_count += 1;
				}
				if (temp[i][bv] == ")") {
					par_count -= 1;
					if (par_count == 0) {
						//console.log(join);
						a = solve(system, join, false);
						temp[i] = a;
					}
				}
			}
		}
	}
	return temp;
}

function compile_code(system, code, file, sep, startLn) {
	//console.log(code);
	code = code.replace(/\r\n/g, " ");
	code = code.split(sep);
	var ccode = [];
	var codeToParse;
	system.code_i = startLn;
	system.status = 200;
	while (system.code_i < code.length) {
		codeToParse = code[system.code_i];
		if (codeToParse.slice(-1) != ";" && codeToParse[0] != "#") {
			throw "SyntaxError on line " + system.code_i.toString() + ": Line must end with \";\"";
		}
		else {
			args = parse(system, codeToParse, []);
			if (args[0] == "!") {
				if (args == "!run") {
					//run(system, ccode);
					var join = "";
					join = code.join("$ ");
					system.sys_info = [system, join, system.code_i + 1];
					//ccode = [];
					system.status = 301;
					break;
				}
				else if (args == "!stop") {
					break;
				}
				else if (args.split("-")[0] == "!run_file") {
					system.run_lightning.val = false;
					system.tasks.push("compile_run");
					system.tasks.push(args.split("-")[1]);
					console.log(system.tasks);
					system.status = 300;
					break;
				}
				else if (args.split("-")[0] == "!eval") {
					eval(args.split("-")[1]);
				}
				else if (args.split("-")[0] == "!import") {
					var data = open_file(system, args.split("-")[1]).split("$ ");
					for (var im = 0; im < data.length; im++) {
						code.push(data[im]);
					}
				}
				else if (args.split("-")[0] == "!goto_mark") {
					var ix = code.indexOf("mark " + args.split("-")[1] + ";");
					//console.log(ix);
					//console.log(args.split("-")[1]);
					system.code_i = ix;
				}
			}
			else {
				for (var i = 0; i < args.length; i++) {
					ccode.push(args[i]);
				}
			}
		}
		system.code_i++;
	}
	return ccode;
}

function parse(system, codeToParse, args) {
	//console.log(codeToParse);
	if (codeToParse == "input;") {
		system.vars["answer"] = prompt();
		return args;
	}
	else if (codeToParse == "resetTimer;") {
		system.vars["timeRef"] = new Date();
		return args;
	}
	else if (codeToParse[0] == "@") {
		temp = codeToParse.split(" ");
		if (temp[0] == "@set_var") {
			temp = math_split(codeToParse.slice(0, -1), " ", false);
			//console.log(temp);
			temp[1] = solve(system, temp[1], false);
			temp[2] = solve(system, "(" + temp[2] + ")", false);
			system.vars[temp[1]] = temp[2];
			//console.log(temp);
		}
		else if (temp[0] == "@connect_to") {
			temp = math_split(codeToParse.slice(0, -1), " ", false);
			set_var(system, "cloudReturn", get("cloudData/" + temp[1], []));
		}
	}
	else {
		var ctp = codeToParse;
		var compileJoin = "";
		var booleans = [];
		var type = "none";
		var cVar = 0;
		var par_count = 1;
		var temp = [];
		var mtemp = [];
		while (cVar < ctp.length) {
			if (ctp[cVar] == "\\") {
				if (type == "str" && ctp[cVar - 1] == "\\") {
					compileJoin += codeToParse[cVar];
				}
				else {
					compileJoin += codeToParse[cVar];
				}
			}
			else {
				compileJoin += codeToParse[cVar];
			}
			cVar++;
			if (type == "none") {
				if (ctp[cVar] == " ") {
					if (compileJoin == "if") {
						type = "if";
						compileJoin = "";
						booleans = [];
					}
					//Commands
					else if (compileJoin == "goto_line") {
						compileJoin = "";
						cVar += 1;
						while (ctp[cVar] != " " && ctp[cVar] != ";") {
							compileJoin += ctp[cVar];
							cVar += 1;
						}
						system.code_i = parseInt(compileJoin) - 2;
						args = [];
						compileJoin = "";
						cVar = ctp.length + 1;
					}
					else if (compileJoin == "push") {
						args = [];
						return "!run";
					}
					else if (compileJoin == "stop") {
						args = [];
						return "!stop";
					}
					else if (compileJoin == "run_file") {
						args = [];
						var f = ctp.slice(ctp.search("run_file") + 9, -1);
						if (f[0] == "(") {
							f = solve(system, f, false);
						}
						return "!run_file-" + f;
					}
					else if (compileJoin == "eval") {
						args = [];
						var f = ctp.slice(ctp.search("eval") + 5, -1);
						if (f[0] == "(") {
							f = solve(system, f, false);
						}
						return "!eval-" + f;
					}
					else if (compileJoin == "import") {
						args = [];
						var f = ctp.slice(ctp.search("import") + 7, -1);
						if (f[0] == "(") {
							f = solve(system, f, false);
						}
						return "!import-" + f;
					}
					else if (compileJoin == "mark") {
						return args;
					}
					else if (compileJoin == "goto_mark") {
						var f = ctp.slice(ctp.search("goto_mark") + 10, -1);
						if (f[0] == "(") {
							f = solve(system, f, false);
						}
						return "!goto_mark-" + f;
					}
					else if (compileJoin == "templ") {
						
					}
					
					
					else {
						args.push(compileJoin);
						cVar += 1;
						compileJoin = "";
					}
				}
				if (ctp[cVar] == ";") {
					args.push(compileJoin);
					compileJoin = "";
				}
				else if (ctp[cVar] == "\"") {
					type = "str";
					cVar += 1;
					compileJoin = "";
				}
				else if (ctp[cVar] == "=") {
					if (ctp[cVar + 1] == " " && args.length == 1) {
						type = "var";
						compileJoin = "";
						par_count = 1;
						cVar += 2;
					}
				}
				else if (ctp[cVar] == "(") {
					type = "math";
					compileJoin = "";
					par_count = 1;
				}
			}
			else if (type == "str") {
				if (ctp[cVar] == "\"" && ctp[cVar - 1] != "\\") {
					type = "none";
					args.push(compileJoin);
					compileJoin = "";
					cVar += 3;
					if (ctp[cVar] = "(") {
						cVar -= 1;
					}
				}
			}
			else if (type == "math") {
				if (ctp[cVar] == "(") {
					par_count += 1;
				}
				if (ctp[cVar] == ")") {
					par_count -= 1;
					if (par_count == 0) {
						type = "none";
						args.push(solve(system, compileJoin + ")", false));
						compileJoin = "";
						cVar += 2;
						if (ctp[cVar] == "(") {
							cVar -= 1;
						}
						
					}
				}
			}
			else if (type == "var") {
				if (ctp[cVar] == "(") {
					par_count++;
				}
				else if (ctp[cVar] == ")") {
					par_count--;
					if (par_count == 0) {
						type = "none";
						var a = 0;
						temp = [];
						try {
							var resp = solve(system, compileJoin + ")", true);
							a = resp[0];
							mtemp = resp[1];
						}
						//catch(err) {console.log(err);}
						finally {}
						compileJoin = "";
						math_split(a, " ", false);
						/*if (mtemp.length > 1) {
							temp = a.split(" | ");
							if (temp.length > 1) {}
							else {
								a = "\"" + a + "\"";			
							}
						}*/
						set_var(system, args[0], a);
						args = [];
						compileJoin = "";
						cVar += 2;
						if (ctp[cVar] == "(") {
							cVar -= 1;
						}
						
					}
				}
			}
			else if (type == "if") {
				if (ctp[cVar] == "{") {
					compileJoin = "";
					cVar += 1;
					set_sys_var(system, 1, "bool");
					
				}
				if (ctp[cVar] == "}") {
					booleans.push(compileJoin);
					compileJoin = "";
					cVar += 1;
					set_sys_var(system, 1, "none");
				}
				if (ctp[cVar] == " ") {
					if (get_sys_var(system, 1) != "bool") {
						if (compileJoin == "then") {
							var temp;
							for (var var3 = 0; var3 < booleans.length; var3++) {
								temp = booleans[var3].split(" == ");
								if (temp.length > 1) {
									temp = get_var_vals(system, temp);
									if (temp[0] == temp[1]) {
										booleans[var3] = "True";
									}
									else {
										booleans[var3] = "False";
									}
								}
								else {
									temp = booleans[var3].split(" >= ");
									if (temp.length > 1) {
										temp = get_var_vals(system, temp);
										if (parseInt(temp[0]) >= parseInt(temp[1])) {
											booleans[var3] = "True";
										}
										else {
											booleans[var3] = "False";
										}
									}
									else {
										temp = booleans[var3].split(" <= ");
										if (temp.length > 1) {
											temp = get_var_vals(system, temp);
											if (parseInt(temp[0]) <= parseInt(temp[1])) {
												booleans[var3] = "True";
											}
											else {
												booleans[var3] = "False";
											}
										}
										else {
											temp = booleans[var3].split(" > ");
											if (temp.length > 1) {
												temp = get_var_vals(system, temp);
												if (parseInt(temp[0]) > parseInt(temp[1])) {
													booleans[var3] = "True";
												}
												else {
													booleans[var3] = "False";
												}
											}
											else {
												temp = booleans[var3].split(" < ");
												if (temp.length > 1) {
													temp = get_var_vals(system, temp);
													if (parseInt(temp[0]) < parseInt(temp[1])) {
														booleans[var3] = "True";
													}
													else {
														booleans[var3] = "False";
													}
												}
												else {
													temp = booleans[var3].split(" != ");
													if (temp.length > 1) {
														temp = get_var_vals(system, temp);
														if (temp[0] != temp[1]) {
															booleans[var3] = "True";
														}
														else {
															booleans[var3] = "False";
														}
													}
													else {
														
													}
												}
											}
										}
									}
								}
							}
							compileJoin = "";
							cVar += 1;
							if (booleans.indexOf("False") > -1) {
								type = "false";
							}
							else {
								type = "none";
							}
						}
						else {
							compileJoin = "";
							if (ctp[cVar + 1] != "{") {
								cVar += 1;
							}
						}
					}
				}
			}
		}
	}
	return args
}