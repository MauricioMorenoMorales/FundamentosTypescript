"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _id_1;
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        this.title = title;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _id)}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
_id = new WeakMap();
class Album {
    constructor(id, title) {
        _id_1.set(this, void 0);
        this.pictures = [];
        __classPrivateFieldSet(this, _id_1, id);
        this.title = title;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
_id_1 = new WeakMap();
