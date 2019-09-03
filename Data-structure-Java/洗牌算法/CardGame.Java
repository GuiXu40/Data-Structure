package com.xipai.suanfa;

import java.util.Random;

public class CardGame {
    private String numList[] = {"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"};
    private String chrList[] = {"*", "&", "^", "%"};
    //cardList表示所有牌，curList表示当前的牌
    private Card cardList[], curList[];
    private int curSize;
    private Random rdm = new Random();

    public static final int CARDSIZE = 13 * 4;

    public Card[] getCardList() {
        return cardList;
    }

    public Card[] getCurList() {
        return curList;
    }

    public void setCurList(Card[] curList) {
        for (int i = 0; i < curList.length; i++) {
            this.curList[i] = new Card(curList[i]);
        }
    }

    public CardGame() {
        //this.size=numList.length*chrList.length;
        cardList = new Card[this.CARDSIZE];
        curList = new Card[this.CARDSIZE];
        for (int i = 0; i < numList.length; i++) {
            for (int j = 0; j < chrList.length; j++) {
                cardList[i * chrList.length + j] = new Card(chrList[j], numList[i]);
            }
        }
        this.IOShuffle(CARDSIZE);
        this.KDShuffle(this.CARDSIZE);
    }

    //从所有牌列表中第i张后面的牌中随机选出一张到作为前牌中的第i张
    //改变了牌列表的顺序。
    public void FYShuffle(int size) {
        int tempInd;
        for (int i = 0; i < size; i++) {
            tempInd = i + rdm.nextInt(size - i);
            curList[i] = new Card(cardList[tempInd]);
            this.swap(cardList[i], cardList[tempInd]);
        }
    }

    //将前面的i张牌中随机选出一张和第i张交换位置
    //节省了空间
    public void KDShuffle(int size) {
        int tempInd;
        this.setCurList(this.getCardList());
        for (int i = size - 1; i > 0; i--) {
            tempInd = rdm.nextInt(i);
            this.swap(curList[i], curList[tempInd]);
        }
    }

    //在前面的i-1张牌中随机选出一张和第i张牌交换。
    public void IOShuffle(int size) {
        int tempInd;
        this.setCurList(this.getCardList());
        for (int i = 1; i < size; i++) {
            tempInd = rdm.nextInt(i);
            this.swap(curList[i], curList[tempInd]);
        }
    }

    private void swap(Card card, Card card2) {
        // TODO Auto-generated method stub
        Card temp = new Card(card);
        card.setCard(card2);
        card2.setCard(temp);
    }

    public void printCard(Card[] a) {
        for (int i = 0; i < a.length; i++) {
            if (i % 4 == 0) {
                System.out.printf("\n");
            }
            System.out.printf("%-9s  ", a[i].toString());
        }
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        CardGame cg = new CardGame();
        //cg.printCard(cg.getCardList());
        cg.printCard(cg.getCardList());
        System.out.println();
        cg.printCard(cg.getCurList());

    }
}
