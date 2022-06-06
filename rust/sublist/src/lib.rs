#[derive(Debug, PartialEq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

use std::cmp::Ordering;
pub fn sublist<T: PartialEq>(list_a: &[T], list_b: &[T]) -> Comparison {
    match list_a.len().cmp(&list_b.len()) {
        Ordering::Less if is_sublist(list_a, list_b) => Comparison::Sublist,
        Ordering::Equal if is_sublist(list_a, list_b) => Comparison::Equal,
        Ordering::Greater if is_superlist(list_a, list_b) => Comparison::Superlist,
        _ => Comparison::Unequal
    }
}

fn is_sublist<T: PartialEq>(list_a: &[T], list_b: &[T]) -> bool {
    if list_a.len() == 0 {
        return true;
    }

    for b_slice in list_b.windows(list_a.len()) {
        if b_slice == list_a {
            return true;
        }
    }
    false
}

fn is_superlist<T: PartialEq>(list_a: &[T], list_b: &[T]) -> bool {
    if list_b.len() == 0 && list_a.len() > 0 {
        return true;
    }

    for a_slice in list_a.windows(list_b.len()) {
        if a_slice == list_b {
            return true;
        }
    }
    false
}