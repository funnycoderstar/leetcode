29.最小的k个数

30.连续子数组的最大和

31.整数中1出现的次数（从1到n整数中1出现的次数）

求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

32.把数组排成最小的数
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
本题关键点是制定排序规则，设计比较器；
排序规则如下：


若ab > ba 则 a > b，
若ab < ba 则 a < b，
若ab = ba 则 a = b；


例如：比较3和31时，'331' > '313'，所以返回结果是'3' > '31'。
根据指定排序规则对数组进行排序，然后从小到大拼接即为所求结果。

```js
function PrintMinNumber(numbers) {
    function compare(a, b) {
        const s1 = a + '' + b;
        const s2 = b + '' + a;
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) > s2.charAt(i)) {
                return 1;
            }
            if (s1.charAt(i) < s2.charAt(i)) {
                return -1;
            }
        }
        return 1;
    }
    numbers.sort(compare);
    let result = '';
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
```
33. 丑数
把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
## 思路
按顺序将丑数保存在数组中，然后求下一个丑数；
下一个丑数是由数组中某个丑数A * 2，B * 3，C * 5中的最小值得来的。
按照题目规定，第一个丑数是1，存入数组中；
第二个丑数为1*2，1*3，1*5三个中的最小值；
第三个丑数为2*2，1*3，1*5三个中的最小值，依次类推，求出第N个数组。
## 代码
```js
function GetUglyNumber_Solution(index) {
    if(index == 0) {
        return 0;
    }
    let uglyNum = [1];
    let factor2 = 0;
    let factor3 = 0;
    let factor5 = 0;
    for(let i = 1; i < index; i++) {
        uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
        if(uglyNum[i] === uglyNum[factor2] * 2) {
            factor2++;
        }
        if(uglyNum[i] === uglyNum[factor3] * 3) {
            factor3++;
        }
        if(uglyNum[i] === uglyNum[factor5] * 5) {
            factor5++;
        }
    }
    return uglyNum[index - 1];
}
```
34. 第一个只出现一次的字符
```js
function FirstNotRepeatingChar(str){
    if(str.length == 0) {
        return -1;
    }
    let obj = {};
    for(let i = 0;i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]].value++;
        } else {
            obj[str[i]] = {
                value: 1,
                index: i,
            }
        }
    }
    let result = Object.values(obj).find(item => item.value == 1);
    if(result) {
        return result.index
    } else {
        return -1;
    }
}
```
35.数组中的逆序对

