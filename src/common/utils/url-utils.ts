export default class URLUtil {

    static getSearchParamsURL() {
        const url = new URL(window.location.href);
        return url.search;
    }
}
