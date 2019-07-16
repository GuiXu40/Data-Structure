#include<stdio.h>
#include<stdlib.h>3 
typedef struct LNode{
	int data;
	struct LNode *next; 
}LNode,*LinkList;
LinkList CreateList();  //创建链表函数 
int main(){
	LinkList pt;
	pt=CreateList();
	printf("%d",pt->data);
	return 0;
} 
LinkList CreateList(){
	LinkList head;  //创建 一个头结点
	LinkList p1,p2;
	int n=0;
	p1=p2=(LinkList)malloc(sizeof(LNode));   // 开辟一个新的单元
	scanf("%d",&p1->data);
	head=NULL;   
	while(p1->data!=0){
		n++;
		if(n==1){
			head=p1;
		}else{
			p2=p1;
		}
		p1=(LinkList)malloc(sizeof(LNode));
		scanf("%d",&p1->data);
	} 
	p2->next=NULL;
	return head;
} 

