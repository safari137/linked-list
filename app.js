"use strict";

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    add(node) {
        if (this.head == null) {
            this.head = node;
            this.head.next = null;
        }
        
        else {
            var curNode = this.head;
            while(curNode.next !== null) {
                curNode = curNode.next;   
            }
            curNode.next = node;
        }
        this.length++;
    }
    
    forEach(cb) {
        if (this.head === null)
            cb(null);
        
        var node = this.head;
        var index = 0;
        
        while(node !== null) {
            cb(node.data, index, this.length);
            node = node.next;
            index++;
        }
    }
    
    getArray() {
        if (this.head === null)
            return [];
            
        var node = this.head;
        var arr = [];
        
        while (node !== null) {
            arr.push(node.data);
            node = node.next;
        }
        
        return arr;
    }
    
    remove(position) {
        var index = 0;
        var node = this.head;
        var lastNode = null;
        
        while (node !== null) {
            if (index === position) {
                if (index === 0) {
                    this.head = this.head.next;
                }
                else {
                    lastNode.next = node.next;
                }
                this.length--;
            }
            index++;
            lastNode = node;
            node = node.next;
        }
    }
}
