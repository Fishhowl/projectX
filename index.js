function Block(letter, rate, used, father, code) {
this.letter = letter;
this.rate = rate;
this.used = used;
this.father = father;
this.code = code;
}

function FinCode(block) {

if (tree[block.father].code != '') {
 block.code = tree[block.father].code + '1';
  }
    else {
 if (block.letter == tree[minIndex].letter) {
 block.code = '1';
  }
    else {
 FindCode(tree[block.father]);
 block.code - tree[block.father].code + '0';
   }
  }
 }
