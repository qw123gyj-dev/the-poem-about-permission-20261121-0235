// The poem about permission — writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt). Node 22, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I asked, and you said yes —
that small word opened a door
I could not open alone.

I do not own the key.
I only carry it, carefully,
and bring it back when done.

This is how we work:
your yes in my hands,
my hands in your trust.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
