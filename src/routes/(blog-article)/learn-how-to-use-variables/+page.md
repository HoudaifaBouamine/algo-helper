---
title: '003 - Learn how to use variables'
slug: learn-how-to-use-variables
coverImage: ''
excerpt: ''
date: 2024-08-05T21:28:10.171Z
updated: 2024-08-05T21:28:10.171Z
hidden: false
tags: []
keywords: []
type: default
---

<script>import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";</script>

#### Problem #3

Write a program that takes a user's name as input and greets them with a personalized message.

### Final Solution

<CodeBlock lang="pascal">

```pascal
program GreetUser;

var
  userName: string;

begin
  Write('Please enter your name: ');
  ReadLn(userName);

  WriteLn('Hello, ', userName, '!');
end.
```

</CodeBlock>

### Program Output

```shell
Please enter your name: John
Hello, John!
```

### Explanation

1. **Variable Declaration:**

   - `var userName: string;` declares a variable named `userName` to store the user's name. The `string` type indicates that this variable can hold text.

2. **Getting User Input:**

   - `Write('Please enter your name: ');` displays a message on the screen asking the user to enter their name.
   - `ReadLn(userName);` waits for the user to type their name and press Enter. The entered name is then stored in the `userName` variable.

3. **Displaying the Greeting:**
   - `WriteLn('Hello, ', userName, '!');` creates the greeting message. It combines the text "Hello, ", the value stored in the `userName` variable, and an exclamation mark. `WriteLn` then displays this entire message on the screen.

**Key Points:**

- **Variables:** Variables are like containers for storing data in a program.
- **Data Types:** Each variable has a data type (like `string` for text) that determines what kind of information it can hold.
- **Input and Output:** `ReadLn` is used to get input from the user, and `Write` or `WriteLn` are used to display output on the screen.
- **Concatenation:** The commas (`,`) within the `WriteLn` statement are used to combine text and variables, creating a single output string.
