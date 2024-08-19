---
title: 'Week #01 - Problem #01 - Print text on the screen'
goal: Learn how to print text on the screen
slug: learn-how-to-print-text-on-the-screen
coverImage: ''
excerpt: ''
date: 2024-08-05T19:59:37.081Z
updated: 2024-08-05T19:59:37.082Z
hidden: false
tags: []
keywords: []
type: default
---

<script>
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
</script>

#### Learn Text Output (Write, WriteLn)

---

### Problem #1

Write a program that print "Hello Computer Sience !!!"

### Final Solution

<CodeBlock lang="pascal">

```pascal
program HelloCS;

begin
  Write('Hello Computer Sience !!!');
end.
```

</CodeBlock>

### Program Output

<CodeBlock lang="shell">

```shell
Hello Computer Sience !!!
```

</CodeBlock>

### Explanation

Pascal program structure start with 'program' followed by the name of the program,

then you find the 'begin' and 'end' keywords, which represent the starting point of the program execution and the end of it (simply, when you run the program, it will start executing from the first line of code between 'begin' and 'end' and the program will terminate when the last line of code before the 'end' is executed).

### Notice 
 - You must add the '.' (dot) after the 'end'
 - You must add the ';' (semicolon) after each instruction

