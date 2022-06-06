export const encode = (input) => {
  if (input === "") { return "" }

  const letters = Array.from(input);

  let output = "";
  let count = 1;  

  for (let i = 1; i < letters.length; i++) {
    let previous_letter = letters[i-1];
    let current_letter = letters[i];

    if (previous_letter !== current_letter) {
      if (count === 1) {
        output += previous_letter;
      } else {
        output += `${count}${previous_letter}`;
      }
      count = 1;
    } else {
      count++;
    }
  }

  let last_letter = letters[letters.length-1];

  if (count > 1) {
    output += `${count}${last_letter}`;
  } else {
    output += last_letter;
  }
  return output;
};


export const decode = (input) => {
  if (input === "") { return "" }

  const letters = Array.from(input);

  let output = "";

  for (let i = 0; i < letters.length; i++) {
    let current_digit = letters[i];
    let current_digit_is_integer = Number.isInteger(Number(current_digit));

    if (current_digit_is_integer && current_digit != ' ') {
      let next_digit = letters[i+1];

      let next_next_digit = letters[i+2];

      let next_digit_is_integer = Number.isInteger(Number(next_digit));

      let total_to_increment = current_digit;

      let actual_letter = next_digit;

      if (next_digit_is_integer && next_digit != ' ') {
        total_to_increment = total_to_increment;
        total_to_increment += next_digit;
        actual_letter = next_next_digit;

        i++;
      }

      if (actual_letter) {
        output += actual_letter.repeat(total_to_increment);
      }
      
      i++;

    } else {
      output += current_digit;
    }
  }

  return output;
};