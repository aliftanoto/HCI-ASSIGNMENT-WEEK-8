$("#formValidation").validate({
    rules: {
        name:{
            required: true,
            minlength: 2
        },
        gmail:{
            required: true,
            email:true
        },
        number:{
            required: true,
            minlength: 10,
            maxlength: 13,
        }
    },
    messages:{
        name:{
            required:"enter your name",
            minlength:"enter at least 2 characters"
        },
        gmail:{
            required:"enter your email",
            email:"enter a valid email"
        },
        number:{
            required:"enter your phone number",
            minlength:"enter at least 10 numbers",
            maxlength:"enter maximum 13 numbers"
        }
    },
    submitHandler: function(form) {
      form.submit();
    }
   });