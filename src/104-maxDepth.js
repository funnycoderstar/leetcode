/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 采用递归，如果当前节点为空，返回0，如果不为空，返回 1 + 左右子节点的最大深度。
var maxDepth = function(root) {
    if(root == null) {
        return 0;
    } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth)
    }
};