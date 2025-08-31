// Declaring task 1 variables

let task1Title;
let task1Description;
let task1Status;

// Declaring task 2 variables

let task2Title;
let task2Description;
let task2Status;

// Using loop to prompt the user

for (let i = 1; i <= 2; i++) {
  let title = prompt(`Enter the title for Task ${i}:`);
  let description = prompt(`Enter the description for Task ${i}:`);
  let status = prompt(
    `Enter the status for Task ${i} (todo, doing, done):`
  ).toLowerCase(); // Validate the status input to allow only "todo", "doing", or "done" and convert all status inputs to lowercase.

  // Notify user if an invalid status is entered.

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");

    // Repeatedly prompt user for valid status until valid status is entered to avoid incorrect values from being stored.

    status = prompt(
      `enter the status for Task ${i} (todo, doing, done):`
    ).toLowerCase();
  }

  //  Store title, description and status in separate variables.

  if (i === 1) {
    task1Title = title;
    task1Description = description;
    task1Status = status;
  } else {
    task2Title = title;
    task2Description = description;
    task2Status = status;
  }
}
