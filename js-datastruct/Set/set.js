function Set () {
    //属性
    this.items = {};

    //方法
    //add方法
    Set.prototype.add = function (value) {
        if(this.has(value)){
            return false
        }
        //将元素添加到集合中
        this.items[value]=value;
        return true;
    }

    //has方法
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value);
    }

    //remove方法
    Set.prototype.remove = function (value) {
        if(!this.has(value)){
            return false;
        }
        delete this.items[value];
        return true;
    }

    //clear 方法
    Set.prototype.clear = function () {
        this.items = {};
    }

    //size方法
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    }

    //获取集合所有的值
    Set.prototype.values = function () {
        return Object.keys(this.items);
    }

    //并集
    Set.prototype.union = function (otherSet) {
        //this: 集合对象A
        //otherSet: 集合对象B
        //1.创建新的集合
        var unionSet = new Set();
        //2.将A集合中所有元素加入到新集合中
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        //3.取出B集合中的元素,判断是否加入到新集合中
        values = otherSet.values();
        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    //交集
    Set.prototype.intersection = function (otherSet) {
        //1.创建新的集合
        var newSet = new Set();
        //2.从A中取出一个元素,判断是否同时存在B中,存入新的集合中
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                newSet.add(values[i])
            }
        }
        return newSet;
    }

    //差集
    Set.prototype.difference = function (otherSet) {
        //1.创建新的集合
        var newSet = new Set();
        //2.从A中取出一个元素,判断是否同时存在B中,存入新的集合中
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                newSet.add(values[i])
            }
        }
        return newSet;
    }

    //子集
    Set.prototype.subset =function (otherSet) {
        //1.创建新的集合
        var newSet = new Set();
        //2.从A中取出一个元素,判断是否同时存在B中,存入新的集合中
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                return false
            }
        }
        return true;
    }
}

// var set = new Set();
// set.add('aaa');
// set.add('aaa');
// set.add('bbb');
// set.add('ccc');
// console.log(set.values()); 
// console.log(set.remove('aaa'));
// console.log(set.size());
// console.log(set.values());
// set.clear();

//创建两个集合,并且添加元素
var setA = new Set();
setA.add('aaa');
setA.add('bbb');
setA.add('ccc');
var setB = new Set();
setB.add('aaa');
setB.add('ddd');
console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));
console.log(setA.subset(setB));