var eurovals=new Object();eurovals.FRF=6.559;eurovals.ATS=13.7603;eurovals.PTE=200.482;eurovals.ESP=166.386;eurovals.BEF=40.3399;eurovals.NLG=2.20371;eurovals.FIM=5.94573;eurovals.DEM=1.95583;eurovals.IEP=0.78756;eurovals.ITL=1936.27;eurovals.LUF=40.3399;eurovals.GRD=340.75;function calculate(){var l=document.currcalc.from_tkc;var k=document.currcalc.to_tkc;var c=l[l.selectedIndex].text;var i=k[k.selectedIndex].text;var d;var a;var j=document.currcalc.translation1.value;var h=document.currcalc.translation2.value;var f=document.currcalc.translation3.value;if(c.match(/\(EUR\)/)!=null){var o=i.split("(");var n=o.length-1;var p=o[n].match(/(FRF|ATS|PTE|ESP|BEF|NLG|FIM|DEM|IEP|ITL|LUF|GRD)/);if(p!=null){d=1;a=eurovals[p[0]]}}if(i.match(/\(EUR\)/)!=null){var e=c.split("(");var b=e.length-1;var p=e[b].match(/(FRF|ATS|PTE|ESP|BEF|NLG|FIM|DEM|IEP|ITL|LUF|GRD)/);if(p!=null){a=1;d=eurovals[p[0]]}}if(d==null&&a==null){d=price[l[l.selectedIndex].value];a=price[k[k.selectedIndex].value]}if((d<0)||(d=="")||isNaN(d)||(a<0)||(a=="")||isNaN(a)){alert(j);return false}var g=document.currcalc.amount.value;if((g=="")||isNaN(g)||(g==0)||(g<1)){alert(h);document.currcalc.amount.focus();return false}var m=/,/g;g=g.replace(m,"");ShowResult(d,a,g)}function ShowResult(e,c,f){var i=f*c/e;var h=document.currcalc.from_tkc;var g=document.currcalc.to_tkc;var d=document.currcalc.translation.value;var b='<span class="style4">'+f+" "+h.options[h.selectedIndex].text+" = "+round(i)+" "+g.options[g.selectedIndex].text+"</span>";if((navigator.appName.indexOf("Netscape")!=-1)&&(parseInt(navigator.appVersion)==4)){var a=document.layers.crncyres2.document;a.open();a.write(b);a.close()}else{if((navigator.appName.indexOf("Microsoft")!=-1)||(parseInt(navigator.appVersion)>=5)){document.getElementById("crncyres").innerHTML=b}else{alert(errmsg3)}}}function round(a){if(a<200000){return Math.round(a*10000)/10000}else{if(a<20000000){return Math.round(a*100)/100}else{return Math.round(a)}}}function NS47_addlines(){var a;if((navigator.appName.indexOf("Netscape")!=-1)&&(parseInt(navigator.appVersion)==4)){for(a=0;a<10;a++){document.write("<br>")}}}function loadResults(){if((navigator.appName.indexOf("Netscape")!=-1)&&(parseInt(navigator.appVersion)==4)){document.write('<DIV ID="crncyres2"></DIV>')}else{document.write('<DIV ID="crncyres"></DIV>')}};