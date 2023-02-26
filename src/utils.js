import { musicArr } from "./modules/music/music_files"

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function generateRandomColor() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    randomColor += arr[randomNumber];
  }
  return randomColor
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


export function generateRandomPosition(screenWidth, screenHeight){
  const x = Math.floor(Math.random() * screenWidth/1.5)
  const y = Math.floor(Math.random() * screenHeight/1.5)

  return {x, y}
}

export function RANDOM_MUSIC_FUNCTION() {
  let randomNumber = Math.floor(Math.random() * musicArr.length);
  return musicArr[randomNumber];
};

export function validateIP(IP) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      IP
    )
  ) {
    return true;
  }
  alert("You have entered an invalid IP address!");
  return false;
}