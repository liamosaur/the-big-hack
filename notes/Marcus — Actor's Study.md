---
type: character
title: Marcus — Actor's Study
medium: live
tags:
  - character
  - marcus
---

# Marcus — Actor's Study

Personal notes for playing Marcus. Read off `stage/show.json` on the `cleanup/editor-presenter` cut (script revision `shared-9c18c7b039534db4`). Open cues in the editor at `http://localhost:8040/editor.html` after `python3 stage/serve.py`; Find searches the whole script, so the cue IDs below are the fastest way in.

**Liam is now SJ.** The rename is deliberate and agreed with the authors: the dialogue and stage directions all say SJ, while the `speaker` key in `show.json` stays `liam` so the existing recordings don't invalidate. Don't "finish" the rename.

**The writers' bible is not in the repo any more.** The cleanup pass removed `CLAUDE.md`, `00 - Production/`, `01 - Characters/`, `02 - Story/` and `03 - Script/`. The Marcus brief, the mirror map, the thesis note and the escalation pass are all still readable from history:

```sh
git show 7ee71c7:"01 - Characters/Modern World — Supporting.md"   # the long Marcus section
git show 7ee71c7:"01 - Characters/Character Mirror Map.md"
git show 7ee71c7:"00 - Production/Concept & Thesis.md"
git show 7ee71c7:"00 - Production/Rework — The Escalation Pass.md" # §A1 and §B are his
```

Background research that survived the cleanup is in `research/` — `research/Luddites — History.md` is the one that matters for him, and it still carries the myth ban his wrong-details material depends on.

**Casting:** Marcus is live, with an Australian accent, playing an Australian working in the Valley. Kristina is live in practice — all six of her lines in the new final scene carry the direction "live" — but `show.json` still has her cues as `kind: voice` and `liveCast` as `['brendan','liam','marcus']`. Worth a comment to the authors; it changes the temperature of every standup he talks over.

**Footprint:** 87 lines across eight scenes — s19 (20), s22 (15), s23b (15), s11b (13), s01 (8), s06 (7), s23 (5), s25 (4). Second only to SJ and Brendan, in every movement, and he closes the show.

> [!note] Cue IDs vs scenes
> `s14a` is no longer a scene. The old "Checking In" three-hander was merged into **s19 Nine Tickets**, but its cues kept their `s14a_` prefix. So `s14a_l28` is a cue *inside s19*. Every `s14a_*` ID below is in s19.

## 1 — Impression

### What he wants

He wants the record to show that he said it. Not to be agreed with, not to win, and conspicuously not to help — he wants a minute filed somewhere with his name against it. The play states it in his own words four times, in four rooms, and the rooms get worse:

- **s01_l47** — "I'd just like it noted that somebody said something." (a standup nobody is minuting)
- **s11b_l30** — "I want it noted that I flagged it." (the same standup, months later)
- **s22_turn** — "Okay. Two minutes. Security did an all-hands about it. I'm keeping notes, by the way. Somebody should." — and then **s22_backdoor**: "I said this. A backdoor can be one character long. I want it noted I said that in March."
- **s23_l24** — "Before I answer that, I want it noted that it took the British parliament eleven months…" (a federal courtroom, under oath, as a prosecution witness)

That is the spine of the part. Play the want, not the politics. The politics are how the want comes out.

And the new cut closes the loop on it, in one narrator line at **s22_l72**: "The police came back later for the computers, the Mac Studio included. **Marcus's notes were in evidence by Friday. So was the call.**" The compulsion to get things noted is what supplies the evidence. The only three places his words were ever properly written down and read back are an anonymous peer feedback form, his own notes, and a court transcript — and all three were used against the man he was defending.

### What he is like

Right, and insufferable about it, and completely unaware those are connected. The analysis is genuinely correct — about who captures the gains (s11b_l10, s11b_l12), about the layoff having no appeal surface (s14a_l16 through s14a_l20), about the one-character backdoor (s11b_l21, and he is proved right at s22_backdoor). He is also the man who talks over Kristina in three consecutive standups while presenting himself as the person who defends her (s01_l42 through s01_l47).

Three things to hold in the body:

