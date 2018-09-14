/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let arr = [];
function Tree(root) {
    if(root === null) {
        return;
    } 
    if(root.val) {
        arr.push(val);
    }
    Tree(root.left, root.right);
}
function buildBt2(nodes, arr) {
    index = 0;                              //索引从0开始
    //循环建立二叉树子节点的引用
    while(index < len) {
        var rightIndex = 2 * index+1;             //当前节点右孩子索引
        //给当前节点添加左孩子
        nodes[index].left= null;
        //给当前节点添加右孩子
        nodes[index].right = arr[rightIndex];
        index++;
    }
    return nodes;
}
var increasingBST = function(root) {
    Tree();
    arr.sort(function(a, b) {
        return a - b;
    });
    let nodes = new TreeNode()；
    return buildBt2(nodes， arr);
};