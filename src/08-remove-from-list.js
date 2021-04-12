/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with list interface
 * function ListNode(x) {
 *   list.value = x;
 *   list.next = null;
 * }
 */

function removeKFromList(list, k) {
  const l = list;
  let node = l.head;
  // Итерирование до тех пор, пока не будет найден нужный элемент
  // В худшем случае -- O(n)
  while (node !== null) {
    // Если есть следующий элемент и его значение равно искомому --
    // выставление ссылки на элемент, который следует за следующим, в текущий элемент O(1)
    if (node.next !== null && node.next.key === k) {
      if (node === l.head) {
        l.head = l.head.next;
      }
      node.setNext(node.next.next);
      return;
    }
    node = node.next;
  }
}
module.exports = removeKFromList;

// removeKFromList([3, 1, 2, 3, 4, 5], 3);
