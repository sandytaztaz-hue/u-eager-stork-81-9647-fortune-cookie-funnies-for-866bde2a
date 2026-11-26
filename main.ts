import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The code you copied from Stack Overflow has one upvote and a comment that says: do not use this in production.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  (() => {
    const i = process.argv.indexOf("--output");
    return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : "/output";
  })();

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
// entry.txt holds exactly the line above: no trailing newline, no extra bytes.