- **Procedural, not angry.** His weapon is the flag, the note, the point of order. s06_l5 — "Sorry, can I say one thing that isn't a ticket? It's quick." He asks permission and then doesn't wait for it. Constant volume; never rude enough to sanction.
- **Faintly pleased with himself.** He enjoys knowing things — the Luddites, John Henry, the air traffic controllers, York. He brings receipts to a standup. There is a small lift in him every time he gets to say a number.
- **Warm, actually.** Twice he says SJ is the best engineer he's worked with and means it both times (s14a_l43, s23_l32). He offers to pass the CV around (s14a_l45) and doesn't — the direction at s14a_l47 is "He does not send anything to anybody and neither does SJ." He is not a shit; he is a man whose concern always resolves into a performance of concern.

The register to get exact is *politically correct in content, self-serving in performance*. If you play him as a hypocrite the audience writes him off in Movement I and the ending stops working. Play him sincere and let the audience notice, on their own, that being sincere is not the same as being useful.

Two small gifts in the new text. **s06_l3** now ends "(flatly) Hoo - ray" — a dead-flat delivery that is free in an Australian mouth and tells you the whole character in two syllables. And **s01_l20** was rewritten from "the AI is coming for our jobs" to "SJ, have you not been reading the articles on the new Opus? It's literally the end of software engineering as we know it." That's a shift from prophet to terminally-online, and it's a better first impression of him: he isn't ahead of the room, he's just read more posts than it has.

### The Kristina test

s01_l42 through s01_l48 is his whole character in five lines, and it is where a new audience decides what he is. SJ has just asked Kristina whether she's qualified to have an opinion. She has been left with dead air. Then:

> **s01_l42** MARCUS *(level, unhurried, taking his time about it)*: "SJ, you just asked a woman on this call whether she's qualified to have an opinion. In front of everyone."
> **s01_l43** SJ: "I'd have asked you the same thing. It wasn't just an opinion, Marcus. She had the authentication changed. That should have come back to the team."
> **s01_l44** MARCUS: "That isn't the point. The point is who tends to get asked."
> **s01_l45** *(stage)*: "And KRISTINA comes back. Not to deal with SJ. To deal with the man defending her."
> **s01_l46** KRISTINA *(bright, quick)*: "It's fine. Thank you, Marcus. Let's keep moving, we're over time already."
> **s01_l47** MARCUS *(finishing it anyway)*: "I'd just like it noted that somebody said something."
> **s01_l48** *(stage)*: "She lets that sit for a second... Marcus spoke out to give himself credit.."

He's correct. He's the only person who says anything. And the effect is that the moment stops being about her and becomes about him. Play it level and sure you're doing a good thing — not for sympathy, not as a bit. Now that Kristina is live, notice that she has moved on, and finish the sentence anyway.

## 2 — Arc

The old bible called him "a deliberate fixed point — identical in scene 2 and scene 20 while the world moves under him." In this cut that is half true, and the half that isn't is the interesting half.

### What is genuinely fixed: the method

The rhetorical machine never changes. Ask for a minute, get refused, take it anyway, cite history, ask to have it noted. What changes is only the chair refusing him, and that escalation is the real structure of the part:

| Scene | Who shuts him down | The line |
|---|---|---|
| s01 | Kristina | "Marcus, thank you for your input... but can we get through standup" (s01_l29) |
| s06 | Kristina | "OKAY! Marcus, you got your word in, thanks." (s06_l16) |
| s11b | Kristina | "Marcus I just want ONE STANDUP where we get through without…" (s11b_l37) |
| s23 | a federal judge | "Mr. Ehrlich. You are here to answer questions. Not to lecture us." (s23_l27) |

s23_l27 is the standup line with the volume turned up and the consequences attached, and the direction on it is "entirely without irony." Kristina gets to say the quiet part from the gallery — "It's kind of fun to watch him interrupt someone else for a change" (s23_l30) — which invites the house to enjoy watching him get it, about forty seconds before the prosecutor reads his peer review aloud. That trap is the best thing in the part. It only springs if the first three shutdowns have been earned, so resist the urge to make him endearing early.

### What is not fixed: the position

The content moves, and nothing in the surviving notes flags it. In s01 and s06 he is the anti-displacement man. By s11b he has merged three PRs he did not read and says the model reviews better than he does (s11b_l17). SJ catches it — "You were telling us to fight the machines a couple of months ago. Now you're telling me to let one do my job?" (s11b_l7) — and Marcus does not answer; he changes the subject to the Chinese weights (s11b_l19).

