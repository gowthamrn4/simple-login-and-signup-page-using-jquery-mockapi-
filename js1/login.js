var name="";
var password="";
$(document).ready(function(){
    
$("#submit").click(function(){
	$.ajax({
		type:"GET",
		url:"https://5b77c412b8599700144784ff.mockapi.io/api/v1/login",
		dataType:"json",
		success:function(result)
		{   
            name = $("#name").val();
            password = $("#password").val();
			for ( i = 0; i < result.length; i++) 
			{   
               if(result[i].name===name)
               {
                   if(result[i].password===password)
                   { 
                    window.location.href = "home.html";
                    }
                    else{
                   alert("Invaild Username or password");
               }
               }
               
			}
        }
    })
    });
});
function myFunction()
{
    var x =document.getElementById("#name").value;
    if(x=="")
    {
        alert("Invaild Value");
    }
}