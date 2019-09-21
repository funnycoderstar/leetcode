const foreignAddressReg = /^[a-zA-Z0-9_\s!#\$%\^&\*\(\)\-\+=\.,;:]+$/; // 英文站限制输入：英文、数字、字符
const chineseAddressReg = /^[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\u4e00-\u9fa5_a-zA-Z0-9\s!@#$%\^&\*\(\)\-\+=\.,;:]+$/; // 中文站限制输入 中文、英文、数字、字符： 。 ；  ， ： “ ”（ ） 、 ？ 《 》
const chineseAddressMarkReg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
const testReg = /^[a-zA-Z0-9_\s!#\$%\^&\*\(\)\-\+=\.,;:！，。；/
]+$/; // 英文站限制输入：英文、数字、字符

let a = '哈哈哈';
let b = 'test,,';
let c = '哈哈哈111，，，';
let d = '，，，，？。';
let e = '！，。；';


console.log(chineseAddressReg.test(a));
console.log(chineseAddressReg.test(b));
console.log(chineseAddressReg.test(c));
console.log(chineseAddressReg.test(d));
console.log(testReg.test(e));