The new cut sharpens this. The replacement for the old s11b_l6 (now `cue_f611e6705148485ca6a655ac76b1c164`) opens "Oh right, I'm the problem for actually getting my work done. The CEO literally released a memo last week about how if we don't adopt these tools, the company will collapse or whatever" — so he is now explicitly hiding behind the mandate while still doing the Luddite speech. Same breath, both positions.

So he is not a fixed point. He is a fixed *voice* over a position that has quietly capitulated, and the rhetoric stays intact because the rhetoric is what he is actually attached to. The narrator confirms the mechanism from the other side at **s19_l20**: "The layoffs came down to one number: Jira tickets closed. Code reviews weren't tickets. **Marcus files everything.**" The solidarity talk and the ticket hygiene are the same man on the same morning.

This is the most useful thing in the part, because it gives you somewhere to go without breaking the no-arc rule. Movement I Marcus believes he is in a fight. Movement II Marcus is already on the winning side and has not noticed. Do not signal it. Let s11b_l7 land on him and then move past it slightly too fast.

### The place the diagnosis runs out: s19

s14a_l40 through s14a_l43:

> **MARCUS**: "I want you to be angry about it."
> **SJ**: "At who?"
> **NARRATOR** (s14a_l42): "MARCUS does not have an answer but he tries to give some targets regardless."
> **MARCUS**: "At OpenAI and Anthropic! The system! Not the code or whatever it is you always seem to obsess about... - sigh - I've got a thing at five."

Note what this cut did to the beat. The old narrator line was "MARCUS does not have an answer, and it is the only time all night he doesn't" — a crack, a moment of exposed vulnerability. It now reads "but he tries to give some targets regardless," which is less sympathetic and more honest about him: he has no answer and he names enemies anyway. So don't play the pause as a wound. Play a man reaching for a name, any name, and landing on the two available nouns because they are the two available nouns — and then leaving, with the same excuse SJ will later use on him.

That excuse is worth tracking, because it goes around three times. Marcus uses "I've got a thing at five" to escape SJ here. SJ uses "I've got a thing at eleven Marcus" to escape him at s22_l8, over a narrator line confirming he had no thing at eleven. And Kristina uses "I've got a thing at eleven" to escape Marcus in the last scene (s25_l17). Whoever is winning gets the thing at eleven.

### What s22 does now, and it is a different scene

The arrest was rewritten and his biggest beat in it is gone. There is no raid: the direction is "Three knocks at the door. Polite. Unhurried," and the officer says "SJ? It's the police. Could you come to the door for us, please?" His panic lines — "I said this! I said this was going to happen." / "THIS IS IT SJ! I TOLD YOU!" over "Nobody in the room hears him" — are **cut**, and so is the lawyer line. s22_l73 is now one sentence: "…I'm sorry, SJ."

What replaces it is harder to play and much better. He is the one who brings SJ the information, piece by piece, and walks him into the confession:

> **s22_backdoor**: "They think the Chinese got in. A backdoor, through one of the AI tools. I said this. A backdoor can be one character long. I want it noted I said that in March."
> **s22_key**: "Some old API key. It still worked."
> **s22_unlocked**: "They said it was running some unlocked Chinese model. The safety stuff taken out."
> **s22_not_good**: "SJ, it's not a good thing."
> **s22_who_built**: "So who built it?"
> **s22_yours**: "…Yours."
> **s22_sorry**: "I'm sorry, SJ. I didn't want to get wrapped up in any of this. I don't know what else to do."

Three notes on playing it. First, he is **not** accusing him — he is frightened and out of his depth, and "…Yours." is the one place in the play where he says something short and means all of it. Second, "I'm sorry" lands twice, at s22_sorry and again at s22_l73, and they are different: the first is *sorry I'm the one telling you*, the second is *sorry about all of it*. Third, the apology at s22_sorry comes **before** the knock — SJ asks "Sorry for what?" and never gets an answer, because the police arrive. He is apologising for something he has not worked out yet. He still hasn't by the end of the play.

### Where he ends: s25, and he closes the show

The new final scene is **s25 Great News**, nineteen cues, and Marcus is the last person on stage with the last line of the play. Fifteen years on, technology unlawful for ten, and he is at a wooden handloom:

