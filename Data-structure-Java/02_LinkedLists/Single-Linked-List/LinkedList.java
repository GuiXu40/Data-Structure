package com.company;

public class LinkedList<E> {
    //通过在类中添加一个类的方式增加后续
    private class Node{
        public E e;
        public Node next;

        public Node(E e,Node next){
            this.e=e;
            this.next=next;
        }

        public Node(E e){
            this(e,null);
        }

        public  Node(){
            this(null,null);
        }

        public String toString(){
            return e.toString();
        }
    }
    //虚拟头结点
    private Node dummyHead;
    //链表长度
    private int size;

    //初始化
    public LinkedList(){
        dummyHead=new Node();
        size=0;
    }

    //获取链表的长度
    public int size(){
        return size;
    }

    //判断链表是否为空
    public boolean isEmpty(){
        return size==0;
    }

    //在链表头添加元素
    public void addFirst(E e){
        add(0,e);
    }

    //在指定元素中添加链表节点
    public void add(int index,E e){
        //先判断index
        if(index<0 || index>size){
            throw  new IndexOutOfBoundsException("Add failed");
        }
        Node preNode = dummyHead;
        for (int i=0;i<index;i++){
            preNode=preNode.next;
        }
        Node node=new Node(e);
        node.next=preNode.next;
        preNode.next=node;
        size++;
    }

    //在链表末尾添加新的元素
    public void addLast(E e){
        add(size,e);
    }

    //获取链表中的第index位置的元素
    public E get(int index){
        if(index<0 || index>size){
            throw  new IndexOutOfBoundsException("index failed");
        }
        Node cur=dummyHead.next;
        for (int i=0;i<index;i++){
            cur=cur.next;
        }
        return cur.e;
    }

    //修改index元素的值
    public E set(int index,E e){
        if(index<0 || index>size){
            throw  new IndexOutOfBoundsException("index failed");
        }
        Node cur=dummyHead.next;
        for (int i=0;i<index;i++){
            cur=cur.next;
        }
        E oldValue=cur.e;
        cur.e=e;
        return oldValue;
    }

    //查找链表中是否包含指定元素
    public boolean contains(E e){
        Node cur=dummyHead.next;
        System.out.println(cur);
        while (cur.e!=null){
            if(cur.e.equals(e)){
                return true;
            }
            cur=cur.next;
        }
        return false;
    }

    //从链表中删除index位置的元素,并返回
    public E remove(int index){
        if(index<0 || index>size){
            throw  new IndexOutOfBoundsException("index failed");
        }
        Node preNode=dummyHead;
        for (int i=0;i<index;i++){
            preNode=preNode.next;
        }
        Node oldNode=preNode.next;
        preNode.next=oldNode.next;
        oldNode.next=null;
        size--;
        return oldNode.e;
    }

    //丛链表中删除第一个元素,返回删除的值
    public E removeFirst(){
        return  remove(0);
    }

    //从链表中删除最后一个元素,返回删除的元素
    public E removeLast(){
        return remove(size-1);
    }


    //从链表中删除元素e
    public void removeElement(E e){
        Node preNode = dummyHead;
        while (preNode.next != null){
            if (preNode.next.e.equals(e))
                break;
            preNode = preNode.next;
        }
        if (preNode.next != null){
            Node delNode = preNode.next;
            preNode.next = delNode.next;
            //GC
            delNode.next = null;
            size--;
        }
    }

    @Override
    public String toString(){
        StringBuilder res = new StringBuilder();

        Node cur = dummyHead.next;
        while(cur != null){
            res.append(cur).append("->");
            cur = cur.next;
        }
        res.append("NULL");

        return res.toString();
    }
}
