/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function LCS(str1, str2){
    var m = str1.length 
    var n = str2.length
    var dp = [new Array(n+1).fill(0)]; //第一行全是0
    for(var i = 1; i <= m; i++){ //一共有m+1行
        dp[i] = [0] //第一列全是0
        for(var j = 1; j <= n; j++){//一共有n+1列
            if(str1[i-1] === str2[j-1]){ 
                //注意这里，str1的第一个字符是在第二列中，因此要减1，str2同理
                dp[i][j] = dp[i-1][j-1] + 1 //对角＋1
            } else {
                 dp[i][j] = Math.max( dp[i-1][j], dp[i][j-1]) 
            }
        }
    } 
    return dp[m][n];
}
function printLCS(dp, str1, str2, i, j){
    if (i == 0 || j == 0){
        return "";
    }
    if( str1[i-1] == str2[j-1] ){
        return printLCS(dp, str1, str2, i-1, j-1) + str1[i-1];
    }else{
        if (dp[i][j-1] > dp[i-1][j]){
            return printLCS(dp, str1, str2, i, j-1);
        }else{
            return printLCS(dp, str1, str2, i-1, j);
        }
    }
}
//by司徒正美， 将目标字符串转换成正则，验证是否为之前两个字符串的LCS
function validateLCS(el, str1, str2){
   var re =  new RegExp( el.split("").join(".*") )
   console.log(el, re.test(str1),re.test(str2))
   return re.test(str1) && re.test(str2)
}

var shortestCommonSupersequence = function(str1, str2) {
    console.log(LCS(str1, str2));
};
console.log(shortestCommonSupersequence('abac', 'cab'));