fanfou = new Object,
fanfou.Timeline = function() {
    this.server = "https://api.fanfou.com",
    "undefined" == typeof fanfou_name ? this.name = "": this.name = fanfou_name,
    "undefined" == typeof fanfou_count || isNaN(fanfou_count) ? this.count = 20 : this.count = parseInt(fanfou_count),
    "" == this.name ? this.timeline = "public": "undefined" == typeof fanfou_timeline || "friends" != fanfou_timeline && "public" != fanfou_timeline ? this.timeline = "user": this.timeline = fanfou_timeline
},
fanfou.Timeline.prototype = {
    getDate: function(e) {
        var t = e.split(" "),
        e = t[1] + " " + t[2] + ", " + t[5] + " " + t[3],
        a = new Date,
        n = Date.parse(e) - 60 * a.getTimezoneOffset() * 1e3;
        return new Date(n)
    },
    fullDate: function(e) {
        return e.getFullYear() + "-" + (e.getMonth() >= 9 ? "": "0") + (e.getMonth() + 1) + "-" + (e.getDate() > 9 ? "": "0") + e.getDate() + " " + (e.getHours() > 9 ? "": "0") + e.getHours() + ":" + (e.getMinutes() > 9 ? "": "0") + e.getMinutes()
    },
    readableDate: function(e) {
        var t = e.valueOf(),
        a = new Date,
        n = parseInt((a.getTime() - t) / 1e3);
        return n < 60 ? n + " 秒前": n < 3600 ? parseInt(n / 60).toString() + " 分钟前": n < 86400 ? "约 " + parseInt(n / 3600).toString() + " 小时前": this.fullDate(e)
    },
    createName: function(e) {
        var t = document.createElement("a");
        return t.href = e.user.url,
        t.title = e.user.name,
        t.target = "_blank",
        t.appendChild(document.createTextNode(e.user.screen_name)),
        t
    },
    createText: function(e) {
        return document.createTextNode(e.text)
    },
    createStamp: function(e) {
        var t = document.createElement("a"),
        a = this.getDate(e.created_at);
        return t.appendChild(document.createTextNode(this.readableDate(a))),
        t.href = "http://fanfou.com/statuses/" + e.id,
        t.className = "stamp",
        t.title = this.fullDate(a),
        t.target = "_blank",
        t
    },
    createLink: function() {
        var e = document.createElement("li"),
        t = document.createElement("a");
        switch (t.appendChild(document.createTextNode("更多消息")), this.timeline) {
        case "user":
            t.href = "http://fanfou.com/" + this.name;
            break;
        case "friends":
            t.href = "http://fanfou.com/message/" + this.name;
            break;
        case "public":
            t.href = "http://fanfou.com/browse"
        }
        return t.title = "饭否",
        t.target = "_blank",
        e.appendChild(t),
        e.className = "fanfou_statuses_more",
        e
    },
    createBrand: function() {
        var e = document.createElement("p"),
        t = document.createElement("a");
        t.href = "http://fanfou.com/",
        t.title = "饭否",
        t.target = "_blank";
        var a = document.createElement("img");
        return a.src = "https://static.fanfou.com/img/brand.gif",
        a.alt = "饭否",
        t.appendChild(a),
        e.appendChild(t),
        e
    },
    statuses: function(e) {
        if (0 == e.length) return ! 1;
        switch (this.timeline) {
        case "user":
            var n = "fanfou_statuses_user" + e[0].user.id;
			n.innerHTML="<div id="' + n + '" class="fanfou_statuses"></div>";
            for (var t = document.createElement("ul"), a = 0; a < e.length; a++)(i = document.createElement("li")).appendChild(this.createText(e[a])),
            i.appendChild(document.createTextNode(" ")),
            i.appendChild(this.createStamp(e[a])),
            t.appendChild(i);
            break;
        case "friends":
            n = "fanfou_statuses_friends";
            document.getElementById(n) || document.write('<div id="' + n + '" class="fanfou_statuses"></div>');
            for (var t = document.createElement("ul"), a = 0; a < e.length; a++)(i = document.createElement("li")).appendChild(this.createName(e[a])),
            i.appendChild(document.createTextNode("：")),
            i.appendChild(this.createText(e[a])),
            i.appendChild(document.createTextNode(" ")),
            i.appendChild(this.createStamp(e[a])),
            t.appendChild(i);
            break;
        case "public":
            var n = "fanfou_statuses_public";
            document.getElementById(n) || document.write('<div id="' + n + '" class="fanfou_statuses"></div>');
            for (var t = document.createElement("ul"), a = 0; a < e.length; a++) {
                var i = document.createElement("li");
                i.appendChild(this.createName(e[a])),
                i.appendChild(document.createTextNode("：")),
                i.appendChild(this.createText(e[a])),
                i.appendChild(document.createTextNode(" ")),
                i.appendChild(this.createStamp(e[a])),
                t.appendChild(i)
            }
        }
        t.appendChild(this.createLink());
        var s = this;
        setTimeout(function() {
            var e = document.getElementById(n);
            e.appendChild(t),
            e.appendChild(s.createBrand())
        },
        0)
    },
    createStatuses: function(e) {
        switch (this.timeline) {
        case "user":
                   }
    }
},
ffstatuses = new fanfou.Timeline,
ffstatuses.createStatuses("ffstatuses");