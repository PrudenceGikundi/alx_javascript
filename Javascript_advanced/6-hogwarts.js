class StudentHogwarts {
  constructor(name) {
    this._privateScore = 0;
    this._name = name;
  }

  changeScoreBy(points) {
    this._privateScore += points;
  }

  setName(newName) {
    this._name = newName;
  }

  rewardStudent() {
    this.changeScoreBy(1);
  }

  penalizeStudent() {
    this.changeScoreBy(-1);
  }

  getScore() {
    return `${this._name}: ${this._privateScore}`;
  }
}

// Create instances and interact with them
const harry = new StudentHogwarts("Harry");
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore()); // Output: Harry: 4

const draco = new StudentHogwarts("Draco");
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());