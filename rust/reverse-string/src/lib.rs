pub fn reverse(input: &str) -> String {
    let mut output = String::from("");

    for c in input.chars() {
        output.insert(0, c)
    }
    output
}
