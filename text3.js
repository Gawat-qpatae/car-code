var a;
var n=prompt("ادخل رقم الكود");
for(var i=1;i==n;i++)
 {
 // for(var j=p;j==i;)
   {
    document.write("P000"+0+"f ");
   }
   document.write("<br />");
 }

function Prime()
			{
				var i,flag=0,number;
				number = Number(document.getElementById("N").value);

				for(i=2; i <= number/2; i++)
				{
					if(number%i == 0)
					{
						flag = 1;
						break;
					}
				}
				if(flag == 0)
				{
					window.alert(number+"-The inputed number is Prime");
				}
				else
				{
					window.alert(number+"-The inputted number is not Prime");
				}
			}
			// continue with a label
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if ((i == 2) && (j == 2)) {
            console.log('continue to outer');
            continue outer;
        }
        console.log("[i:" + i + ",j:" + j + "]");
    }
}
