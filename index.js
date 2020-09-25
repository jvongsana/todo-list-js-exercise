// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = (taskIndex) => {
  taskComplete[taskIndex] = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = (taskIndex) => {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
