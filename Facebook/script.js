$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:20
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:20
            },
            emaill:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
            },
            day:{
                required:true

            },
            month:{
                required:true

            },
            year:{
                required:true

            },
            sex:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter your first name",
                minlength:"Enter minimun 4 characters"
            },
            sname:{
                required:"Enter your surname",
                minlength:"Enter minimun 4 characters"
            },
            emaill:{
                required:"Enter email address",
                
            },
            password:{
              required:"Enter password",
              
          }

        }
           
    })
    $("#loginform").validate({
        rules:{
            username:{
                required:true
            },
            passwordlog:{
                required:true
            }

        },
        messages:{
            username:{
                required:"Enter username" 
            },
            passwordlog:{
                required:"Enter password"
                
            }

        }
    })
})

