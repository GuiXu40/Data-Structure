/*
            ����ڵ�Ĳ�����ɾ��

       ���뻷����VC++ 6.0
       ����ϵͳ��windows XP SP3
*/

#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>

//    ���������еĽڵ�
typedef struct node
{
    int member;                //    �ڵ��еĳ�Ա
    struct node *pNext;        //    ָ����һ���ڵ��ָ��
}Node,*pNode;

//    ��������
pNode CreateList();                 //  ����������
void TraverseList(pNode pHead);            //  ����������
bool Insert_Node(pNode ,int front,int data);    //    ����ڵ���뺯��,��һ��������ͷ�ڵ㣬�ڶ���������Ҫ�ڵڼ����ڵ�ǰ���룬������������Ҫ���������
int Del_Node(pNode,int );        //    ɾ������ڵ�,��һ��������ͷ�ڵ㣬�ڶ���������ɾ���ڼ����ڵ㣬��������Ϊ
int main()
{
    pNode pHead = NULL;                //  �����ʼ��ͷ�ڵ㣬�ȼ��� struct Node *pHead == NULL
    int data;                        // ��ΪInsert_Node�����ĵ���������
    int num;                        //    ��ΪInset_Node�����ڶ�������
    int choose;    
    int return_val;
    pHead = CreateList();            //  ����һ����ѭ�������������������ͷ���ĵ�ַ����pHead
    printf("������������ǣ�");
    TraverseList(pHead);    //  ���ñ���������
    printf("�Ƿ�Ҫ�������²�����\n");
    printf("1.��������      2.ɾ������\n");
    printf("�����룺");
    scanf("%d",&choose);
    switch (choose)
    {
        case 1:
            {
                printf("������Ҫ�ڵڼ����ڵ�ǰ�������ݣ�");
                scanf("%d",&num);
                printf("������Ҫ��������ݣ�");
                scanf("%d",&data);
                if(Insert_Node(pHead,num,data) == true)
                {
                    printf("����ɹ�\n�����������ǣ�\n");
                    TraverseList(pHead);
                }
                else
                {
                    printf("����ʧ��\n");
                }
                printf("������ɺ�������ǣ�");
                TraverseList(pHead);
                break;
            }
        case 2:
            {
                printf("������Ҫɾ���ڼ����ڵ�����ݣ�");
                scanf("%d",&num);
                return_val = Del_Node(pHead,num);
                if (return_val == 0)
                {
                    printf("ɾ��ʧ�ܡ�\n");
                }
                else
                {
                    printf("ɾ���ɹ���ɾ����Ԫ���ǣ�%d\n",return_val);
                }
                printf("������ɺ�������ǣ�");
                TraverseList(pHead);
            }
    }
    return 0;
}

//    ����������
pNode CreateList()
{
    int i;                                            //    ��������ѭ��
    int len;                                        //    ���������Ч�ڵ������
    int val;                                        //    ������ʱ����û����������
    pNode pHead = (pNode)malloc(sizeof(Node));        //  ����һ���������Ч���ݵ�ͷ���
    pNode pTail = pHead;                            //    ��������һ���ڵ�
    pTail->pNext = NULL;                            //    ���һ���ڵ��ָ����Ϊ��
    printf("������ڵ������");
    scanf("%d",&len);
    for(i = 0; i < len; i++)
    {
        printf("�� %d ���ڵ����ֵ��",i+1);
        scanf("%d",&val);
        pNode pNew = (pNode)malloc(sizeof(Node));    //    Ϊ�ڵ����ռ�
        pNew->member = val;                            //���û���������ݸ����ڵ�ĳ�Ա
        pTail->pNext = pNew;                        //�����һ���ڵ��ָ��ָ����һ���µĽڵ�
        pNew->pNext = NULL;                            //���½ڵ��е�ָ����Ϊ��
        pTail = pNew;                                //���½ڵ㸳������һ���ڵ�
    }
    return pHead;                                    //����ͷ�ڵ�

}

//    ����������
void TraverseList(pNode pHead)
{
    pNode p = pHead->pNext;                            //��ͷ�ڵ��ָ�������ʱ�ڵ�p
    while(NULL != p)                                //�ڵ�p��Ϊ�գ�ѭ��    
    {
        printf("%d ",p->member);                    
        p = p->pNext;                                
    }
    printf("\n");
    return ;
}

//    ����ڵ���뺯��
//    ��һ��������ͷ�ڵ㣬�ڶ���������Ҫ�ڵڼ����ڵ�ǰ���룬������������Ҫ���������
bool Insert_Node(pNode pHead, int front,int data)
{
    int i = 0;
    pNode _node = pHead;
    pNode pSwap;                                //    ���ڽ���
    if ((front < 1) && (NULL != _node))        //�ж��û�����������Ƿ���ڵ���1,��_node�Ƿ�Ϊ��
    {
        return false;
    }
    while (i < front - 1)                    //ͨ��ѭ��ʹָ��ָ��Ҫ�����ĸ��ڵ�ǰ�Ľڵ㡣˵���Լ��������ˣ����ǿ������ͼ�ɡ�    
    {
        _node = _node->pNext;
        ++i;
    }
    pNode pNew = (pNode)malloc(sizeof(Node));

    pNew->member = data;                        //    ����������ݸ���Ҫ����Ľڵ�
    pSwap = _node->pNext;                        //    ����һ���ڵ�ĵ�ַ�������ڽ�����pSwap
    _node->pNext = pNew;                        //    ��Ҫ����Ľڵ�ĵ�ַ�����ϸ��ڵ��ָ����
    pNew->pNext = pSwap;                        //    �Ѳ���ڵ����һ���ڵ�ĵ�ַ��������ڵ��ָ����
    return true;

}

//    ɾ������ڵ㺯��
//    ��һ��������ͷ�ڵ㣬�ڶ���������Ҫɾ���ڼ����ڵ㡤������������������Ĳ��뺯���ǲ��Ǻ���
int Del_Node(pNode pHead,int back)
{
    int i = 0;
    int data;
    pNode _node = pHead;
    pNode pSwap;
    if ((back < 1) && (NULL == _node->pNext))
    {
        printf("ɾ��ʧ�ܣ�\n");
        return 0;
    }
    while(i < back-1)
    {
        _node = _node->pNext;
        ++i;
    }
    pSwap = _node->pNext;
    data = pSwap->member;
    _node->pNext = _node->pNext->pNext;
    free(pSwap);
    return data;
} 


