import React from 'react'

const Admin = () => {

    const  perm=(str)=> {
        var result = [];
        if (str.length <= 8) {
          if (str.length === 1) {
            result.push(str);
            return result;
          }
          for (var i = 0; i < str.length; i++) {
            var charsLeft = str.substring(0, i) + str.substring(i + 1);
            var innerPermutations = perm(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
              result.push(str[i] + innerPermutations[j]);
            }
          }
         
          return result;
        }
        return "too many permutations!it's gonna take  along time,almost an infinit loop  ";
      }
      console.log(perm("rafikah")[Math.floor(Math.random()*1000)])
  return (
    <div>
      
    </div>
  )
}

export default Admin
