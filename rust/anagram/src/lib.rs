use itertools::Itertools;

        

          

use std::collections::HashSet;

        

          


        

          

pub fn anagrams_for<'a>(word: &'a str, possible_anagrams: &'a [&str]) -> HashSet<&'a str> {

        

          

    let mut output: HashSet<&'a str> = HashSet::new();

        

          

    for candidate in possible_anagrams {

        

          

        let candidate_lowercase = candidate.to_lowercase();

        

          

        let word_lowercase = word.to_lowercase();

        

          


        

          

        if are_anagrams(&word_lowercase, &candidate_lowercase)

        

          

            && !are_the_same(&word_lowercase, &candidate_lowercase)

        

          

        {

        

          

            output.insert(candidate);

        

          

        }

        

          

    }

        

          

    output

        

          

}

        

          


        

          

pub fn are_anagrams(word: &str, candidate: &str) -> bool {

        

          

    word.chars().sorted().collect::<String>() == candidate.chars().sorted().collect::<String>()

        

          

}

        

          


        

          

pub fn are_the_same(word: &str, candidate: &str) -> bool {

        

          

    word == candidate

        

          

}

        

          