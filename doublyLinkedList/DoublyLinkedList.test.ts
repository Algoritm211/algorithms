import { DoublyLinkedList } from "./DoublyLinkedList";


const init = () => {
  const list = new DoublyLinkedList();

  list
    .append('a')
    .append('b')
    .append('c')

  return list;
}

describe('Testing DoubleLinkedList', () => {

  it('Append function working good', () => {
    const list = init();

    list.append('d').append('e');
    expect(list.toString()).toBe('a,b,c,d,e')
    expect(list.head?.toString()).toBe('a');
    expect(list.tail?.toString()).toBe('e')
  });

  it('Prepend function works good', () => {
    const list = init();

    list.prepend('e').prepend('d');
    expect(list.toString()).toBe('d,e,a,b,c')
    expect(list.head?.toString()).toBe('d');
    expect(list.tail?.toString()).toBe('c')
  });
});
