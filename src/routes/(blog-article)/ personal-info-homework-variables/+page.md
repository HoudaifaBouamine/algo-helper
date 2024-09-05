---
goal: 'familiarize them about using variables with printing '
title: 'Week #01 - Problem #06 - Personal Info homework with variables'
details: 'get data from the user and print it instead of hard code the info'
slug: 'personal-info-homework-variables'
coverImage: ''
excerpt: ''
date: 2024-08-19T07:27:16.581Z
updated: 2024-08-19T07:27:16.581Z
hidden: false
tags: []
keywords: []
type: default
---

<script>import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";</script>

#### Problem #5

Write a program that asks the user for their full name, age, address (country, state, city), email, and phone number, then prints this information in a well-formatted way.

### Expected Output (use your info, clearly)

<CodeBlock lang="shell">

```shell
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 - Full Name: Houdaifa Bouamine
 - Age: 20 years
 - Address: Country, State, City
 - Email: houdaifa.bouamine@gmail.com
 - Phone: 0123456789
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
```

</CodeBlock>

### Solution

<CodeBlock lang="pascal">

```pascal
program PersonalInfo;

var
  fullName, address, email, phone: string;
  age: integer;

begin
  WriteLn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  Write('Enter your full name: ');
  ReadLn(fullName);
  Write('Enter your age: ');
  ReadLn(age);
  Write('Enter your address (Country, State, City): ');
  ReadLn(address);
  Write('Enter your email: ');
  ReadLn(email);
  Write('Enter your phone number: ');
  ReadLn(phone);

  WriteLn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  WriteLn('- Full Name: ', fullName);
  WriteLn('- Age: ', age, ' years');
  WriteLn('- Address: ', address);
  WriteLn('- Email: ', email);
  WriteLn('- Phone: ', phone);
  WriteLn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
end.

```

</CodeBlock>

### Explanation

1. **Variable Declaration:**
   - We declare variables to store the user's information:
     - `fullName`, `address`, `email`, and `phone` are of type `string` to hold text data.
     - `age` is of type `integer` to hold whole numbers.

2. **Getting User Input:**
   - We use `Write` to display prompts asking the user to enter their information.
   - `ReadLn` is used after each prompt to read the user's input and store it in the corresponding variable.

3. **Printing the Information:**
   - We use `WriteLn` to print the stored information in a formatted way, combining text and variable values using commas (`,`).

**Key Points:**

- **User Input:** This program demonstrates how to get input from the user and store it in variables.
- **Data Types:** Using appropriate data types (`string` for text, `integer` for whole numbers) is crucial for storing and manipulating data correctly.
- **Formatted Output:**  We use `WriteLn` with multiple arguments separated by commas to create well-structured output.
- **Variables as Placeholders:**  Variables act as placeholders for the actual data, making the program flexible and reusable for different users.
