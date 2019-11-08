function LinkedList() {
    //内部的类,节点类
    function Node(data){
        this.data=data;
        this.next=null;
    }

    //属性
    this.head=null;
    this.length=0;

    //1.追加方法
    LinkedList.prototype.append = function (data) {
        var newNode = new Node(data);
        //判断是否添加的是第一个节点
        if(this.length==0){
            
            this.head = newNode;
        }else {
            var current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
    }

    //2.toString 方法
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var resultList = "";
        while(current){
            resultList = current.data + " ";
            current = current.next;
        }
        return resultList;
    }

    //3.insert方法
    LinkedList.prototype.insert = function (position,data) {
        //1.对position进行越界判断
        if(position < 0 || position > this.length){
            return false;
        } 
        //2.根据data创建新的节点
        var newNode = new Node(data);

        //3.判断输入的位置是否是第一个
        if(position == 0){
            newNode.next = this.head;
            this.head = newNode;
        }else {
            var index = 0;
            //用于找到需要移动的节点
            var current = this.head;
            //用于找到移动的前一个节点
            var previous = null;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length += 1;
        return true;
    }
    
    //4.get方法
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if(position < 0 || position >= this.length){
            return null;
        }
        //2.取出对应的值
        var current = this.head;
        var index = 0;
        while(index++ < position){
            current = current.next;
        }

        return current.data;
    }

    //5.indexOf方法
    LinkedList.prototype.indexOf = function (data) {
        var current = this.head;
        var index = 0;
        while(current){
            if(current.data==data){
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1;
    }

    //6.update方法
    LinkedList.prototype.update = function (position ,data){
        if(position < 0 || position >= this.length){
            return false;
        }
        var current = this.head;
        var index = 0;
        while(index++ < position){
            current = current.next;
        }
        current.data = data;
        return true;
    }

    //7.removeAt方法
    LinkedList.prototype.removeAt = function (position) {
        if(position < 0 || position >= this.length){
            return false;
        }
        if(position == 0){
            this.head = this.head.next;
        }else {
            var current = this.head;
            var previous = null;
            var index = 0;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return true;
    }

    //8.remove方法
    LinkedList.prototype.remove = function (data) {
        var position = this.indexOf(data);
        return this.removeAt(position);
    }

    //9.isEmpty方法
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    }

    //10.size方法
    LinkedList.prototype.size = function () {
        return this.length;
    }
}


var list = new LinkedList();
list.append('abc');
list.append('bbb');
list.append('ccc');
//console.log(list);
list.insert(0,'aaa');
list.insert(3,'fff');
list.insert(5,'ddd');
// console.log(list);
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.indexOf('fff'));
// console.log(list.indexOf('adff'));
list.update(3,'ffc');
console.log(list);
list.removeAt(3);
list.removeAt(3);
list.removeAt(3);
console.log(list);