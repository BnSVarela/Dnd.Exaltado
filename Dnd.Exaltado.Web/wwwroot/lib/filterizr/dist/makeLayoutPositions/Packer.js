var Packer = /** @class */ (function () {
    function Packer(w) {
        this.init(w);
    }
    Packer.prototype.init = function (w) {
        this.root = { x: 0, y: 0, w: w };
    };
    Packer.prototype.fit = function (blocks) {
        var n, node, block, len = blocks.length;
        var h = len > 0 ? blocks[0].h : 0;
        this.root.h = h;
        for (n = 0; n < len; n++) {
            block = blocks[n];
            if ((node = this.findNode(this.root, block.w, block.h)))
                block.fit = this.splitNode(node, block.w, block.h);
            else
                block.fit = this.growDown(block.w, block.h);
        }
    };
    Packer.prototype.findNode = function (root, w, h) {
        if (root.used)
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
        else if (w <= root.w && h <= root.h)
            return root;
        else
            return null;
    };
    Packer.prototype.splitNode = function (node, w, h) {
        node.used = true;
        node.down = { x: node.x, y: node.y + h, w: node.w, h: node.h - h };
        node.right = { x: node.x + w, y: node.y, w: node.w - w, h: h };
        return node;
    };
    Packer.prototype.growDown = function (w, h) {
        var node;
        this.root = {
            used: true,
            x: 0,
            y: 0,
            w: this.root.w,
            h: this.root.h + h,
            down: { x: 0, y: this.root.h, w: this.root.w, h: h },
            right: this.root,
        };
        if ((node = this.findNode(this.root, w, h)))
            return this.splitNode(node, w, h);
        else
            return null;
    };
    return Packer;
}());
export default Packer;
//# sourceMappingURL=Packer.js.map