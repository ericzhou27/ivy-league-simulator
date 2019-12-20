var acceptanceText = [];
var rejectedText = [];
var commentText = {};

var rejectionOne = `
The Committee on Admissions has completed its Regular 
Decision meetings, and I am very sorry to inform you 
that we cannot offer you admission to the class of 2024. 
I wish that a different decision had been possible, but
I hope that receiving our final decision now will be 
helpful to you as you make your college plans.

In recent years, the Committe has been faced with 
increasingly difficult decisions; nearly forty-five 
thousand students now apply for the sixteen hundred 
and sixty places in the freshman class, and the great 
majority of our applicants could certainly be successful
here academically. In addition, most candidates present
strong personal and extracurricular credentials. The 
Committee has, therefore, been faced with the necessity 
of choosing a freshman class from a great many more 
talented and highly qualified students than it has
room to admit.

We wish it were possible for us to admit more of our 
fine applicats, and we understand how difficult the 
college application process can be for students and
their families. While the Committee conducted its 
deliverations with utmost care, we know that no one can 
predict with certainty what an individual will accomplish
during college or beyond. Past experience suggests 
that the particular college a student attends is far 
less important than what the student does to develop 
his or her strengths and talents over the next four years.

We very much appreciate the interest you have shown 
in our university, and we hope you will accept the 
best wishes of the Committee for success in all your 
future endeavors.

Sincerely,

`;

var acceptanceOne = `
Congraulations! It is with great pleasure that I offer you
admission as a member of our Class of 2024. We chose you
from an extraordinarily accomplished and talented group
of Regular Decision applicants. You and your future 
classmates are truly outstanding in your talents and 
potential.

During the next few months, you'll hear from our faculty,
staff, and students about many of the exciting 
opportunities on our campus and beyond. We are confident 
that you'll contribute to our university's legacy of 
innovation and leadership.

When you are ready to respond to your offer of admission, 
please complete the Decision Response on your Common 
Application checklist as soon as possible but no later
than May 1. For more information about resident life, 
orientation, financial aid, details of your admission
and other aspects of college life, take a look at 
our Admitted Fall Freshman Checklist!

We look forward to welcoming you to our class of 2024!

Sincerely,

`;

// 0 - 3
commentText["poor"] = [
  "You clearly don't own enough Patagonia.",
  "Go buy some airpods and try again.",
  "So what's it like to be poor?",
  "Honey, the peasants are trying to get an education again",
  "te sunt non divites satis ad hoc legere",
  "Did you try asking daddy to donate more?"
];

// 4 - 5
commentText["middle"] = [
  "Ah. A republican.",
  "'I want to work at the Goldman Sachs' - you, probably",
  "'I just want to wear expensive suits as a consultant at McKinsey' - you, probably",
  "'Wealth is the product of a man's capacity to think' - you, probably"
];

// 6 - 7
commentText["rich"] = [
  "^ How many yachts your family owns",
  "^ How many houses in the Hamptons your family owns",
  "^ How many trust funds you have"
];

// 8
commentText["really rich"] = [
  "Someone knows their way around inspect element",
  "( ͡° ͜ʖ ͡°)"
];

export { commentText };
export { acceptanceOne };
export { rejectionOne };
