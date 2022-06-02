// These functions open and close the contact form //
function openForm() {
    document.getElementById("myForm") .style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

        
        function validateemail()  
        {  
        var x=document.myform.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
          }  
        }  s[slideIndex-1].className += " active";

        
        //show and hide dropdown list item on button click  
        function show_hide() {  
           var click = document.getElementById("list-items");  
           if(click.style.display ==="none") {  
              click.style.display ="block";  
           } else {  
              click.style.display ="none";  
           }   
        }  

    
     