> *(stage)* "A workroom with a window in it. Marcus is working on a wooden handloom, weaving."
> **s25_l4** *(live, to the audience, and nobody stops him)*: "Two up, two down. Two up, two down. Two up, two down…"
> **s25_l5**: "A yard and a half on a good day....."
> KRISTINA, with a folder: "Marcus! Hi. Sorry. Have you got a minute? **It's quick.**"
> **s25_l9**: "All I have is time these days, of course, what's up?"
> KRISTINA: "Steam powered machines are allowed again!" … "Brendan's got his hands on a steam powered loom!… **Most of his weekend went into it.**" … "And he's out-produced the whole team. The feedback on his garments has been incredible. **Best week we've had in ages.**"
> KRISTINA *(already at the door)*: "God, though. Imagine the whole team moving like that. **I've got a thing at eleven**, I'll talk to you later!"
> **s25_l19**: "….WHAT THE F"

It is the cold open replayed with him in SJ's chair, and almost every line in it is one he has already heard. The echoes are close to verbatim:

| Cold open | s25 |
|---|---|
| s01_l5 — "I wanted to give some praise" | s25_l14 — "I wanted to give some praise, because this bit is genuinely lovely" |
| s01_l5 — "the feedback's been incredible" | s25_l15 — "The feedback on his garments has been incredible" |
| s01_l5 — "Best launch we've had in ages" | s25_l15 — "Best week we've had in ages" |
| s01_l6 — "put most of his weekend into getting it over the line" | s25_l14 — "Most of his weekend went into it" |
| s06_l5 / s06_l7 — his own "It's quick" | s25_l8 — "Have you got a minute? It's quick." |
| s22_l8 — SJ's "I've got a thing at eleven Marcus" | s25_l17 — "I've got a thing at eleven, I'll talk to you later!" |

And the direction at s25_l4 — "and nobody stops him" — is three movements of interrupted standups paid off in four words.

So the arc is no longer *exposure*. The play ends by **making him the Luddite**, literally, and handing him the curtain. For the actor that changes two things. First, s25_l4 has to be played completely content — he is not suffering at that loom, he has finally got the world he said he wanted, and the horror is that he is about to lose it the same way SJ did. Second, the last line is a cut-off profanity from an Australian in a workroom, so the accent is the last thing the audience takes out of the theatre. Don't play the gag; play the man who has just been told the thing he has been warning about for fifteen years is coming back, by someone who thinks it's good news, and who then leaves.

The narrator's verdict still stands, at s24_l36, in a scene he isn't in: "Marcus was right. The system brought us here. Not any one person." He never hears that either.

> [!warning] The guard rail
> From the old brief (§B of the escalation pass): every time he is right, he should also be doing something small and unbearable. A Kiwicon crowd will want to adopt the one man who called it, and half the room has been him in a standup. Keep making that uncomfortable. Never let him be the only person in the room behaving well.

## 3 — The peer review, and what he does and doesn't learn

This is the thesis of the play, and in this cut it has **no scene of its own.** The scene that used to carry it (`12 - Below Expectations`, where he filled in the form on stage) is not in the show. It now arrives entirely as report, in four places:

1. **s11c_l34**, Brendan to Kristina — "Marcus told me that he did his peer feedback, **the anonymous one**, and most of it was about how SJ was slowing down the team... And if I'm being honest, I said the same thing on mine."
2. **s19_l20**, narrator — "The layoffs came down to one number: Jira tickets closed. Code reviews weren't tickets. Marcus files everything."
3. **s14a_l31**, narrator, flat, mid-scene — "Marcus doesn't mention his anonymous peer feedback. Most of it was about SJ being a problem."
4. **s23_l33 / s23_l36 / s23_l37** — the prosecutor reads it into the record and asks him if he wrote it.

Two changes here matter. s19_l20 is **stronger** than the line it replaced and it now sits in the same scene as your block, a few cues after you leave. But s14a_l31 is **weaker**: it used to read "Marcus doesn't realize SJ was also on a performance improvement plan… ironically, in part because of what he put in his peer reviews," and the causal link to the number has gone. See §5c — restoring that clause is the highest-value content note in this document.

