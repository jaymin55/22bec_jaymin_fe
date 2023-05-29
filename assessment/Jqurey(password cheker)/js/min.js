$(document).ready(function() {
    var pass       = $('#pass'); 
    var passwordsInfo   = $('#pass-info'); 
    
    passwordStrengthCheck(pass,passwordsInfo); // password check function
    
});
 
function passwordStrengthCheck(pass, passwordsInfo)
{
    // 5  words or more
    var WeakPass = /(?=.{5,}).*/;
    // whne one digit and small leter
    var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
    // whne one digit , small letter and upper letter
    var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
    
    
    $(pass).on('keyup', function(e) {
          
         if(StrongPass.test(pass.val()))
        {
            passwordsInfo.removeClass().addClass('strongpass').html("Strong");
        }  
        else if(MediumPass.test(pass.val()))
        {
            passwordsInfo.removeClass().addClass('goodpass').html("Good");
        }
        else
        {
            passwordsInfo.removeClass().addClass('weakpass').html(" Weak");
        }
    });
    
    
}