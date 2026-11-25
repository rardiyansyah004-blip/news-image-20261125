# Wednesday 25 November 2026 — The World in One Day

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/rardiyansyah004-blip/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/rardiyansyah004-blip/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the [make.fun bounty "Sum up 25 November's world news in one image"](https://make.fun/bounty/news-image-20261125).

One page, one day: **33 dated stories** from Wednesday 25 November 2026 —
3 lead stories, 8 illustrated stories, and 22 more in brief — across
7 regions (Asia 9, Middle East 4, Europe 6, Americas 6, Africa 3,
Oceania 4, Global 1).

Referral: https://make.fun/r/g75rgwrg

## What is on the page

- **Three lead scenes**, all drawn from scratch: Shenzhou-24 carries
  Pakistan's first astronaut into orbit; Asia's chip stocks crash as the
  AI rally reverses; two tankers burn in the Strait of Hormuz after
  hitting mines.
- **The day in UTC** — a timeline of the day's turning points, from the
  00:18 Shenzhou-24 lift-off to the 06:30 Kospi close.
- **Key numbers** — 1st Pakistani in orbit, Kospi −6.2%, 2 tankers hit,
  47,000 women killed by a partner or family member in 2025, 26 miners
  trapped in a flooded pit in Bogor, +36% garment pay rise in Bangladesh.
- **Eight illustrated stories** — the Australia–Solomon Islands security
  treaty, the UN femicide count, Huawei's guilty verdict, the Ras Tanura
  drone attack, the Bogor mine flood, Bangladesh's wage rise, the Samara
  refinery strikes, and the WHO pull-out from an Ebola zone hospital.
- **Where it happened** — a numbered world map; every pin is a story.
- **How sure** — every story carries a label: OFFICIAL (a government,
  agency or company statement), CONFIRMED (two or more major outlets),
  REPORTED (one outlet's reporting), or CLAIM (one side's word, not
  independently verified). The Hormuz tanker strikes and the Ras Tanura
  refinery fires are labelled CLAIM, because no independent source had
  confirmed them at the time.
- **Date check** — a box that says plainly which stories were first
  reported on an earlier or later day (the Huawei verdict, the UN
  femicide brief, the WHO evacuation, the Bogor flood, the Tube walkout).

Every number on the page was checked against at least two named news
sources on 25 November 2026. Sources are listed at the foot of the page.

## How it is made

`entry.png` (1024 × 1024, under 1 MiB) is drawn by a generator script
kept outside this repository — it lays out the page with PIL, draws every
scene as vector shapes (no photographs, no logos), and plots the world
map from Natural Earth's public-domain 1:110m land polygons. `main.ts`
does one thing: it copies the finished `entry.png` to `/output/entry.png`
after checking the PNG magic bytes and the size cap, so the output is
byte-identical on every run.

## Run it

```sh
node main.ts
# writes /output/entry.png (376,897 bytes at the time of writing)
```

## License

MIT — see `LICENSE`.
