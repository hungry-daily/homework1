function presentValue(fv,freq,rate,periods)
{return(fv/Math.pow((1+(rate/100/freq)),periods));}
function futureValue(pv,freq,rate,periods)
{return(pv*Math.pow(1+(rate/100/freq),periods));}
function annualizedReturn(fv,pv,years)
{return(fv-pv)/pv/years;}
function monthlyPayment(pv,freq,rate,periods)
{rate=rate/100/freq;var x=Math.pow(1+rate,periods);return(pv*x*rate)/(x-1);}
function annuity(fv,freq,rate,periods)
{rate=rate/100/freq;return(fv/((Math.pow(1+rate,periods)-1))*rate);}
function calcAmortPrincipal(pymt,freq,rate,periods)
{rate=rate/100/freq;return(pymt*(1-(1/Math.pow(1+rate,periods)))/rate);}
function toCurrency(num){num=Math.round(num*100)/100;var currstring=num.toString();if(currstring.match(/\./)){var curr=currstring.split('.');}else{var curr=[currstring,"00"];}
curr[1]+="00";curr[2]="";var returnval="";var length=curr[0].length;for(var i=0;i<2;i++)
curr[2]+=curr[1].substr(i,1);for(i=length;(i-3)>0;i=i-3){returnval=","+curr[0].substr(i-3,3)+returnval;}
returnval=curr[0].substr(0,i)+returnval+"."+curr[2];return(returnval);}
function regularDeposit(payment,freq,rate,periods)
{rate=rate/100/freq;return(payment*(Math.pow(1+rate,periods)-1)/rate*(1+rate));}