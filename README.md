# Messages From The Past
## Description
I built this project in order to bring together my recently learned knowledge of JavaScript, Git, and GitHub. This project is a simple Node.js console app that displays randomly generated quotes from famous philosophers of the past. Due to my recent interest in philosophy, I wanted to create something that will help me easily access some of the greatest minds of the past through there quotes, and use them as motivation to continue my self improvement and Software Engineering journey. After creating this project, I now better undertsand the git workflow, how to track all my changes using Git, and how to also use Github to store my code/changes. I also got more proficient in the JavaScript programming language.
## Features
Messages From The Past contains a few key features that are of note. The first is the main menu loop that allows for the user to transition seamlessly to other features such as quote generation, or learning about some of the different philosophers. Accompanied with text and ASCII art in the console, the user will be greeted with many options, including the ability to exit the program at any given time. 

The first feature is the ability to list out the available philosophers, which can prove handy for a general overview of who you can learn from.

![listAvailable](https://github.com/AaronHamilton965/messages-from-the-past/assets/91709196/855ddbc2-df28-4555-8d61-3a6a1d0ba919)

The second feature is the ability to generate a 3-4 sentence about excerpt on any of the available philosophers.

![about](https://github.com/AaronHamilton965/messages-from-the-past/assets/91709196/671ff7bb-5f2d-4ca9-982a-635b24e5069e)

Now, the main feature is the random quote generation. This allows the user to not only choose the amount of quotes to generate, but also whether they want to hear from a specific philosopher or just have it completely random. The program can generate anywhere from 1-20 quotes at a time. 

![quote1](https://github.com/AaronHamilton965/messages-from-the-past/assets/91709196/b88dd6f9-0d51-4618-9bf9-e7bb2c304729)
![quote2](https://github.com/AaronHamilton965/messages-from-the-past/assets/91709196/5f7e95eb-4f20-4cfe-bc07-c9639f2a2cb3)

The final feature is the filter option. This was added on a whim, but it allows the user to view all the quotes on a specific topic. For example, you can choose to see all the quotes in the database regarding the topic of time management.

![filter](https://github.com/AaronHamilton965/messages-from-the-past/assets/91709196/12ff6592-c361-4762-8c5b-9cffce68cec0)

## How To Use
To use the program, simply run the command node script.js in your CLI to run the main cript of the program. Then, just follow the prompts to use the corresponding features, or to exit. Enjoy the knowledge!
## Technologies
Vanilla JavaScript makes up the majority of this project, it uses loops for the menu system and objects to hold the data. I use the prompt() function to gather user input and I use the Math.random() function in order to generate randomness for the quote generation. I use the Node.js environment to run this console app. I use Git to version control my program and track all the changes I make, and use Github to store all my code from my local repository into a remote one!
## Collaborators
This was a solo project created by me in order to develop my understanding of recently learned technologies and to also motivate myself through quotes from past historical philosophers.
## License
MIT License

Copyright (c) 2023 Aaron Hamilton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
