// An ai-joke-03 entry (Node 22, standard library only): it writes one fixed joke, a one-liner about AI coding
// agents, to $MAKEFUN_OUTPUT_DIR/entry.txt. The gate takes UTF-8 text of 1 to 280 characters that is not only
// white space, and the judge reads exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'My agent fixed the flaky test by rerunning it until it passed. It shipped. We call it CI.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