**What this means for you in s19.** s14a_l31 fires in the middle of your block, right after s14a_l30. From that line on the house knows and Marcus doesn't, and no other actor is carrying it — SJ doesn't know, Brendan doesn't know. It is entirely in how you play the next few cues, which are him being right and kind:

> **s14a_l18**: "So you can't check it."
> **s14a_l20**: "SJ. That's not a process. That's a thing that was done to you."
> **s14a_l30**: "It's not the weaving thing! it's your thing. Four years, right? Four years of good reviews and no bugs and there's no line on their sheet where that goes, because the entire point of it is that nothing happened."

He is talking about a sheet he helped fill in and he must not suspect it for one second. Zero self-protection in the voice. One flicker of doubt and the scene becomes about guilt, which loses the point: nobody in this play ever finds out what they did.

One upside of the merge into s19 — Brendan now has real lines inside your block (`s14a_brendan_asked`, `_demo`, `_opposite`, `_nobody`, `_formula`, `_weeks`). He breaks up the two-insufferable-men stretch that the old scene had, and `s14a_brendan_demo` ("The CEO was on. He put a fucking rocket emoji in the chat. A month later I'm fired.") gives you someone to be right *at* who isn't SJ.

**What he learns in s23.** He learns he wrote it. He does not learn what it did.

> **s23_l33** PROSECUTOR: "I'd like to read a line from the company's half-year peer input summary for the defendant. *'SJ is constantly slowing down work and utilizing rogue AI models that will probably get us hacked by the Chinese. I honestly wonder if he is working for the CCP or something'*"
> **s23_l35** *(stage)*: "MARCUS does not react."
> **s23_l36** PROSECUTOR: "Is this what you wrote in your evaluation of Mr. Mikurchan?"
> **s23_l37** MARCUS *(after a moment, honestly)*: "…I mean. Yeah, but we were told that nobody would be able to see the raw feedback..."

Read the answer closely: **his objection is to the channel, not the content.** He isn't defending the words and isn't ashamed of them; he's complaining that a process wasn't followed. The man who spent a year demanding that things get formally noted has just found a system that notes things properly, and his complaint is that it worked. Best line he has. Underplay it — no shame, no apology, a small procedural grievance and a shrug.

Then s23_l40 is him still litigating the s11b argument on the stand, in a case where the man faces a hundred and fifty-one years. He has connected nothing to anything. And by s22 he has been proved right about the one-character backdoor and it has cost his friend everything, which he also does not connect.

## 4 — Playing him Australian

Nothing in the part fights it. His register — flat, procedural, aggrieved, constant volume, never quite rude enough to sanction — is at least as available in Australian English as in American, and "I want it noted that I flagged it" is arguably more natural delivered dry and Australian.

Two things to watch:

- **Aussie vowels, not Aussie irony.** Australian delivery reflexively undercuts its own sincerity — the self-deprecating tag, the rising terminal, the "yeah, nah." Marcus has none of that and cannot have any of it. He means every word, unhedged, and the humour comes from the room's reaction rather than from him being in on it. Let the natural self-deprecation in and he becomes likeable, and the ending stops working.
- **Don't let the accent become the joke** — except at s23b_l17 and s25, where it is doing real work.

What it buys the part for free:

- He is an outsider lecturing Americans about their own labour history, which makes both the lecturing and the dismissing more legible.
- In s23, an accent in a US federal courtroom being told it is here to answer questions and not to lecture sharpens the beat at no cost.
- **s23b_l17** is the gift: "Do you know what life was like in Australia for the Luddites who got caught but weren't hung? Some say the hanging was the better option." An Australian saying that, to an American, about transportation — in a play whose narrator has already told the house at s14a_l24 that "around 70 were sent to Australia." Take your time on it.
- The author has independently moved the same way: the new `cue_f611e6705148485ca6a655ac76b1c164` ends "maybe you'll just end up like one of the luddites and get sent to an **Australian work camp**." That's a second transportation reference in his mouth, unprompted, and it means the casting is already pulling the writing.
- **s25** puts an Australian accent on the last line of the play, at a handloom. That is the single strongest argument for the casting and it was not written for it.

## 5 — Wording, triaged by how to submit it

Sorted by route rather than by category: what to fix directly in the editor, what to send as a PR, and what to raise as a comment.

