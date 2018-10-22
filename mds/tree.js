let insertNode = function(node, newNode) {
    if(newNode.key < node.key) {
        if(node.left == null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if(node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode)
        }
    }
}
/**
 * 
 * @param {*} node  
 * @param {*} callback 
 */
let inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
    }
}

let preOrderTraverseNode = function(node, callback) {
    if(node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
} 
let postOrderTraverseNode = function(node, callback) {
    if(node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}
let minNode = function(node) {
    if(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node.key;
    }
    return null;
}
let maxNode = function(node) {
    if(node) {
        while(node && node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    return null;
}
let searchNode = function(node, key) {
    if(node === null) {
        return false;
    }
    if(key < node.key) {
        return searchNode(node.left, key);
    } else if(key > node.key) {
        return searchNode(node.right, key);
    } else {
        return true;
    }
}
let findMinNode = function(node) {
    while (node && node.left !== null) {
        node = node.left;
    }
    return node;
}
let removeNode = function(node, key) {
    if(node === null) {
        return  null;
    }
    if(key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
    } else if(key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    } else {
        // 第一种情况:一个叶节点
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // 第二种情况: 一个只能一个子节点的节点
        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        // 第三种情况： 一个有两个子节点的节点
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
    }
}
function BinarySearchTree() {
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root = null;
    this.insert = function(key) {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    // 中序遍历
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    }
    // 先序遍历
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }
    // 后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }
    this.min = function() {
        return minNode(root);
    }
    this.max = function() {
        return maxNode(root);
    }
    this.search = function(key) {
        return searchNode(root, key);
    }
    this.remove = function(key) {
        root = removeNode(root.key);
    }
}
function printNode(value) {
    console.log(value);
}
let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(11));