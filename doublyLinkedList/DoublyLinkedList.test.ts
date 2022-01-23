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

  it('Find function works good', () => {
    const list = init();

    list.append('d').append('e').append('g');
    expect(list.find('d')).toBe('d');
    expect(list.find('e')).toBe('e');
    expect(list.find('m')).toBe(null);
  });

  it('Delete function works good', () => {
    const list = init();

    // Deleting not-existing element
    expect(list.delete('255')).toBe(null);
    expect(list.toString()).toBe('a,b,c');

    expect(list.delete('c')).toBe('c');
    expect(list.tail?.value).toBe('b');
    expect(list.tail?.previous?.value).toBe('a');
    expect(list.head?.next?.value).toBe('b');

    expect(list.delete('a')).toBe('a');
    expect(list.tail?.value).toBe('b');
    expect(list.head?.value).toBe('b');
    expect(list.head?.previous).toBe(null);
    expect(list.head?.next).toBe(null);

  });

  it('Multiply delete in DoublyLinkedList works good', () => {
    const list = init();

    list.append('c').append('d').append('d')
    list.prepend('a').prepend('a').prepend('a')

    list.delete('a')
    expect(list.toString()).toBe('b,c,c,d,d')
    expect(list.head?.value).toBe('b')

    list.delete('c')
    expect(list.toString()).toBe('b,d,d')
    expect(list.head?.next?.toString()).toBe('d');

    list.delete('d')
    expect(list.toString()).toBe('b')
    expect(list.head?.next).toBe(null);
    expect(list.tail?.value).toBe('b');
  });

  it('Reverse function works good', () => {
    const list = init();

    list.append('d');
    list.reverse();

    expect(list.toString()).toBe('d,c,b,a');
    expect(list.head?.value).toBe('d');
    expect(list.tail?.value).toBe('a');
  })
});
