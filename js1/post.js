var data = {
    collage:{
        ug:{
             address:{

             }
        },
        pg:{
              address:{

              }
        }

    }
    
}
var list;
function myFunction()
    {
    text ="";
    data.name=document.getElementById("name").value;
    data.age=document.getElementById("age").value;
    data.collage.ug.ugname=document.getElementById("ugname").value;
    data.collage.ug.mark1=document.getElementById("mark1").value;
    data.collage.ug.address.city=document.getElementById("city").value;
    data.collage.ug.address.state=document.getElementById("state").value;
    data.collage.pg.pgname=document.getElementById("pgname").value;
    data.collage.pg.mark=document.getElementById("mark").value;
    data.collage.pg.address.city1=document.getElementById("city1").value;
    data.collage.pg.address.state1=document.getElementById("state1").value;

    text +="<br>"+data.name+"<br>"+data.age+"<br>"+data.collage.ug.ugname+"<br>"+data.collage.ug.mark1+"<br>"+data.collage.ug.address.city+"<br>"+data.collage.ug.address.state+"<br>"+
    data.collage.pg.pgname+"<br>"+data.collage.pg.mark+"<br>"+data.collage.pg.address.city1+"<br>"+data.collage.pg.address.state1;
    document.getElementById("view").innerHTML = text;
    console.log(data);
    }
