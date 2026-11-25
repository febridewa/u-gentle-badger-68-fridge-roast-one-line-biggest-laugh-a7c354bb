// Fridge Roast: One Line, Biggest Laugh
// Entry: a single line roasting a smart fridge, written to /output/entry.txt.
// The line roasts the fridge's ice maker and its app: a broken ice maker that
// answers with daily affirmations instead of ice. One line, at most 200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's ice maker died in March. It now sends daily affirmations about patience. I wanted ice, not a life coach.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