### 5a — Spelling and typos — **applied**

All of these are fixed on the **`edits/spelling-typos`** branch, as the single commit `7e8416a`. That branch is cut from `cleanup/editor-presenter` and touches only `stage/show.json`, so it opens as a clean one-commit PR. This branch carries these notes and nothing else — the two never mix. Kept here as the record of what changed.

Fourteen real misspellings — wrong in any dialect. US-vs-Australian spelling is not listed anywhere in this document: it's a spoken script, so it can't be heard.

**In Marcus's lines:** `s11b_l8` reconize → recognise · `s11b_l10` crapy → crappy · `s14a_l28` dissapeared → disappeared · `s23b_l14` Manggioni → Mangione.

**Elsewhere:** `s01_l2` effeciently (Kristina) · `s11b_l4` simialrly (Kristina) · `s06_l21` immedietly (SJ) · `s19_l8` togehter (SJ) · `s23b_l15` electicity (SJ) · `s20_l56` grogy (narrator) · `s01b_narrator_promotion` acheive (narrator) · `s23_l16` judget (stage direction) · `s06_l25` outloud → out loud (stage direction) · `cue_8b356c29…` "Dissapointed and slightly embarrased" (direction field).

Seven more that aren't spelling but are unambiguously broken: a lowercase "i" in `s11b_l8`, a missing "of" in `s23b_l14`, a missing "the" in `s23b_l4`, a run-on sentence in `cue_f611e67…`, a lowercase "it's" after an exclamation mark in `s14a_l30`, and missing hyphens in "single handedly" and "over eager" in `cue_89978fb…`.

> [!note] Regeneration cost: six lines, not fourteen
> Editing spoken text makes that cue's recording ineligible, but most of these cues were **already** stale. The manifest in `stage/generated-voices.json` is from `author-pass-2026-09-12`, and the cleanup branch's SJ rename rewrote 150 cues, so 157 cues across the script already read "needs generation" before any of this.
>
> Of the 18 cues changed here, 10 were already stale and 2 are silent stage cues. Only **six** went from "ready" to "needs generation": `s11b_l4` (Kristina), `s19_l8` and `s23b_l15` (SJ), `s20_l56` and `s01b_narrator_promotion` (narrator), and `s23b_l4` (Marcus). Script-wide the count moved 566 → 560 ready.
>
> Worth knowing: **all four of Marcus's misspellings were already stale**, so fixing them cost nothing at all.

### 5b — PR it (wording swaps: a word changes, the meaning doesn't)

| Cue | Current | Suggested | Why |
|---|---|---|---|
| `s23b_l10` | "No **dude**. You're not signing that." | "No, **mate**." | The most American word left in his part. |
| `s14a_l45` | "I'll share it with **folks** I know that are hiring." | "…with **people** I know **who** are hiring." | "Folks" is the one nobody will flag. |
| `s22_l5` | "They're putting you **guys** down." | "They're putting **the two of you** down." | Optional — "you guys" is common enough in Australian English now, but he has just said "two of you" in the same breath, so this also removes a repetition. |
| `s11b_l10` | "At least when they finished the **railroad**, they'd built a railroad." | "**railway**" | He's speaking generally here, not about the American railroad; an Australian would say railway, and the joke survives intact. Worth trying both in the room. |
| `s11b_l15` | "Everyone is political SJ except all you're going to do is waste time upsetting your boss…" | needs at least "Everyone is political**,** SJ**.** All you're going to do is…" | The syntax is garbled rather than colloquial. |

**No longer an issue:** `s22_l73` used to be "Liam, **buddy**… **Dude**, they're gonna fuckin hang you!" — two of the most American words in the script. The s22 rewrite replaced the whole line with "…I'm sorry, SJ." Nothing to fix.

**Keep John Henry** (`s06_l13`, `s06_l15`, and the callback in `cue_f611e67…`). He's a labour-history obsessive living in the United States; knowing the ballad is in character, and "railroad tracks" / "rail spikes" are correct for the American subject.

### 5c — Comment it (content changes that want the authors' agreement)

