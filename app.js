//Part 1

//Variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantMinSpace = 0.8;
const week1Plants = 20;
const week2Plants = 40;
const week3Plants = 80;

//Plantarea
const week1Area = plantMinSpace * week1Plants;
const week2Area = plantMinSpace * week2Plants;
const week3Area = plantMinSpace * week3Plants;

//Percentage of total space
const week1Percentage = (week1Area / area) * 100;
const week2Percentage = (week2Area / area) * 100;
const week3Percentage = (week3Area / area) * 100;

function PlantStatus(percentage) {
  if (percentage > 80) {
    console.log("Pruned");
  } else if (percentage < 80 && percentage >= 50) {
    console.log("Monitored");
  } else {
    console.log("Planted");
  }
}

PlantStatus(week1Percentage);
PlantStatus(week2Percentage);
PlantStatus(week3Percentage);

//Part Two

const newStartAmount = 100;
const afterTenWeeks = newStartAmount * 2 ** 9;
console.log(afterTenWeeks);

//Total space after
const newArea = afterTenWeeks * 0.8;
console.log("The new Area is " + newArea);

//How much more space do we need
const neededSpace = newArea - area;
const newRadius = Math.sqrt(newArea / PI);
console.log("The new Radius is " + newRadius);

const newPercent = (newArea / area) * 100;
console.log(newPercent);

try {
  if (newArea > area) {
    throw "Area is too small";
  } else {
    PlantStatus(newPercent);
  }
} catch (error) {
  console.log(error);
}
