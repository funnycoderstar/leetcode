[106.从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

## 思路
后序遍历, 最后一个值肯定为根节点, 

## 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder || inorder.length == 0) {
        return null;
    }
    let treeNode = new TreeNode(postorder[postorder.length - 1]);
    let i = inorder.indexOf(postorder[postorder.length - 1]);
    treeNode.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
    treeNode.right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));
    return treeNode;
};
```
[105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

## 思路

## 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder || inorder.length == 0) {
        return null;
    }
    let treeNode = new TreeNode(preorder[0]);
    let i = inorder.indexOf(preorder[0]);
    treeNode.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    treeNode.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return treeNode;
};
```
[889. 根据前序和后序遍历构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

## 思路
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solution/

```js

const constructFromPrePost = (pre, post) => {
    const { length } = pre;
    if (length === 0) return null;
    const root = new TreeNode(pre[0]);
    const index = post.indexOf(pre[1]);

    root.left = constructFromPrePost(pre.slice(1, index + 2), post.slice(0, index + 1));
    root.right = constructFromPrePost(pre.slice(index + 2, length), post.slice(index + 1, length - 1));
  
    return root;
  };
```

## LRU缓存

```js
class DoubleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 链表头部插入
     * 1.如果头部和尾部都存在, 则直接在头部之前插入
     *     修改原来head的prev指向当前node, node的next指向原先的head, node的prev设置为null修改head为当前node
     * 2.如果头部或尾部不存在, 则设置当前node为head和tail
     *     node的next指向null, node的prev设置为nul
     */
    unshift(node) {
         
        if (this.head && this.tail) {
            node.prev = null;
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            node.prev = node.next = null;
            this.head = this.tail = node;
        }

        this.length++;
        return node;
    /**
     * 链表尾部删除
     * 1.判断tail是否存在
     * 2.判断head和tail是否相等
     *    相等: this.head = this.tail = null;
     *    不相等: this.tail.prev.next = null; this.tail = this.tail.prev;
     */
    pop() {
        if (this.tail) {
            const node = this.tail;
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            }
            this.length--;
            return node;
        }
    }
    /**
     * 删除具体的某个节点
     * 1.node等于head
     * 2.node等于tail
     * 3.node即不等于head, 也不等于tail
     */
    remove(node) {
        if (node !== this.head && node !== this.tail) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        this.length--;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.list = new DoubleLinkList();
        this.map = new Map();
    }

    get(key) {
        let node = this.map.get(key);
        if (node) {
            this.list.remove(node);
            this.list.unshift(node);
            return node.value;
        } else {
            return -1;
        }
    }

    put(key, value) {
        let node = this.map.get(key);
        if (node) {
            node.value = value;
            this.list.remove(node);
            this.list.unshift(node);
        } else {
            node = { key, value };
            this.list.unshift(node);
            this.map.set(key, node);
            if (this.list.length > this.capacity) {
                const tail = this.list.pop();
                this.map.delete(tail.key);
            }
        }
    }
}
```



