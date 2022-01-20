import { LinkedList } from './LinkedList';

const init = () => {
  const list = new LinkedList();

  list
    .append('1')
    .append('2')
    .append('3')

  return list;
}

describe('LinkedList test', () => {

  it('Append works good', () => {
    const list = init();

    list.append('4');
    expect(list.toString()).toBe('1,2,3,4')

    list.append('5');
    expect(list.toString()).toBe('1,2,3,4,5')

  });

  it('Prepend works good', () => {
    const list = init();

    list.prepend('5');
    expect(list.toString()).toBe('5,1,2,3')

    list.prepend('6')
    expect(list.toString()).toBe('6,5,1,2,3')
  });

  it('Prepend with empty list works good', () => {
    const list = new LinkedList();

    list.prepend('Rolls-Royce');
    expect(list.head?.value).toBe('Rolls-Royce');
    expect(list.tail?.value).toBe('Rolls-Royce')
  });

  it('Find works good', () => {
    const list = init();

    expect(list.find('3')?.toString()).toBe('3');
    list.append('42').append('12');
    expect(list.find('12')?.toString()).toBe('12');
    expect(list.find('555')).toBe(null);
  });

  it('Delete works good', () => {
    const list = init();

    // Deleting not-existing element
    expect(list.delete('255')).toBe(null);
    expect(list.toString()).toBe('1,2,3');

    expect(list.delete('3')).toBe('3');
    expect(list.tail?.value).toBe('2')

    expect(list.delete('1')).toBe('1')
    expect(list.tail?.value).toBe('2')
    expect(list.head?.value).toBe('2')

  });

  it('Multiply delete works good', () => {
    const list = init();

    list.append('3').append('4').append('4')
    list.prepend('1').prepend('1').prepend('1')

    list.delete('1')
    expect(list.toString()).toBe('2,3,3,4,4')
    expect(list.head?.value).toBe('2')

    list.delete('3')
    expect(list.toString()).toBe('2,4,4')
    expect(list.head?.next?.toString()).toBe('4');

    list.delete('4')
    expect(list.toString()).toBe('2')
    expect(list.head?.next).toBe(null);
    expect(list.tail?.value).toBe('2');
  });

  it('InsertAfter function works good', () => {
    const list = init();

    const prev = list.find('2');

    list.insertAfter('42', prev);
    expect(list.toString()).toBe('1,2,42,3');
    expect(list.tail?.value).toBe('3');

    list.insertAfter('777', list.tail);
    expect(list.toString()).toBe('1,2,42,3,777');
    expect(list.tail?.value).toBe('777');
  })
});
