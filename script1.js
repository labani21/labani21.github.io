var names=new Array();
names[0]="Josh";
names[1]="Labani";
names[2]="John";
names[3]="Paul";
names[4]="Harry";
names[5]="Joe";
names[6]="Lakshya";
names[7]="Ram";
names[8]="Subhra";
names[9]="jack";

for(var i=0 ;i<names.length ;i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}