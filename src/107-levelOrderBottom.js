/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 二叉树的层序遍历要用到迭代法，设置一个队列queue（其实就是数组），把根节点加入队列中，当队列不会空时，出队列元素，然后把这个元素的子结点加入到队列中。
var levelOrderBottom = function(root) {
    var queue = [];
    var result = [];
    if (root !== null) {
      queue.push(root);
    }
    while(queue.length !== 0) {
      var level = [];
      var len = queue.length;
      for (var i = 0; i < len; i ++) {
        var currentNode = queue.shift();
        level.push(currentNode.val);
        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
      }
      result.push(level);
    }
    return result.reverse();
  };
  