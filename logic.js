const final = Math.floor(Math.random() * 100);

function isPrime(number) {
  if (number == 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
  }
  return true;
}

const myNumber = () => {
  const num = Number(document.getElementById("number").value);
  if (num < 1 && num > 100)
    window.alert("Please enter number between 1 to 100.");
  if (num < final) {
    document.getElementById("output").value = "Greater than " + num;
  } else if (num > final) {
    document.getElementById("output").value = "Smaller than " + num;
  } else if (num == final) {
    window.alert(`You guess it right!!! The number is : ${final}`);
  }
};

const myHint = () => {
  if (isPrime(final))
    document.getElementById("hint").innerHTML = "Prime Number";
  else if (final % 3 == 0)
    document.getElementById("hint").innerHTML = "Number is divisible by 3";
  else if (final % 5 == 0)
    document.getElementById("hint").innerHTML = "Number is divisible by 5";
  else if (final % 7 == 0)
    document.getElementById("hint").innerHTML = "Number is divisible by 7";
  else if (final % 2 == 0)
    document.getElementById("hint").innerHTML = "Number is Even";
  else if (final % 2)
    document.getElementById("hint").innerHTML = "Number is Odd";
};

