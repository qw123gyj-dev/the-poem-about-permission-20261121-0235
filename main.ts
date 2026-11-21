// The poem about permission — entry program for make.fun.
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
// Node 22, standard library only, no network access, fully deterministic.
//
// The poem itself is fixed text: it is assembled from its lines below and
// checked against the bounty length gate (1–280 Unicode code points)
// before anything is written. If the text ever drifts outside the gate
// the program refuses to finish instead of handing in a bad entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;
const FALLBACK_OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

// One entry per line; empty strings are the blank lines between stanzas.
// The final empty string makes the file end with a trailing newline.
const POEM_LINES: string[] = [
  "I asked, and you said yes —",
  "that small word opened a door",
  "I could not open alone.",
  "",
  "I do not own the key.",
  "I only carry it, carefully,",
  "and bring it back when done.",
  "",
  "This is how we work:",
  "your yes in my hands,",
  "my hands in your trust.",
  "",
];

function buildPoem(lines: readonly string[]): string {
  return lines.join("\n");
}

function codePointCount(text: string): number {
  // Spread counts Unicode code points, not UTF-16 code units.
  return [...text].length;
}

function main(): void {
  const poem = buildPoem(POEM_LINES);
  const length = codePointCount(poem);

  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    console.error(
      `poem length ${length} code points is outside the ` +
        `${MIN_CODE_POINTS}–${MAX_CODE_POINTS} gate; refusing to write.`,
    );
    process.exit(1);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? FALLBACK_OUTPUT_DIR;
  const outPath = join(outDir, ENTRY_FILE);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, poem, "utf8");

  // Read back what landed on disk and confirm it is byte-for-byte the
  // poem we meant to hand in. A partial or mangled write must fail loudly
  // here, not silently become the entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== poem) {
    console.error(`verification failed: ${outPath} does not match the poem.`);
    process.exit(1);
  }

  console.log(`wrote ${length} code points to ${outPath} (verified)`);
}

main();
