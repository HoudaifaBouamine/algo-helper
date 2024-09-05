---
goal: Learn How To Jump The Line
title: 'Week #01 - Problem #02 - Jump The Line'
details: 'teach them how to print multiple lines'
slug: learn-how-to-jump-the-line
coverImage: ''
excerpt: ''
date: 2024-08-05T21:18:51.850Z
updated: 2024-08-05T21:18:51.850Z
hidden: false
tags: []
keywords: []
type: default
---

<script>import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";</script>

#### Problem #2

Write a program that print "Hello Computer Sience !!!" on the first line, and "Google Is My Best Friend" on the second line.

### First Wrong Solution

<CodeBlock lang="pascal">

```pascal
program HelloCSGoogleIsMyBestFriend;

begin
  Write('Hello Computer Sience !!!');
  Write('Google Is My Best Friend');
end.
```

</CodeBlock>

### Program Output

<CodeBlock lang="shell">

```shell
Hello Computer Sience !!!Google Is My Best Friend
```

</CodeBlock>

It is wrong because the program print "Hello Computer Sience !!!" and "Google Is My Best Friend" on the same line.

---

### First Right Solution

<CodeBlock lang="pascal">

```pascal
program HelloCSGoogleIsMyBestFriend;

begin
  Write('Hello Computer Sience !!!\n');
  Write('Google Is My Best Friend');
end.
```

</CodeBlock>

### Program Output

<CodeBlock lang="shell">

```shell
Hello Computer Sience !!!
Google Is My Best Friend
```

</CodeBlock>

### Note

The special character '\n' means "go to the next line", 

And yes, it is a 'character' even if it contains actually 2 characters.'\' and 'n' because it represent a single byte on the ASCII table, 

The 'new line' can be written as a binary number, but it can not be written as a character, because logically speaking, if it is writeable, when print it, will it jump the line or just print that character?, 

So simply they choose the '\' as the special character that give another meaning to the next letter (eg '\n' for new line, '\b' for backspace, '\t' for tab') it called 'escape character', (see __<a href="https://www.ibm.com/docs/it/ssw_ibm_i_73/rzarg/escape.htm" target="_blank">this</a>__ for more)

---

### Second Right Solution

<CodeBlock lang="pascal">

```pascal
program HelloCSGoogleIsMyBestFriend;

begin
  WriteLn('Hello Computer Sience !!!');
  Write('Google Is My Best Friend');
end.
```

</CodeBlock>

### Program Output

<CodeBlock lang="shell">

```shell
Hello Computer Sience !!!
Google Is My Best Friend
```

</CodeBlock>

### Note

Both 'WriteLn' and 'Write' print text to the terminal, but 'WriteLn' goes to the next line by default.
