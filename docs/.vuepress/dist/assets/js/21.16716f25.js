(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{367:function(a,t,e){"use strict";e.r(t);var s=e(42),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"git-配置命令别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-配置命令别名"}},[a._v("#")]),a._v(" Git 配置命令别名")]),a._v(" "),e("p",[a._v("有没有经常敲错命令？比如"),e("code",[a._v("git status")]),a._v("？"),e("code",[a._v("status")]),a._v("这个单词真心不好记。")]),a._v(" "),e("p",[a._v("如果敲"),e("code",[a._v("git st")]),a._v("就表示"),e("code",[a._v("git status")]),a._v("那就简单多了，当然这种偷懒的办法我们是极力赞成的。")]),a._v(" "),e("p",[a._v("我们只需要敲一行命令，告诉Git，以后"),e("code",[a._v("st")]),a._v("就表示"),e("code",[a._v("status")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git config --global alias.st status\n")])])]),e("p",[a._v("好了，现在敲"),e("code",[a._v("git st")]),a._v("看看效果。")]),a._v(" "),e("p",[a._v("当然还有别的命令可以简写，很多人都用"),e("code",[a._v("co")]),a._v("表示"),e("code",[a._v("checkout")]),a._v("，"),e("code",[a._v("ci")]),a._v("表示"),e("code",[a._v("commit")]),a._v("，"),e("code",[a._v("br")]),a._v("表示"),e("code",[a._v("branch")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git config --global alias.co checkout\n$ git config --global alias.ci commit\n$ git config --global alias.br branch\n")])])]),e("p",[a._v("以后提交就可以简写成：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('$ git ci -m "bala bala bala..."\n')])])]),e("p",[e("code",[a._v("--global")]),a._v("参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用。")]),a._v(" "),e("p",[a._v("在"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536",target:"_blank",rel:"noopener noreferrer"}},[a._v("撤销修改"),e("OutboundLink")],1),a._v("一节中，我们知道，命令"),e("code",[a._v("git reset HEAD file")]),a._v("可以把暂存区的修改撤销掉（unstage），重新放回工作区。既然是一个unstage操作，就可以配置一个"),e("code",[a._v("unstage")]),a._v("别名：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git config --global alias.unstage 'reset HEAD'\n")])])]),e("p",[a._v("当你敲入命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git unstage test.py\n")])])]),e("p",[a._v("实际上Git执行的是：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git reset HEAD test.py\n")])])]),e("p",[a._v("配置一个"),e("code",[a._v("git last")]),a._v("，让其显示最后一次提交信息：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git config --global alias.last 'log -1'\n")])])]),e("p",[a._v("这样，用"),e("code",[a._v("git last")]),a._v("就能显示最近一次的提交：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git last\ncommit adca45d317e6d8a4b23f9811c3d7b7f0f180bfe2\nMerge: bd6ae48 291bea8\nAuthor: Michael Liao <askxuefeng@gmail.com>\nDate:   Thu Aug 22 22:49:22 2013 +0800\n\n    merge & fix hello.py\n")])])]),e("p",[a._v("甚至还有人丧心病狂地把"),e("code",[a._v("lg")]),a._v("配置成了：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git config --global alias.lg \"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"\n")])])]),e("p",[a._v("来看看"),e("code",[a._v("git lg")]),a._v("的效果：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919059728302912/0",alt:"git-lg"}})]),a._v(" "),e("p",[a._v("为什么不早点告诉我？别激动，咱不是为了多记几个英文单词嘛！")]),a._v(" "),e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),e("p",[a._v("配置Git的时候，加上"),e("code",[a._v("--global")]),a._v("是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。")]),a._v(" "),e("p",[a._v("配置文件放哪了？每个仓库的Git配置文件都放在"),e("code",[a._v(".git/config")]),a._v("文件中：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('$ cat .git/config \n[core]\n    repositoryformatversion = 0\n    filemode = true\n    bare = false\n    logallrefupdates = true\n    ignorecase = true\n    precomposeunicode = true\n[remote "origin"]\n    url = git@github.com:michaelliao/learngit.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "master"]\n    remote = origin\n    merge = refs/heads/master\n[alias]\n    last = log -1\n')])])]),e("p",[a._v("别名就在"),e("code",[a._v("[alias]")]),a._v("后面，要删除别名，直接把对应的行删掉即可。")]),a._v(" "),e("p",[a._v("而当前用户的Git配置文件放在用户主目录下的一个隐藏文件"),e("code",[a._v(".gitconfig")]),a._v("中：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ cat .gitconfig\n[alias]\n    co = checkout\n    ci = commit\n    br = branch\n    st = status\n[user]\n    name = Your Name\n    email = your@email.com\n")])])]),e("p",[a._v("配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。")]),a._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),e("p",[a._v("给Git配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。")])])}),[],!1,null,null,null);t.default=l.exports}}]);