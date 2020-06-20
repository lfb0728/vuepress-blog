(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{372:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-删除文件"}},[t._v("#")]),t._v(" Git 删除文件")]),t._v(" "),a("p",[t._v("首先，我们在工作区添加一个remove.txt文件。并且把这个文件添加到版本库中。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add . // 把文件中所有的文件添加到暂存区\ngit commit -m "文件删除版本"\n')])])]),a("p",[t._v("可以通过文件管理器删除没有的文件，或者使用rm命令删除文件：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" remove.txt // 删除文件\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges not staged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add/rm <file>..."')]),t._v(" to update what will be committed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git restore <file>..."')]),t._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        deleted:    remove.txt.txt\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("如果删错了，想恢复文件执行git restore <文件>就可以恢复了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git restore remove.txt.txt\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("如果是使用git "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 删除文件，会自动把文件添加到暂存区，\n这时候想要恢复文件就要执行git restore --staged "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 把文件恢复到工作区，\n然后在执行git restore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 把文件从工作区中撤回出来。\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" remove.txt.txt // 删除文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove.txt.txt'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status // 查看状态\nOn branch master\nChanges to be committed:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git restore --staged <file>..."')]),t._v(" to unstage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        deleted:    remove.txt.txt\n        \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" restore --staged remove.txt.txt  // 从暂存区恢复到工作区\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges not staged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add/rm <file>..."')]),t._v(" to update what will be committed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git restore <file>..."')]),t._v(" to discard changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        deleted:    remove.txt.txt\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" restore remove.txt.txt // 把文件从工作区中撤销修改\n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nnothing to commit, working tree clean\n\n")])])]),a("p",[t._v("这时文件就恢复了。")]),t._v(" "),a("p",[t._v("总结一下：")]),t._v(" "),a("p",[t._v("​\t\t可以从文件管理器中删除文件，也可以使用rm删除文件，或者使用git rm删除文件。")]),t._v(" "),a("p",[t._v("​\t\t想要恢复文件，参考上一节的撤销修改就可以了。")]),t._v(" "),a("p",[t._v("​\t\t未加入到暂存区或者版本库中的文件，删除了是找不回来的，只要加入到了版本库中的文件，再也不用怕找不回来了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);