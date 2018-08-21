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
  