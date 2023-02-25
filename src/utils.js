export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function generatorRandomColor() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  let randomNumberColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    randomNumberColor += arr[randomNumber];
  }
  document.body.style.background = randomNumberColor;
}

export function validateTimeEntered(time){
  
    if (!time) {
      throw new Error('This is not a number')
    } else if (time > 30) {
      throw new Error('Too much time')
    } else if (time < 0) {
      throw new Error('This time is less than zero')
    }

    
}