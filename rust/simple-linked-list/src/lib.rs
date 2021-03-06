use std::iter::FromIterator;

pub struct SimpleLinkedList<T> {
    head: Option<Box<Node<T>>>,
}

pub struct Node<T> {
    data: T,
    next: Option<Box<Node<T>>>,
}

impl<T> SimpleLinkedList<T> {
    pub fn new() -> Self {
        Self { head: None }
    }

    // You may be wondering why it's necessary to have is_empty()
    // when it can easily be determined from len().
    // It's good custom to have both because len() can be expensive for some types,
    // whereas is_empty() is almost always cheap.
    // (Also ask yourself whether len() is expensive for SimpleLinkedList)
    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    }

    pub fn len(&self) -> usize {
        let mut len = 0;
        let mut np = &(self.head);
        while (*np).is_some() {
            len += 1;
            np = &(np.as_ref().unwrap().next);
        }
        len
    }

    //set the new next equal to the old head and replace the old head with None; element remains the same
    pub fn push(&mut self, _element: T) {
        self.head = Some(Box::new(Node {
            data: _element,
            next: self.head.take(),
        }));
    }

    //if data is empty: return None
    //else return the head and set the first girth to the head
    pub fn pop(&mut self) -> Option<T> {
        if self.head.is_none() {
            return None;
        }
        let mut to_pop = self.head.take().unwrap();
        self.head = to_pop.next.take();
        Some(to_pop.data)
    }

    pub fn peek(&self) -> Option<&T> {
        match self.head {
            None => None,
            _ => Some(&self.head.as_ref().unwrap().data),
        }
    }

    pub fn rev(mut self) -> SimpleLinkedList<T> {
        let mut prev = None;
        let mut current_node = self.head.take();

        while let Some(mut current_node_inner) = current_node.take() {
            let next = current_node_inner.next.take();
            current_node_inner.next = prev.take();
            prev = Some(current_node_inner);
            current_node = next;
        }
        self.head = prev.take();
        self
    }
}

impl<T> FromIterator<T> for SimpleLinkedList<T> {
    fn from_iter<I: IntoIterator<Item = T>>(_iter: I) -> Self {
        let mut list = SimpleLinkedList::new();
        for i in _iter {
            list.push(i);
        }
        list
    }
}

// In general, it would be preferable to implement IntoIterator for SimpleLinkedList<T>
// instead of implementing an explicit conversion to a vector. This is because, together,
// FromIterator and IntoIterator enable conversion between arbitrary collections.
// Given that implementation, converting to a vector is trivial:
//
// let vec: Vec<_> = simple_linked_list.into_iter().collect();
//
// The reason this exercise's API includes an explicit conversion to Vec<T> instead
// of IntoIterator is that implementing that interface is fairly complicated, and
// demands more of the student than we expect at this point in the track.

impl<T> Into<Vec<T>> for SimpleLinkedList<T> {
    fn into(mut self) -> Vec<T> {
        let mut vec = vec![];
        while let Some(v) = self.pop() {
            vec.push(v);
        }
        vec.reverse();
        vec
    }
}
