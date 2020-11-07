var player1='player1';
var player2='player2';
function fun()
{
	setTimeout(function(){
        window.location.href = 'firstpage.html';
    }, 7000);	
}
function fun2()
{
	player1=document.getElementById("play1").value.trim();
    player2=document.getElementById("play2").value.trim();
           localStorage.setItem('player1',player1);
           localStorage.setItem('player2',player2);
		if(player1.length<1||player2.length<1 )
	{
		alert("fill all the fields");
	}
	else
	{
		window.location.href = 'playergame.html';
	}
}
var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
var a=0,x,b,c,count=0,flag=0,num=0;
var arr=new Array();
var num=localStorage.getItem("num");
function fun1()
{
	document.getElementById("player1").innerHTML=player1;
	document.getElementById("player2").innerHTML=player2;
	if(num%2!=0)
	{
	document.getElementById("play1").style.backgroundColor='red';
	document.getElementById("play2").style.backgroundColor='transparent';
	document.getElementById("tarun").innerHTML=player1;
	document.getElementById("om").innerHTML=player2;
	}
	else
	{
	document.getElementById("tarun").innerHTML=player2;
	document.getElementById("om").innerHTML=player1;
	document.getElementById("play2").style.backgroundColor='red';
	document.getElementById("play1").style.backgroundColor='transparent';
	}
	/*
	document.getElementById("player2").innerHTML=player2;
	document.getElementById("tarun").innerHTML=player1;
	document.getElementById("om").innerHTML=player2;
	document.getElementById('moviename').disabled=true;
	document.getElementById('submitcharacter').disabled=true;
	document.getElementById("characternameinput").disabled=true;
	*/
}

function fun3()
{
	a=document.getElementById('movienameinput').value.trim();
	b=a;
	if(a.length>=1)
	{
		document.getElementById('moviename').disabled=false;
	}
	else
	{
		document.getElementById('moviename').disabled=true;
	}
}
function fun4()
{
	x = document.getElementById("movienameinput");
	 if (x.type ==="text") {
    x.type = "password";
    document.getElementById('showmovie').innerHTML="show Movie";
    }
document.getElementById('showmovie').disabled=true;
 document.getElementById('moviename').disabled=true;
 document.getElementById('movienameinput').disabled=true;
 document.getElementById("characternameinput").disabled=false;
 fun6(a);
}
function fun5()
{
x = document.getElementById("movienameinput");
   if (x.type === "password") {
    x.type = "text";
    document.getElementById('showmovie').innerHTML="Hide Movie";
  } else {
  	document.getElementById('showmovie').innerHTML="Show Movie";
    x.type = "password";
  }
}
function fun6(a)
{
	a=a.toUpperCase();
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
	fun6(a);
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
   	console.log(ccount);
   	document.getElementById(ccount).style.textShadow='4px 4px 5px black';
   	if(count>8)
   	{   		
   		num++;
   		localStorage.setItem("num",num);
   		document.getElementById('modal').style.display="block";
   		if(num%2!=0)
   		{
   			b=b.toUpperCase();
   			document.getElementById('showresult').innerHTML=player2.toUpperCase()+" Wins"+"<br>"+b;
   		}
   		else
   		{
   			b=b.toUpperCase();
   			document.getElementById('showresult').innerHTML=player1.toUpperCase()+" Wins"+"<br>"+b;
   		}
   	}
   	console.log("error");
   }
   if(flag==0)
   {
   if(num%2!=0)
   		{
   			b=b.toUpperCase();
   			document.getElementById('showresult').innerHTML=player2.toUpperCase()+" Wins"+"<br>"+b;
   		}
   		else
   		{
   			b=b.toUpperCase();
   			document.getElementById('showresult').innerHTML=player1.toUpperCase()+" Wins"+"<br>"+b;
   		}
   	num++;
   	localStorage.setItem("num",num);
   document.getElementById('modal').style.display='block';
   }

}
function fun9()
{
	num=0;
	localStorage.setItem("num",num);
	window.location.href=("firstpage.html")
}