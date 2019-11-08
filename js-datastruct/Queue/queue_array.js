function Queue(){
    //属性
    this.items = [];
    //方法
    //1.在队列加入元素
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    }
    //2.从队列中删除元素
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    }
    //3.查看前端的元素
    Queue.prototype.front = function () {
        return this.items[0];
    }
    //4.查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    //5.查看元素的个数
    Queue.prototype.size = function () {
        return this.items.length;
    }
    //6.toString方法
    Queue.prototype.toString = function () {
        var resultString = '';
        for(var i = 0; i < this.items.length; i++){
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }
}
var queue=new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());
