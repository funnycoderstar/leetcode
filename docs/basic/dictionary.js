class Dictionary {
    constructor() {
        this.items = {};
    }
    has(key) {
        return key in this.items;
    }
    set(key, value) {
        this.items[key] = value;
    }
    delete(key, value) {
        if(this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.items[key] ? this.items[key] : undefined;
    }
    values() {
        let values = [];
        for(let k in this.items) {
            if(this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }
    clear() {
        this.items = {};
    }
    size() {
        return this.values().length;
    }
    keys() {
        return Object.keys(this.items);
    }
    getItems() {
        return this.items;
    }

}

var loseloseHashCode = function(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}
class HashTable{
    constructor() {
        this.table = [];
    }
    put(key, value) {
        let position = loseloseHashCode(key);
        console.log(position + '-' + key);
        this.table[position] = value;
    }
    get(key) {
        return this.table[loseloseHashCode(key)];
    }
    remove(key) {
        this.table[loseloseHashCode(key)] = undefined;
    }

}


const hash = new HashTable();
hash.put('Gandalf', 'aa.com');
hash.put('John', 'bb.com');
hash.put('Tyrion', 'cc.com');
console.log(hash.get('Gandalf'));
console.log(hash.remove('John'));
console.log(hash.get('John'));
