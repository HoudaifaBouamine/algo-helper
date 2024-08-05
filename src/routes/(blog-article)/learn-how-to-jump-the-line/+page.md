---
title: '002 - Learn How To Jump The Line'
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

The spicial letter '\n' means "go to the next line".

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
