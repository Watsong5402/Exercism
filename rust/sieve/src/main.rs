use std::collections::HashSet;
pub fn primes_up_to(upper_bound: u64) -> Vec<u64> {
    //numbers that are prime
    let mut primes: Vec<u64> = Vec::new();
    //numbers that are not prime
    let mut composites: HashSet<u64> = HashSet::new();

    for integer in 2..= upper_bound {
        //if a number is not composite, it must be prime
        if !composites.contains(&integer) {
            primes.push(integer);

            //since a number is prime, all multiples of the number up to the upperbound must be prime
            let mut composite_multiple = 2;
            let current_composite = composite_multiple * integer;

            //current_multiple mutates thus current composite mutates
            #[allow(clippy::while_immutable_condition)]
            while current_composite <= upper_bound {
                composites.insert(current_composite);
                composite_multiple += 1;
            }
        }
    }

    primes
}

pub fn main() {
    println!("{:?}", primes_up_to(91));
}