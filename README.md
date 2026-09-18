# FancyLs

## Section 1 - Command Description

FancyLs is a simple Node.js command-line tool based on the ls command.

The normal ls command shows the names of files and folders. My FancyLs adds an extra feature by showing the full path of each file and folder.

### How to Run

Run the program using:

node example.js .

The dot (.) means the current directory.

### Commands Used

My tool extends the ls command by adding the ability to show the full path of each file and folder.

## Section 2 - AI-Assisted Programming

I asked AI to help me understand how the ls command works and how I could make it better.

AI helped me understand how to use fs, path, and process.argv. AI also helped me think of test cases, such as using a real directory and a directory that does not exist.

I had to run and test the program myself and make changes to my code.

One thing AI did not fix was what happens when I enter a directory that does not exist. My program showed an ENOENT error. I learned that this error happens when Node.js cannot find the directory.
