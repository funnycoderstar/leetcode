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
var minDepth = function(root) {
    if(root == null) {
        return 0;
    }
    if(root.left == null && root.right == null) {
        return 1;
    }
    let leftDepth, rightDepth;
    if(root.left != null) {
        leftDepth = minDepth(root.left);
    } else {
        leftDepth = Number.MAX_VALUE;
    }
    if(root.right != null) {
        rightDepth = minDepth(root.right);
    } else {
        rightDepth = Number.MAX_VALUE;
    }
    return 1 + Math.min(leftDepth, rightDepth)
};

/**
 * 分析： 
 *  空树，最小深度为0 
 * 左右子树都为空，最小深度为1 
 * 左右子树不都为空，左右子树中有空树的情况，最小深度一定是在非空树中产生，因为最小深度定义为到最近叶子节点的深度。
 * 一旦左右子树有空的情况，这边的深度就可以置为正无穷，表示最小深度不可能再这里产生。然后分别计算左右子树的最小深度，使用递归策略。
 */