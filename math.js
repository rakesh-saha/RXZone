window.onload = function () {
    quadratic_value = function(){
        var a = parseFloat(document.getElementById("a1").value);
        var b = parseFloat(document.getElementById("b1").value);
        var c = parseFloat(document.getElementById("c1").value);
        var d = b*b - 4*a*c;
        var res = (-b)/(2*a);

        if(d==0){
            document.getElementById("result1").value=res.toFixed(4);
        }
        else if(d<0){
            document.getElementById("result1").value="("+res.toFixed(4)+" + "+(-d/(2*a)).toFixed(4)+" i ) & ( "+res.toFixed(4)+" - "+(-d/(2*a)).toFixed(4)+" i)";
        }else{
            var x = parseFloat(res)+parseFloat((Math.sqrt(d))/(2*a));
            var y = parseFloat(res)-parseFloat((Math.sqrt(d))/(2*a));

            document.getElementById("result1").value=(x).toFixed(4)+" & "+(y).toFixed(4);
        }
    }
}
