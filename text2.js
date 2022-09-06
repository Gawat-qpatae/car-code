function msg(){  
 alert("Hello Codcar");  
} 
function msg(){  
    open("https://gawad.com/id=Cod-car");  
    }  
    function printvalue(){  
  var name=document.form1.name.value;  
  alert("Welcome: "+name);  
  }  
  var a;
var n=prompt("Enter a number for the no. of rows in a pattern");
for(var i=1;i<=n;i++)
 {
  for(var j=1;j<=i;j++)
   {
    document.write("0"+j+" ");
   }
   document.write("<br />");
 }
•  If the argument is  +0, the result is  +0. • 
 If the argument is  −0, the result is  −0. 15.8.2.4 15.8.2.5 15.8.2.6 atan(x)
  Returns  an implementation-dependent approximation to  the arc tangent of  the argument. The result is expressed in radians and ranges from  −π/2 to +π/2. •  
  If the argument is  NaN, the result is  NaN. •  If the argument is  +0, the result is  +0. •
    If the argument is  −0, the result is  −0. •  
  If the argument is  +∞, the result is an implementation-dependent approximation to +π/2. •  
  If the argument is  −∞, the result is an implementation-dependent approximation to  −π/2. atan2(y, x) Returns  an implementation-dependent approximation to  the arc tangent of 
   the quotient  y/x  of  the arguments y  and  x,  where  the signs  of  the arguments  are used to determine the quadrant  of  the result. Note that it is intentional
    and  traditional for the two-argument arc tangent function that the argument named  y 
    be first  and the argument named  x  be second. The result is expressed in radians and ranges from  −π  to +π. •
     If either argument is  NaN, the result is  NaN. •  If  y>0  and  x  is  +0, the result is an implementation-dependent approximation to  +π/2. •  If  y>0  and  x  is  −0, the result is an implementation-dependent approximation 
    to  +π/2. •  If  y  is  +0  and  x>0, the result is  +0. •  If  y  is  +0  and  x  is  +0, the result is  +0. •  If  y  is  +0  and  x  is  −0, the result is an implementation-dependent approximation to  +π. •  
    If  y  is  +0  and  x<0, the result is an implementation-dependent approximation to  +π. •  If  y  is  −0  and  x>0, the result is  −0. • 
     If  y  is  −0  and  x  is  +0, the result is  −0. •  If  y  is  −0  and  x  is  −0, the result is an implementation-dependent approximation to   −π. •  
     If  y  is  −0  and  x<0, the result is an implementation-dependent approximation to   −π. •  If  y<0  and  x  is  +0, the result is an implementation-dependent approximation to   −π/2. •  
     If  y<0  and  x  is  −0, the result is an implementation-dependent approximation to   −π/2. •  If  y>0  and  y  is finite and  x  is  +∞, the result is  +0. •  If  y>0  and  y  is finite and  x  is  −∞, the result 
     if an implementation-dependent approximation to  +π. •  If  y<0  and  y  is finite and  x  is  +∞, the result is  −0. • 
      If  y<0  and  y  is finite and  x  is  −∞, the result is an implementation-dependent approximation to   −π. • 
       If  y  is  +∞  and  x  is finite, the result is an implementation-dependent approximation to  +π/2. •  
      If  y  is  −∞  and  x  is finite, the result is an implementation-dependent approximation to   −π/2. •  
      If  y  is  +∞  and  x  is  +∞, the result is an implementation-dependent approximation to  +π/4. • 
       If  y  is  +∞  and  x  is  −∞, the result is an implementation-dependent approximation to  +3π/4. • 
       If  y  is  −∞  and  x  is  +∞, the result is an implementation-dependent approximation to   −π/4. •  
      If  y  is  −∞  and  x  is  −∞, the result is an implementation-dependent approximation to   −3π/4. ceil(x) Returns the smallest (closest to  −∞)  number value that is not less 
      than the argument 
      and  is equal to  a mathematical integer. If the argument is already an integer, the result is the argument itself. • 
       If the argument is  NaN, the result is  NaN. •  If the argument is  +0, the result is  +0. •  If the argument is  −0, the result is  −0. •  
       If the argument is  +∞, the result is  +∞. •  
       If the argument is  −∞, 
       the result is  −∞. •  
       If the argument is less than  0  but greater than  -1, the result is  −0. The value of  Math.ceil(x)  is the same as the value of  -Math.floor(-x).
