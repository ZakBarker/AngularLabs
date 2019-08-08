$( document ).ready(function() {
    $('#loginform').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            name : $("#name").val(),
            pass : $("#pass").val()
        }
        $.ajax({
            type : "POST",
            contentType : 'application/json',
            url : window.location + 'api/login',
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                if(customer.valid == true) {
                    $('#loginform').addClass('success');
                    $('#errormsg').removeClass('showmessage');
                    $('#errormsg').addClass('hidemessage');
                }else{
                    $('#loginform').removeClass('success');
                    $('#errormsg').removeClass('hidemessage');
                    $('#errormsg').addClass('showmessage');
                }
                $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Username: " + customer.name + "</br>" + "Password: " + customer.pass + "</br>" + "Valid User: " + customer.valid + "</p>");
            },
            error : function(e){
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
        resetData();

        function resetData(){
            $('#name').val("");
            $('#pass').val("");
        }
    }
});