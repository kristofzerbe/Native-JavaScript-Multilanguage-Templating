class Helper {

    setCookie(key, value) {
        document.cookie = key + "=" + value;
    }

    getCookie(key) {
        let ret = null;
        if (document.cookie) {
            let cookies = document.cookie.split('; ');
            let lookup = cookies.find(row => row.startsWith(key));
            if (lookup) {
                ret = lookup.split('=')[1];
            }
        }
        return ret;
    }

    createElementFromHtml(html) {
        let e = document.createElement("template");
        e.innerHTML = html.trim();
        return e.content.firstChild;
    }

}
export { Helper };