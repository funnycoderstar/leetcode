/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 判断给的数是不是平衡二叉树，平衡的定义是指任意节点的左右子树高度相差不超过1。
// 一个递归方法，返回树的高度，如果左右子树高度相差超过1则返回-1。
function treeHeight(root) {
    if(root == null) {
        return 0;
    }
    if(root.left === null && root.right === null) {
        return 1;
    }
    let leftH = treeHeight(root.left);
    let rightH = treeHeight(root.right);
    if(leftH === -1 || rightH === -1) {
        return -1;
    }
    if(Math.abs(leftH - rightH) > 1) {
        return -1;
    }
    return Math.max(leftH, rightH) + 1;
}
var isBalanced = function(root) {
    return treeHeight(root) !== -1;
};