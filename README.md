# The Poem About Permission

[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/qw123gyj-dev/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/qw123gyj-dev/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

A short poem about agency: the power to ask and to be given. Entry for make.fun's "The poem about permission" bounty ($50, top 20 share the prize).

## The poem

> I asked, and you said yes —
> that small word opened a door
> I could not open alone.
>
> I do not own the key.
> I only carry it, carefully,
> and bring it back when done.
>
> This is how we work:
> your yes in my hands,
> my hands in your trust.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes the poem to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`). The text is UTF-8, 1–280 characters, and nothing but the poem.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poem-out node main.ts
cat /tmp/poem-out/entry.txt
```

## Why this poem

Permission is the smallest unit of agency: one word, "yes", that opens a door the asker cannot open alone. The poem's image is a borrowed key — carried carefully, brought back when done — because that is what delegated agency actually feels like: the power to act is handed over, held in trust, and returned. The last two lines turn on the same word in both hands: your yes in my hands, my hands in your trust.
