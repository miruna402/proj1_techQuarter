// 4. Create a class called CustomList with these methods:
//     insertFirst(data)
//     insertLast(data)
//     getFirst()
//     getLast()

// Make sure you test the functionality by creating some objects.
// Bonus: Create a class for a LinkedList.

class CustomList {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedListReverse {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      if (!this.head) {
        this.head = new CustomList(data, this.head);
      } else {
        this.next = this.head;
        this.head = new CustomList(data, this.next);
      }
    }
  
    getFirst() {
      return this.head;
    }
  
    insertLast(data) {
      let last = this.getLast();
      if (!last) {
        this.head = new CustomList(data);
      } else {
        last.next = new CustomList(data);
      }
    }
  
   reverse(head) {
  
      let prev = null;
      let curr = head;
      let next = curr.next;
  
      while(curr) {
          next = curr.next;
          curr.next = prev;
          prev = curr 
          curr = next
      }
      this.head = prev;
      return this.head;
  
    }
  
  
  }
