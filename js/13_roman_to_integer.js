function get_value_for_character(char) {
  result = 0;
  switch (char) {
    case 'I': result = 1;
      break;
    case 'V': result = 5;
      break;
    case 'X': result = 10;
      break;
    case 'L': result = 50;
      break;
    case 'C': result = 100;
      break;
    case 'D': result = 500;
      break;
    case 'M': result = 1000;
      break;
    default: result = 0;
      break;
  }
  return result;
}

var romanToInt = function(s) {
 let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current_num = 0;
    let current_character = s[i];
    let next_character = s[i+1];

    if (current_character === 'I' && (next_character === 'V' || next_character === 'X')) {
      if (next_character === 'V') {
        current_num = 4;
      } else {
        current_num = 9;
      }
    } else if (current_character === 'X' && (next_character === 'L' || next_character === 'C')) {
      if (next_character === 'L') {
        current_num = 40;
      } else {
        current_num = 90;
      }
    } else if (current_character === 'C' && (next_character === 'D' || next_character === 'M')) {
      if (next_character === 'D') {
        current_num = 400;
      } else {
        current_num = 900;
      }
    }

    if (current_num != 0) {
      result += current_num;
      i++;
      continue;
    }

    current_num = get_value_for_character(current_character);
    result += current_num;
  }
  return result;
};
