$("#formValidation").validate({
    rules:{
        name:{
           minlength:4 
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:10
        },
    },
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Name at least 4 characters"
        },
        email:"Please enter your email",
        phone:"Please enter your phone number",
        subject:"Please enter your phone number",
        formMessage:"Enter your message"
    },


    submitHandler: function(form) {
      form.submit();
      window.location.href="success.html";
    }
   });

