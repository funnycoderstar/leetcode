## 序列化二叉树
二叉树被记录成文件的过程叫做二叉树的序列化, 通过文件内容重建原来的二叉树过程叫做二叉树反序列化
这里是通过先序遍历来实现序列化和反序列化过程(先输出当前节点, 再输出左节点, 最后输出右节点)
序列化的思路:
首先加上序列化的结果字符串为str, 初始时str='', 先遍历二叉树, 如果遇到null节点, 就在str的末尾加上"#!", "#"表示这个节点为空, 节点值不存在, "!"表示一个值结束; 如果遇到不为空的节点, 假设值为3, 就在str的末尾加上"3!";

```js
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
let arr = [];
function Serialize(pRoot){
    if(pRoot == null) {
        arr.push('a');
    } else {
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
}
function Deserialize(s){
    let node = null;
    if(arr.length < 1) {
        return null;
    }
    let number = arr.shift();
    if(typeof number == 'number') {
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}
```

## [二叉搜索树的第k个结点](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&tqId=11215&rp=3&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

## 思路
二叉搜索树按照中序遍历的顺序打印出来正好就是排序好的顺序,所以按照中序遍历顺序找到第K个节点就是结果

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
    if (k <= 0) {
        return null;
    }
    // 计数器
    let count = 0;
    function Knodes(pRoot, k) {
        if (pRoot !== null) {
            let node = Knodes(pRoot.left, k);
            if (node !== null) {
                return node;
            }
            count++;
            // 中序遍历寻找第k个
            if(count === k) {
                return pRoot;
            }
            node = Knodes(pRoot.right, k);
            if(node !== null) {
                return node;
            }
        }
        return null;
    }
    return Knodes(pRoot, k);
}
```