module.exports = {
    title: 'JavaScript实现的一些算法题', 
    description: 'JavaScript实现的一些算法题',
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.wangyaxing.cn/icon-128x128.png' }],
    ],
    themeConfig: {
        nav: [
            { text: 'home', link: '/' },
            { text: '算法基础知识', link: '/basic/' },
            { text: 'leetcode', link: '/leetcode/' },
            { text: '剑指offer', link: '/Sword_offer/' },
            { text: 'Github', link: 'https://github.com/funnycoderstar/leetcode' },
        ],
        sidebar: {
            '/basic/': [
                {
                    title: '算法基础知识',
                    collapsable: true,
                    children: [
                        ['binarySearchTree', '二叉搜索树'],
                        ['binaryTree', '树'],
                        ['BitwiseOperators', '按位操作符'],
                    ]
                }
                
            ],
            '/leetcode/': [
                {
                    title: 'leetcode',
                    collapsable: true,
                    children:[
                        ['20.md', '20. 有效的括号'],
                        ['32', '32. 最长有效括号'],
                        ['1021', '1021. 删除最外层的括号'],
                        ['11', '11. 盛最多水的容器'],
                        ['42', '42. 接雨水'],
                        ['1094-carPooling', '1094. 拼车'],
                        ['1104-distributeCandies', '1104. 分糖果 II'],
                    ],
                }
            ],
            '/Sword_offer/': [
                {
                    title: '剑指offer',
                    collapsable: true,
                    children:[
                        ['1', '1.二维数组中的查找'],
                        ['2', '2.替换空格'],
                        ['3', '3.从尾到头打印链表'],
                        ['4', '4.重建二叉树'],
                        ['5', '5.用两个栈实现队列'],
                        ['6', '6.旋转数组的最小数字'],
                        ['7', '7.斐波那契数列I'],
                    ],
                }
            ],

        }
    }
}