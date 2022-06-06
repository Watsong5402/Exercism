#[derive(Debug, PartialEq)]
pub struct Dna {
    dna: String,
}

#[derive(Debug, PartialEq)]
pub struct Rna {
    rna: String,
}

impl Dna {
    pub fn new(dna: &str) -> Result<Dna, usize> {
        if let Some(i) = dna.chars().position(|c| !"GCTA".contains(c)) {
            return Err(i);
        }
        Ok(Dna {            dna: dna.to_string(),
        })
    }

    pub fn into_rna(self) -> Rna {
        Rna {
            rna: self
                .dna
                .chars()
                .map(|c| match c {
                    'G' => 'C',
                    'C' => 'G',
                    'T' => 'A',
                    'A' => 'U',
                    _ => c,
                })
                .collect::<String>(),
        }
    }
}

impl Rna {
    pub fn new(rna: &str) -> Result<Rna, usize> {
        if let Some(i) = rna.chars().position(|c| !"GCAU".contains(c)) {
            return Err(i);
        }
        Ok(Rna {
            rna: rna.to_string(),
        })
    }
}
