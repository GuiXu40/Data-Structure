
function HashTable () {
    //属性
    this.storage = [];  //最外层的躯壳
    this.count = 0;     //存放的数据个数
    this.limit = 7;     //长度 
    //方法

    //设计哈希函数
    //1> 将字符串转换成较大的数字: hashCode
    //2> 将大的数字hashCode压缩到数组范围(大小)之内
    HashTable.prototype.hashFunc = function (str ,size) {
        //定义hashCode变量
        var hashCode = 0;

        //霍纳算法,来计算hashCode的值
        for(var i = 0; i < str.length; i++){
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }

        //3.取余操作
        var index = hashCode % size;
        return index;
    }

    //插入&修改操作
    HashTable.prototype.put = function (key, value) {
        //1.根据key获取对应的index
        var index = this.hashFunc(key,this.limit);

        //2.根据index取出对应的bucket
        var bucket = this.storage[index];

        //3.判断该bucket是否为null
        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }

        //4.判断是否是修改数据
        for(var i = 0; i < bucket.length; i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                tuple[1] = value;
                return;
            }
        }

        //5.进行添加操作
        bucket.push([key, value]);
        this.count += 1;

        //6.判断是否需要扩容
        if(this.count > this.limit * 0.75){
            var newNum = this.getPrime(this.limit * 2);
            this.resize(newNum);
        }
    }

    //获取操作
    HashTable.prototype.get = function (key) {
        //1.根据key获取对应的index
        var index = this.hashFunc(key,this.limit);

        //2.根据index取得对应的bucket
        var bucket = this.storage[index];

        //3.判断bucket是否为空
        if(bucket == null){
            return null;
        }

        //4.有bucket,那么进行线性查找
        for(var i = 0; i < bucket.length; i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                return tuple[1];
            }
        }

        //5.依然没有找到,那么返回null
        return null;
    }

    //删除操作
    HashTable.prototype.remove = function (key) {
        //1.根据key获取对应的index
        var index = this.hashFunc(key,this.limit);

        //2.根据index取得对应的bucket
        var bucket = this.storage[index];

        //3.判断bucket是否为空
        if(bucket == null){
            return null;
        }

        //4.有bucket,那么进行线性查找
        for(var i = 0; i < bucket.length; i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                bucket.splice(i,1);
                this.count--;

                //缩小容量
                if(this.count > 7 && this.count < this.limit * 0.25) {
                    var newNum = this.getPrime(Math.floor(this.limit / 2));
                    this.resize(newNum);
                }
                return tuple[1];
            }
        }

        //5.依然没有找到,那么返回null
        return null;
    }

    //判断是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count == 0;
    }

    //返回长度
    HashTable.prototype.size = function () {
        return this.count;
    }

    //哈希表扩容
    HashTable.prototype.resize = function (newLimit) {
        //1.保存旧的数组内容
        var oldStorage = this.storage;

        //2.重置所有的属性
        this.count = 0;
        this.limit = newLimit;

        //3.遍历oldStorage中所有的bucket
        for(var i = 0; i < oldStorage.length; i++){
            //3.1取出对应的bucket
            var bucket = oldStorage[i];

            //3.2判断bucket是否为null
            if(bucket == null){
                continue;
            }

            //3.3bucket中所有数据,那么取出数据,重置插入
            for(var j = 0; j < bucket.length; j++){
                var tuple = bucket[j];
                this.put(tuple[0],tuple[1]);
            }
        }
    }

    //判断是否为zhishu
    HashTable.prototype.isPrime = function (num) {
        var temp = Math.sqrt(num);
        for(var i = 2; i <= temp; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }
    //将数置为质数
    HashTable.prototype.getPrime = function (num) {
        while(!this.isPrime(num)){
            num++;
        }
        return num;
    }
}

var ht = new HashTable();
console.log(ht.isEmpty())
ht.put('abc','123');
ht.put('cba','321');
ht.put('bca','899');
ht.put('aaa','156');
console.log(ht.get('abc'));
ht.put('abc','111');
console.log(ht.get('abc'));
ht.remove('abc');
console.log(ht.get('abc'));