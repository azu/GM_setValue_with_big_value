// ==UserScript==
// @id             GM_setValue_with_big_value
// @name           GM_setValue_with_big_value
// @version        1.0
// @namespace      http://efcl.info/
// @author         azu
// @description    
// @include        http*
// @resource       1kb  https://rawgithub.com/azu/GM_setValue_with_big_value/master/1kb.dummy
// @run-at         document-end
// ==/UserScript==

var kb_one = GM_getResourceText("1kb");

var data = "";
for (var i = 0; i < 10; i++) {
    data = data + kb_one;
    try {
        GM_setValue("test", kb_one);
    } catch (e) {
        console.log(e);
        throw e;
    }
}