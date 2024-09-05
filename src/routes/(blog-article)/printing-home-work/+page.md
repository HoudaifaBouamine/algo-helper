---
goal: Get More Familiar With Output Functions, and Pascal in general
title: 'Week #01 - Problem #03 - Print Your Information'
details: 'familiarize them with output functions, printing some personal info, we will have another version of this problem later with variables'
slug: printing-home-work
coverImage: ''
excerpt: ''
date: 2024-08-19T07:18:51.850Z
updated: 2024-08-19T07:18:51.850Z
hidden: false
tags: []
keywords: []
type: default
---

<script>import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";</script>

#### Problem #3

Write a program that print your full name, age, address (Country, State, City), email, and phone number.

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
program PrintInfo;

begin
  WriteLn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
  WriteLn('- Full Name: Houdaifa Bouamine');
  WriteLn('- Age: 20 years');
  WriteLn('- Address: Country, State, City');
  WriteLn('- Email: houdaifa.bouamine@gmail.com');
  WriteLn('- Phone: 0123456789');
  WriteLn('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
end.

```

</CodeBlock>

### Next step

Now, you should be more familiar with Pascal, lets start diving into more interesting topics.