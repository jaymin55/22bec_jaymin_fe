function calculate(){
    var a, b, c, d, e, f, g, sum, avg
     a = parseInt(document.getElementById('c').value)
     b = parseInt(document.getElementById('c++').value)
     c = parseInt(document.getElementById('db').value)
     d = parseInt(document.getElementById('html').value)
     e = parseInt(document.getElementById('css').value)
     f = parseInt(document.getElementById('php').value)
     g = parseInt(document.getElementById('cr').value)

     if(a>100 || b>100 || c>100 || d>100 || e>100 || f>100|| g>100 ){
        alert('enter correct value');
     }
     else{
        var total=a+b+c+d+e+f+g;
        document.getElementById('total').innerHTML=total;
        var percentage=total/7;
        document.getElementById('percentage').innerHTML=percentage;
     } 
     return false;
}
