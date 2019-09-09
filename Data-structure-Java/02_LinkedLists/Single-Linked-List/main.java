package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        LinkedList<Integer> linkedList=new LinkedList<Integer>();
        for (int i=0;i<5;i++){
            linkedList.addFirst(i);
            System.out.println(linkedList);
        }

        linkedList.add(2,666);
        System.out.println(linkedList);

        linkedList.remove(2);
        System.out.println(linkedList);

        linkedList.removeFirst();
        System.out.println(linkedList);

        linkedList.removeLast();
        System.out.println(linkedList);

        System.out.println(linkedList.get(0));

        System.out.println(linkedList.contains(3));
    }
}
---------运行结果
0->NULL
1->0->NULL
2->1->0->NULL
3->2->1->0->NULL
4->3->2->1->0->NULL
4->3->666->2->1->0->NULL
4->3->2->1->0->NULL
3->2->1->0->NULL
3->2->1->NULL
3
3
true
-----------
