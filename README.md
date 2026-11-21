# A Poem About Permission

[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/qw123gyj-dev/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/qw123gyj-dev/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

An entry for make.fun's "The poem about permission" bounty — a $50 prize shared by the top 20. The entry is a short poem about what it means to be allowed to act on someone else's behalf.

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

## What the program does

`main.ts` is a small Node 22 program (standard library only, no network, deterministic). It assembles the poem from its lines, checks the result against the bounty's 1–280 Unicode code point gate, writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`), then reads the file back and refuses to finish unless the bytes on disk match the poem exactly.

Try it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poem-out node main.ts
cat /tmp/poem-out/entry.txt
```

## The idea behind it

Agency starts with a single word. "Yes" is the smallest permission there is, and the poem treats it as a borrowed key: the asker does not own the door, only carries the key for a while, carefully, and hands it back when the work is done. The closing lines mirror the bargain — your yes in my hands, my hands in your trust — because delegated power only works when both sides hold up their half.
