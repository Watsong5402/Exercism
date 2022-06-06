pub fn find_saddle_points(input: &[Vec<u64>]) -> Vec<(usize, usize)> {
    let mut output: Vec<(usize, usize)> = Vec::new();
    
    if any_vector_in_any_row_is_empty(input) {
        output
    } else {
    let number_of_rows = input.len();

    //iterate through all of the rows
    for row_index in 0..number_of_rows {
        let row = &input[row_index];
        let row_length = row.len();

        //select only the highest value in row to compare against
        let max_val_in_row = *row.iter().max().unwrap();

        //iterate through each element WITHIN the row
        for col_index in 0..row_length {
            let current_element = row[col_index];
            
            //select only if it's the lowest value in each column
            if current_element == max_val_in_row {
                let mut column_values: Vec<u64> = Vec::new();
                for row_index_agane in 0..number_of_rows {
                    let row_agane = &input[row_index_agane];
                    let value_at_col_index = *row_agane.iter().nth(col_index).unwrap();
                    column_values.push(value_at_col_index);
                }

                //if it's the highest value in row and lowest value in column, add to output
                let min_val_in_col = *column_values.iter().min().unwrap();
                if row[col_index] == min_val_in_col {
                    output.push((row_index, col_index));
                }
            }
        }
    }
    output
}
}

pub fn any_vector_in_any_row_is_empty(input: &[Vec<u64>]) -> bool {
    let mut malformed = false;
    for vector in input {
        if vector.is_empty() {
            malformed = true;
        }
    }
    malformed
}