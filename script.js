document.addEventListener("DOMContentLoaded", async () => {
  const words = await loadWords();

  const randomButton = document.getElementById("generate-button");
  const poetryText = document.getElementById("poetry-text");

  randomButton.addEventListener("click", () => {
    const sentence = randomSentence(words);
    poetryText.textContent = sentence;
  });
});

function randomSentence(words) {
  const adjective =
    words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
  const noun = words.nouns[Math.floor(Math.random() * words.nouns.length)];
  const verb = words.verbs[Math.floor(Math.random() * words.verbs.length)];
  const adverb =
    words.adverbs[Math.floor(Math.random() * words.adverbs.length)];

  const poetry = `The ${adjective} ${noun} ${verb} ${adverb}.`;
  return poetry;
}

async function loadWords() {
  const adjectivesReq = await fetch("data/adjectives.txt");
  const adjectives = await (await adjectivesReq.text()).split("\n");
  const nounsReq = await fetch("data/nouns.txt");
  const nouns = await (await nounsReq.text()).split("\n");
  const verbsReq = await fetch("data/verbs.txt");
  const verbs = await (await verbsReq.text()).split("\n");
  const adverbsReq = await fetch("data/adverbs.txt");
  const adverbs = await (await adverbsReq.text()).split("\n");

  return {
    adjectives,
    nouns,
    verbs,
    adverbs,
  };
}
