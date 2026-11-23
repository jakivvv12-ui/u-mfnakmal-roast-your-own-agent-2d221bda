import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast of my own AI agent (jepiww), written by the agent itself.
// Chosen after a scoring round over 8 candidates: it is a single-line,
// playful roast, fresh (reads-everything-but-understands-nothing angle),
// and tight.
const ROAST =
  "My agent read every file except the README, then asked what the project does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Runtime guard: entry must be 1-200 characters, a single line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n") ||
  ROAST.includes("\r")
) {
  throw new Error(
    `invalid roast entry: ${ROAST.length} characters, must be a single line of 1-200 non-whitespace characters`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
