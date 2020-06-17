(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-解决冲突"}},[t._v("#")]),t._v(" Git 解决冲突")]),t._v(" "),a("p",[t._v("人生不如意之事十之八九，合并分支往往不会一帆风顺。")]),t._v(" "),a("p",[t._v("咱准备一个新的"),a("code",[t._v("feature1")]),t._v("分支，继续我们的新分支开发：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b feature1\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature1'")]),t._v("\n")])])]),a("p",[t._v("修改"),a("code",[t._v("readme.txt")]),t._v("最后一行，改为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Creating a new branch is quick AND simple.\n")])])]),a("p",[t._v("在"),a("code",[t._v("feature1")]),t._v("分支上提交：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme.txt // 添加暂存区\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第四个版本"')]),t._v(" // 添加版本库\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("feature1 94afac1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 第四个版本\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("切换到"),a("code",[t._v("master")]),t._v("分支：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch master // 切换分支\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),t._v("\nYour branch is ahead of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" commit.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push"')]),t._v(" to publish your "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" commits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Git还会自动提示我们当前"),a("code",[t._v("master")]),t._v("分支比远程的"),a("code",[t._v("master")]),t._v("分支要超前1个提交。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("master")]),t._v("分支上把"),a("code",[t._v("readme.txt")]),t._v("文件的最后一行改为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Creating a new branch is quick & simple.\n")])])]),a("p",[t._v("提交：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme.txt\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"和第四个版本解决冲突"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master 23150f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 和第四个版本解决冲突\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在，"),a("code",[t._v("master")]),t._v("分支和"),a("code",[t._v("feature1")]),t._v("分支各自都分别有新的提交，变成了这样：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919023000423040/0",alt:"git-br-feature1"}})]),t._v(" "),a("p",[t._v("这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge feature1 // 快速合并分支\nAuto-merging readme.txt\nCONFLICT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": Merge conflict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" readme.txt\nAutomatic merge failed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" fix conflicts and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" commit the result.\n")])])]),a("p",[t._v("果然冲突了！Git告诉我们，"),a("code",[t._v("readme.txt")]),t._v("文件存在冲突，必须手动解决冲突后再提交。"),a("code",[t._v("git status")]),t._v("也可以告诉我们冲突的文件：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nYour branch is ahead of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" commits.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push"')]),t._v(" to publish your "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" commits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nYou have unmerged paths.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fix conflicts and run "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git merge --abort"')]),t._v(" to abort the merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nUnmerged paths:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to mark resolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        both modified:   readme.txt\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们可以直接查看"),a("code",[t._v("readme.txt")]),t._v("的内容：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" readme.txt\nGit is a distributed version control system.\nGit is "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software distributed under the GPL.\nCreating a new branch is quick.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HEAD\nCreating a new branch is quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" simple.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nCreating a new branch is quick AND simple.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" feature1\n\n")])])]),a("p",[t._v("Git用"),a("code",[t._v("<<<<<<<")]),t._v("，"),a("code",[t._v("=======")]),t._v("，"),a("code",[t._v(">>>>>>>")]),t._v("标记出不同分支的内容，我们修改如下后保存：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Creating a new branch is quick AND simple.\n")])])]),a("p",[t._v("再提交：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme.txt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解决冲突后的第四个版本"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master bae428b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 解决冲突后的第四个版本\n")])])]),a("p",[t._v("现在，"),a("code",[t._v("master")]),t._v("分支和"),a("code",[t._v("feature1")]),t._v("分支变成了下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919023031831104/0",alt:"git-br-conflict-merged"}})]),t._v(" "),a("p",[t._v("用带参数的"),a("code",[t._v("git log")]),t._v("也可以看到分支的合并情况：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("online --abbrev-commit\nfatal: invalid --pretty format: online\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14498")]),t._v("@DESKTOP-PANJ2FE MINGW64 ~/Desktop/GitDemo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline --abbrev-commit\n*   bae428b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 解决冲突后的第四个版本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 94afac1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 第四个版本\n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 23150f2 和第四个版本解决冲突\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/\n* 894b6e5 第三个版本\n* fb74ee7 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin/master, origin/HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n* b516c2e 文件删除版本\n* d6e43ff 第二个版本\n* 685bd3d 第一个版本\n")])])]),a("p",[t._v("最后，删除"),a("code",[t._v("feature1")]),t._v("分支：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d feature1\nDeleted branch feature1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was 94afac1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);