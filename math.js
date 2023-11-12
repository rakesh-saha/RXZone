window.onload = function () {
    quadratic_value = function(){
        var a = parseFloat(document.getElementById("a1").value);
        var b = parseFloat(document.getElementById("b1").value);
        var c = parseFloat(document.getElementById("c1").value);
        var d = b*b - 4*a*c;
        var res = (-b)/(2*a).toFixed(4);
        res=res.toFixed(4);

        if(d==0){
            document.getElementById("result1").value=res;
        }
        else if(d<0){
            document.getElementById("result1").value="("+res+" + "+(-d/(2*a)).toFixed(4)+" i ),( "+res+" - "+(-d/(2*a)).toFixed(4)+" i)";
        }else{
            var im = (Math.sqrt(d))/(2*a);
            im=im.toFixed(4);

            document.getElementById("result1").value=(res+im)+" , "+(res-im);
        }
        //console.log("Hello world!");
    }
}