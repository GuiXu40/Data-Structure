package com.company;

/**
 * @author guixu
 * @date 2019/9/2
 */
public class Array<E> {
    private E[] data;
    //定义数组的大小
    private int length;
    //定义数组的实际大小
    private int size;

    //构造函数,构造初始化数组的大小
    public Array(int capacity){
        data=(E[])new Object[capacity];
        this.size=0;
        this.length=capacity;
    }

    //无参构造函数,设置默认数组的容量capacity=10
    public Array(){
        this(10);
    }

    //获取数组的长度
    public int length(){
        return length;
    }

    //获取元素的个数
    public int size(){
        return size;
    }

    //判断数组是否为空
    public boolean isEmpty(){
        return size==0;
    }

    //在数组指定的index下标下插入元素x
    public void add(int index,E e){
        //插入位置不合理判断
        if(index<0 || index>size){
            throw new IndexOutOfBoundsException("Add falie");
        }

        //判断数组空间是否满了
        if(size==data.length){
            resize(2*data.length); //将长度增加一倍
        }

        //开始插入
        for (int i=size;i>index;i--){
            data[i]=data[i-1];
        }
        data[index]=e;
        size++;
    }

    //插入一个元素
    public boolean add(E e){
        if(size+1 == data.length);
            resize(2*data.length);
        data[size++]=e;
        return true;
    }

    //将数组大小扩大两倍
    private void resize(int newCapacity){
        E[] newData=(E[])new Object[newCapacity];
        for(int i=0;i<size;i++){
            newData[i]=data[i];
        }
        data=newData;
    }

    //获取index索引位的元素
    public E get(int index){
        if(index<0 || index>=size){
            throw new IndexOutOfBoundsException("Get failed");
        }
        return data[index];
    }

    //修改index下标的元素为e
    public E set(int index,E e){
        if(index<0 || index>=size){
            throw new IndexOutOfBoundsException("Get failed");
        }
        E oldValue=data[index];
        data[index]=e;
        //返回修改的值
        return oldValue;
    }

    //查找数组中是否有元素e
    public boolean contains(E e){
        for(int i=0;i<size;i++){
            if(data[i].equals(e)){
                return true;
            }
        }
        return false;
    }

    //查找数组中元素所在的索引,如果不存在元素e,返回-1
    public int find(E e){
        for(int i=0;i<size;i++){
            if(data[i].equals(e)){
                return i;
            }
        }
        return -1;
    }

    //从数组中删除下标为index的元素,返回删除的元素
    public E remove(int index){
        if(index<0 || index>=size){
            throw new IndexOutOfBoundsException("Get failed");
        }
        E oldValue=data[index];
        for (int i=index+1;i<size;i++){
            data[i-1]=data[i];
        }
        //GC
        data[--size]=null;
        //如果数组储存的元素比数组长度的小于数组容量的一半,进行缩容
        if(size==data.length/2){
            resize(data.length/2);
        }
        return oldValue;
    }

    //从数组中删除元素e
    public boolean removeElement(E e){
        int index=find(e);
        if(index!=-1){
            remove(index);
            if(size==data.length/2){
                resize(data.length/2);
            }
            return true;
        }
        return false ;
    }

    @Override
    public String toString(){
        StringBuilder res=new StringBuilder();
        res.append(String.format("Array:size = %d,capacity=%d",size,data.length));
        res.append('[');
        for (int i=0;i<size;i++){
            res.append(data[i]);
            if(i!=size-1){
                res.append(",");
            }
        }
        res.append("]");
        return res.toString();
    }
}
