function getRootCount(root) {
    if (root === null) {
        return 0;
    }
    return 1 + getRootCount(root.left) + getRootCount(root.right);
}
