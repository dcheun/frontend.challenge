# [Double](https://withdouble.com) · Front End engineering challenge

:wave: If you're looking for an adventure, [look no further](https://withdouble.com/jobs).

## Instructions

- To complete this challenge, you will need `npm`, `node` and `git` installed locally
- Solve each level in order
- Include the `.git` directory when submitting your solution
- Don't spend more than **4 hours** on this test
- To start the app:
  - run `npm i`
  - run `npm start`
  - open `http://localhost:8080/`
- If needed, here are the documentation links of: [React](https://reactjs.org/) and [Luxon](https://moment.github.io/luxon/index.html)

### Pointers

- Keep in mind that you are working on an existing code-base.
- Code should be clean, extensible and robust. Don't overlook edge cases.
- You will have to create some basic UI. While we're not expecting you to be a skilled designer, it should come close to the look and feel of the app. We _are_ looking for engineers with some product-sense.
- We like [emojis](https://gitmoji.carloscuesta.me/) :wink:

### Submitting your results

- Fork this repository
- Open a PR on your fork (please do not open a PR on this repo or from your repo to this repo, we don't want other candidates to see your awesome solutions)
- Share your forked repo with [@pierre-elie](https://github.com/pierre-elie), [@augustinr](https://github.com/augustinr) and [@flobories](https://github.com/flobories)

We will review your code within 3 days and will be in touch via email

Let's do this! :muscle:

## Challenge

**Double helps executives and their assistants work better together**. Managing agendas is an important part of an assistant's job, and we're inviting you to join our mission of making assistants's lives easier.

### Level 1: Agenda's title bug fix

One of our users just submitted a bug report: the agenda's title ("Good morning", "Good afternoon", etc.) does not always update as the day goes by.
Identify the source of this behavior and fix it.

### Level 2: Handle errors

It seems that, occasionally, an uncatched error happens when the account is refreshed. Make sure the error is caught and that the user is aware that the refresh failed.

### Level 3: Filter agenda events by calendar

We want to add a filtering mechanism on agenda events. The requirements for this feature are:

1. Add a select menu that will filter events by `calendar`
2. When a calendar is selected, only events from that calendar are displayed
3. By default `all` calendars are displayed

### Level 4: Group agenda events by department

Another enhancement would be to show all calendar events in one page, grouping them by `department`. Here is a quick mock-up of what the feature could look like:

<img src="https://user-images.githubusercontent.com/45558407/61964225-5f967b80-af9b-11e9-9e39-b201a5644bf9.png" width="300" />

The requirements for this feature are:

1. Add a button to toggle groups by `department`
2. When enabled, events will be grouped and each group will be clearly identified
3. In each group, events will be sorted by ascending date-time

### Questions

Please add your answers to the questions below:

1. How long did you spend on this challenge?
4 hrs.

2. In your opinion, what are features that Double could work on that would be helpful for assistants when managing agendas?
A way to communicate updates, leave notes for each task, re-schedule tasks, highlight tasks with time conflicts, etc.

3. If you had more time, what would you add or change in the codebase?
Short term changes: I would work on the styling a bit more, change the alert dialog box to a toast message, give the calendar a name field.
Long term changes: Add nav bar, create different views (calendar, week, day), be able to see past and future agendas, clicking on an event displays a modal with more information about the event.

4. Do you have any constructive feedback that you would like to share with our team?
Only thing is the length of the challenge is quite long. It is the longest take home challenge I've done by far. I also spent a good amount of time familiarizing myself with the code. It is a great challenge nontheless.
