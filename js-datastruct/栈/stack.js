function Stack(){
    //栈的相关属性
    this.items=[];

    //栈的相关操作
    //1.将元素压入栈
    Stack.prototype.push = function (element) {
        return this.items.push(element);
    }
    //2.从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop();
    }
    //3.查看一下栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length-1];
    }
    //4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length==0;
    }
    //5.获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.items.length;
    }
    //6.toString方法
    Stack.prototype.toString = function () {
        var resultString = '';
        for(var i = 0; i < this.items.length; i++){
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack);
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

