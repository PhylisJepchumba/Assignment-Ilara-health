function leastCommonMultiple(n1, n2) {
    if ((typeof n1 !== 'number') || (typeof n2 !== 'number')) 
     return false;
   return (!n1 || !n2) ? 0 : Math.abs((n1 * n2) / gcdtwonumbers(n1, n2));
 }
 
 function gcdtwonumbers(n1, n2) {
   n1 = Math.abs(n1);
   n2 = Math.abs(n2);
   while(n2) {
     var t = n2;
     n2 = n1 % n2;
     n1 = t;
   }
   return n1;
 }
 console.log(leastCommonMultiple(4,78));