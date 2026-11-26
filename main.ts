// Wednesday 25 November 2026 — The World in One Day (v5)
//
// Entry renderer for make.fun bounty news-image-20261125.
//
// The picture itself (entry.png) is drawn ahead of time by a generator
// script that lives outside this repository, so the finished page is
// fixed and reviewable. This file only carries the finished PNG into
// place: it reads entry.png next to this script, checks that it is a
// real PNG, that it is exactly 1024 by 1024 pixels (the brief's cap —
// v1 gate-failed on a 1536x1536 image), and that it stays under the
// 1 MiB size cap, then writes it byte-for-byte to /output/entry.png.
// Nothing here is random, nothing reaches the network, and running it
// twice gives the same output.
//
// Run with:  node main.ts

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

function pngDimensions(bytes: Buffer): [number, number] {
  // The IHDR chunk follows the 8-byte signature: a 4-byte length, the
  // 4-byte "IHDR" type, then width (4 bytes) and height (4 bytes),
  // both big-endian. Checking the dimensions here catches at build
  // time the mistake that failed v1's gate (a 1536x1536 image).
  if (bytes.length < 24 || bytes.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("entry.png has no IHDR chunk where one is expected");
  }
  return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
}

function main(): void {
  if (!existsSync(source)) {
    throw new Error(`entry.png not found next to main.ts (${source})`);
  }

  const bytes = readFileSync(source);

  if (bytes.length > MAX_BYTES) {
    throw new Error(
      `entry.png is ${bytes.length} bytes, over the 1 MiB cap of ${MAX_BYTES}`
    );
  }

  if (!bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
    throw new Error("entry.png is not a valid PNG (bad magic bytes)");
  }

  const [width, height] = pngDimensions(bytes);
  if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
    throw new Error(
      `entry.png is ${width}x${height}, not the brief's ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`
    );
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, bytes);

  console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height})`);
}

main();
