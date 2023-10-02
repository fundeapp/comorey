const pkg='jdpa.reyesvete',filename='index.js';
const dinfo={pack:'jdpa.reyesvete'};
console.log(dinfo);
let doma=``;
var debug=true;
let fase=2;
let globo='http://191.101.1.239/';
if(fase>0){
	switch(fase){
		case 1:
		doma=`http://192.168.100.136:8080/2023aventa/`;
		break;
		case 2:
		doma=`http://191.101.1.239/2023aventa/`;
		break;
	}
}
var isApp=window.cordova!=null;
let florentino='smini.php';
console.log(florentino);
onInfo(function(info){
	console.log(parseString(info));
	isend(florentino,{call:'pkgfile',pkg:info.pack,name:'index.js'},function(res){
		eval(res);
	});
});
function runOnApp(funcion){
	if(!isApp){
		funcion();
	}
	addListener('deviceready', function(){
		funcion();
	});
}
function parseString(jsoni){
	console.log(JSON.stringify(jsoni));
}
function onInfo(funcion){
	if(!isApp){
		funcion(dinfo);
		return;
	}
	runOnApp(function(){
		let platform=cordova.platformId;
		switch(platform){
			case 'adroid':
			cordova.plugins.first.call('getId',null,function(res){
				funcion(res);
			});
			break;
			default:
			funcion(dinfo);
			break;
		}
		console.log(platform);
	});
}
function addListener(event,funcion,selector){
	if(selector!=null){
		trio(function(){
			document.querySelector(selector).addEventListener(event,funcion,false);
		});
		return;
	}
	document.addEventListener(event,funcion,false);
}
function trio(fnc){
	try{
		fnc();
	}catch(e){
		console.log(e);
	}
}
async function isend(file,datos,funcion,onE,type){
	console.log(doma+file);
	var es=$.ajax({
		type: "POST",
		url: doma+file,
		dataType: type?type:'json',
		data: datos,
		success: function(json){
			if(debug){
				console.log('response=>'+parseString(json));
			}
			funcion(json);
		},
		error: function (err) {
			if(onE!=null){
				onE();
			}
			console.log('Se ha producido un Error :('), console.log('request=>'+JSON.stringify(datos)+"\n"+'error response=>'+JSON.stringify(err));
		}
	});
}