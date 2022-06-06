use std::collections::HashMap;
use std::collections::HashSet;

pub fn brackets_are_balanced(string: &str) -> bool {
    let mut bracket_stack: Vec<String> = vec![];
    let closed_open_map: HashMap<&str, &str> = vec![("]", "["), ("}", "{"), (")", "("), (">", "<")]
        .into_iter()
        .collect();
    let open_set: HashSet<&str> = vec!["<", "[", "(", "{"]
        .into_iter()
        .collect();

    for letter in string.chars() {
        let as_string = String::from(letter);
        if open_set.contains(&as_string[..]) {
            bracket_stack.push(as_string);
        } else if closed_open_map.contains_key(&as_string[..]) {
            if let Some(top_stack) = bracket_stack.pop() {
                if let Some(candidate_open_bracket) = closed_open_map.get(&letter.to_string()[..]) {
                    if &top_stack != candidate_open_bracket {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }
    }
    bracket_stack.is_empty()
}
