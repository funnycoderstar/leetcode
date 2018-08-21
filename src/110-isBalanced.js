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