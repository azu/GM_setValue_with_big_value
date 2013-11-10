// ==UserScript==
// @id             GM_setValue_with_big_value
// @name           GM_setValue_with_big_value
// @version        1.0
// @namespace      http://efcl.info/
// @author         azu
// @description    
// @include        http://*
// @resource       100kb  https://rawgithub.com/azu/GM_setValue_with_big_value/master/100kb.dummy
// @run-at         document-end
// ==/UserScript==

var kb_100 = GM_getResourceText("100kb");

var data = "";
for (var i = 0; i < 10; i++) {
    data = data + kb_100;
    try {
        GM_setValue("test", data);
    } catch (e) {
        console.log(i, e);
        throw e;
    }
}