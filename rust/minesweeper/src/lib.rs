pub fn annotate(minefield: &[&str]) -> Vec<String> {
    //empty minefield
    let builder = String::from("");
    for string in minefield {
        builder += string;
    }
    println!("{:?}", builder);


    if minefield.len() == 0 { return [].to_vec() }
    //only mines no spaces

    [].to_vec()
}

struct Mine {
    adjacencies: vec![0; 9]
}