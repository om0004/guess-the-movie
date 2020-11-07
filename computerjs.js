var player='player';
var a=0,x,b,c,y,count=0,flag=0,num=0;
var arr=new Array();
var mix=['dabangg','raajneeti','my name is khan','tees maar khan','kites','anjaana anjaani','love aaj kal','wanted','de dana dan','kaminey','chandni chowk to china','kabhi alvida naa kehna','rang de basanti','phir hera pheri','avengers','black panther','inception','frozen','fast and furious','bohemian rhapsody','parasite','the girl next door','american pie','iron man','the act of killing','matrix','wolf of wall street','pirates of the caribbean','the shawshank redemption','bloodshot','marjaavaan','gangs of wasseypur','knives out','the godfather','the perks of being a wallflower','titanic','enola holmes','nishabdham','forrest gump','thugs of hindustan','Race3','Kesari','dil bechara','street dancer 2','Ram Gopal Varma Ki Aag','Bombay Velvet','shootout at lokhandwala','sahoo','22 jump street','happy death day'];
var boll=['dabangg','raajneeti','my name is khan','tees maar khan','kites','anjaana anjaani','love aaj kal','wanted','de dana dan','kaminey','chandni chowk to china','kabhi alvida naa kehna','rang de basanti','phir hera pheri','marjaavaan','gangs of wasseypur','thugs of hindustan','Race3','Kesari','dil bechara','street dancer 2','Ram Gopal Varma Ki Aag','Bombay Velvet','shootout at lokhandwala','sahoo'];
var holl=['avengers','black panther','inception','frozen','fast and furious','bohemian rhapsody','parasite','the girl next door','american pie','iron man','the act of killing','matrix','wolf of wall street','pirates of the caribbean','the shawshank redemption','bloodshot','knives out','the godfather','the perks of being a wallflower','titanic','enola holmes','nishabdham','forrest gump','22 jump street','happy death day'];
function fun2()
{
	player=document.getElementById("play1").value.trim();
           localStorage.setItem('player',player);
		if(player.length<1)
	{
		alert("fill all the fields");
	}
	else
	{
		window.location.href = 'computergame.html';
	}
}
var player=localStorage.getItem("player");
function fun1()
{

	document.getElementById("om").innerHTML=player;
	document.getElementById('characternameinput').disabled=true;
	document.getElementById('submitcharacter').disabled=true;
	document.getElementById('submitchoice').disabled=true;
}
function fun3()
{
    b=document.getElementById('choice').value;
	if(b==="Choose Mode")
	{
		document.getElementById('characternameinput').disabled=true;
		document.getElementById('submitcharacter').disabled=true;
		document.getElementById('submitchoice').disabled=true;

	}
	else if (b=="mix")
	{
		document.getElementById('characternameinput').disabled=false;
		document.getElementById('submitcharacter').disabled=false;
		document.getElementById('choice').disabled=true;
		document.getElementById('submitchoice').disabled=true;
		movies(b);
	}
	else if (b=="bollywood")
	{
		document.getElementById('characternameinput').disabled=false;
		document.getElementById('submitcharacter').disabled=false;
		document.getElementById('submitchoice').disabled=true;
		document.getElementById('choice').disabled=true;
		movies(b);
	}
	else if (b=="hollywood")
	{
		document.getElementById('characternameinput').disabled=false;
		document.getElementById('submitcharacter').disabled=false;
		document.getElementById('submitchoice').disabled=true;
		document.getElementById('choice').disabled=true;
		movies(b);
	}
}
function movies(ab)
{
	if(ab==='mix'){
		var aa=Math.floor((Math.random()*50));
		a=mix[aa].trim();
		a=a.toUpperCase();
		y=a;
		fun4(a);
	}
	else if(ab==='bollywood'){
		var aa=Math.floor((Math.random()*25));
		a=boll[aa].trim();
		a=a.toUpperCase();
		y=a;
		fun4(a);
	}
	else if(ab==='hollywood')
	{
		var aa=Math.floor((Math.random()*25));
		a=holl[aa].trim();
		a=a.toUpperCase();
		y=a;
		fun4(a);
	}
}
function fun4(a)
{
		
	if(a.length>0)
	{	
    var li=document.createElement('li');
    var first=a.slice(0,1);
    a=a.slice(1);
	if(first=='A'||first=='E'||first=='I'||first=='O'||first=='U')
	{li.innerHTML=first;
		arr.push(0);}
		else if(first==' ')
		{
			li.innerHTML='--';
		arr.push(0);
		}
    else
    {
    	li.innerHTML="__";
    	arr.push(first);
    	flag++;
    }
    movie.append(li);
	fun4(a);
	}
	
}
function fun5(c)
{
	if(c==="choose")
	{
			document.getElementById('submitchoice').disabled=true;
	}
	else
	{
		document.getElementById('submitchoice').disabled=false;
	
	}
}
function fun7()
{
	c=document.getElementById('characternameinput').value.trim();
	c=c.toUpperCase();
	if(c.length==1)
	{
		document.getElementById('submitcharacter').disabled=false;
	}
	else
	{
		document.getElementById('submitcharacter').disabled=true;
	}
}

function fun8()
{
	document.getElementById('characternameinput').value='';
	document.getElementById('submitcharacter').disabled=true;
	if(arr.indexOf(c)!=-1)
	{
	while(arr.indexOf(c)!=-1)
	{
		document.getElementById("movie").children[arr.indexOf(c)].innerHTML=c;
		arr[arr.indexOf(c)]=0;
		flag--;
	}
   }
   else
   {
   	count++;
   	var ccount='_'+count;
   	document.getElementById(ccount).style.textShadow='4px 4px 5px black';
   	if(count>8)
   	{   		
   		num++;
   		localStorage.setItem("num",num);
   		document.getElementById('modal').style.display="block";
   		document.getElementById('showresult').innerHTML="Computer Wins"+"<br>"+y;
   	}
   }
   if(flag==0)
   {
   	document.getElementById('showresult').innerHTML=player.toUpperCase()+" Wins"+"<br>"+y;
     document.getElementById('modal').style.display='block';
   }

}
function fun9()
{
	num=0;
	localStorage.setItem("num",num);
	window.location.href=("firstpage.html")
}