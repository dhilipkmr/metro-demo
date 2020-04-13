function MetroDemo() {
    this.init();
}
MetroDemo.prototype.getLink = function getLink(path) {
    const $link = document.createElement('link');
    $link.rel = "stylesheet";
    $link.type = "text/css";
    $link.href = path;
    return $link;
}
MetroDemo.prototype.getScript = function getScript(path) {
    const $script = document.createElement('script');
    $script.defer = true;
    $script.src = path;
    return $script;
}

MetroDemo.prototype.addNewContent = function addNewContent() {
    const $newstyle = this.getLink('/downloads/styles.css');
    document.head.appendChild($newstyle);
}

MetroDemo.prototype.addOldContent = function addOldContent() {
    
    const $vendor = this.getScript('/vendor.js');
    const $main = this.getScript('/home.js');
    const $fragment = document.createDocumentFragment();
    [$main, $vendor].forEach(($elt) => {
        $fragment.appendChild($elt);
    });
    document.head.appendChild($fragment);
    setTimeout(() => {
        this.addNewContent();
    }, 3000);
}

MetroDemo.prototype.init = function init() {
    this.addOldContent();
}

const demo = new MetroDemo();