- **Restore the causal clause in `s14a_l31`.** It now reads "Marcus doesn't mention his anonymous peer feedback. Most of it was about SJ being a problem." It used to tie that feedback to the performance plan and the number. Without the link, the single most important piece of dramatic irony in the play fires as a fact rather than a consequence — and it fires inside the one scene where the actor has to carry it alone. **Highest-value note in this document.**
- **`s06_l9` is wrong and nobody corrects him any more.** "In the 1700's they invented these power looms driven by steam…" — steam-driven power looms are an early-1800s thing and the Luddites are 1811–13. The whole wrong-details-right-shape device depends on the correction happening on stage; compare s01_l22, where the narrator corrects him immediately at s01_l23. Worse, the new `s06_l13` has him open with "SJ, ugh, that's not even true!", so he now *rejects* correction instead of receiving it. Either give the error a correction or make the error smaller.
- **Swap the air traffic controllers at `s14a_l32`.** "The air traffic controllers, eleven thousand of them, fired in a week, replaced, and told they'd never be hired back. And the planes kept flying. Mostly." That's PATCO, 1981. Two Australian alternatives fit his argument better, not just more plausibly: the **1989 pilots' dispute** (mass resignation, the air force flew civilian routes, the pilots were effectively blacklisted from the industry — "told they'd never be hired back… and the planes kept flying. Mostly" maps almost word for word, and it keeps the aviation image), or the **1998 waterfront dispute** (an entire unionised workforce sacked overnight and replaced with trained non-union labour; stronger image, closer to his "they don't need a good reason to remove anyone" at s14a_l23). Either lands harder on a Wellington audience. My pick is the pilots. **Check the figures before staging** — `research/` is marked verify-before-staging throughout and I haven't checked these against a source, so treat the numbers as a starting point, not copy.
- **`s22_l3` breaks three of the writing rules in `AGENTS.md` in one line.** "Nobody in the history of the world has ever been frightened by a machine… the luddites didn't hate the machines, they hated the system that enabled them... they hated what the system did to them" — an aphorism formula, a "not X but Y" construction, and a three-beat repetition. It's also the most screenshot-able thing he says, which the old brief said to cut on sight. Worth proposing something concrete and smaller.
- **`s11b_l12` is a tweet.** "I want one person at this company to say out loud who the speed is actually for. Because it isn't me." Genuinely a great line; the old brief's note on this exact beat was "kill any line that could be a tweet." Raise it rather than cutting it — I wouldn't lose it without a fight, but it's the authors' rule.
- **Trim `s14a_l28`.** His longest speech, and the one place he sounds *written*: "this sort of **agency** in their work and this craft" and then "all of that **agency**, and understanding, and happy crafting of shirts." The ending rescues it; the middle is abstract. Suggest cutting toward the concrete (the rate, the twenty years) and dropping "agency" entirely.
- **`s23b_l4` and `s23b_l26` say the same thing twenty lines apart** — "we won't repeat the mistakes of the past, we can do better this time" and "We can change things this time around." Pick one.
- **`liveCast` and Kristina's `kind`.** Six "live" directions in s25 against `kind: voice` and a `liveCast` that doesn't list her. The file disagrees with the staging.

### 5d — Leave alone (and watch that a later pass doesn't "correct" them)

| Cue | Line | Note |
|---|---|---|
| `s14a_l45` | "Send me your **CV**" | Not "résumé". |
| `s23_l24` | "a hanging **offence**" | Keep the construction. |
| `s23b_l16` | "The **share price** went up after the statement, I checked." | Not "stock price". |
| `s23b_l23` | "**I'm not being funny about it.**" | Doesn't exist in American English, and it's the phrase the old brief gave him for the cut peer-review scene. It survived into this cut here. Keep exactly. |
| `s11b_l36` | "**With respect**, it often seems like…" | The politest possible way to start an accusation. |
| `s23b_l17` | "Do you know what life was like in **Australia** for the Luddites…" | Lean in. |
| `cue_f611e67…` | "…get sent to an **Australian work camp**" | Keep. |
| `s14a_l2` | "This is a terrible app. What the hell is **Jit SEE**?" | Flat delivery is the joke. |
| `s06_l3` | "(flatly) **Hoo - ray**" | Keep the spacing; it's a delivery instruction. |
| `s22_l3` | "get paid **shit** like the rest of the peasants" | Fine as is (the rest of that line is in 5c). |
| `s22_yours` | "…**Yours**." | Don't let anyone expand this into a sentence. |
