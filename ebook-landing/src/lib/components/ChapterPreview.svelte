<script lang="ts">
  let chapterData = [
    {
      number: 1,
      title: "Navigation spain",
      strapline:
        "Discover how to rent your first home in Spain, even with no credit history",
      excerpt:
        "Moving to spain involves more than just packing your bags, it means learning a new language and culture.",
    },
    {
      number: 2,
      title: "What is Lorem Ipsum?",
      strapline: "Home in Spain",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
    },
    {
      number: 3,
      title: "Why do we use it?",
      strapline: "A reader will be distracted by the readable content",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      number: 4,
      title: "Where can I get some?",
      strapline: "Many variations of passages of Lorem Ipsum available",
      excerpt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    },
  ];

  let selectChapterNum = $state(1);

  function selectChapter(chapter: any) {
    selectChapterNum = chapter.number;
  }
</script>

<section class="chapter-preview default-margin">
  <h2 class="mb-l">What you're getting</h2>
  <div class="chapter-container">
    <ul>
      {#each chapterData as chapterBtn}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title={selectChapterNum == chapterBtn.number}
            aria-controls="chapter-info-{chapterBtn.number}"
            aria-expanded={selectChapterNum == chapterBtn.number}
            onclick={() => selectChapter(chapterBtn)}
            ><h4>Chapter {chapterBtn.number}: {chapterBtn.title}</h4></button
          >
        </li>
      {/each}
    </ul>

    {#each chapterData as chapterTxt}
      <section
        id="chapter-info-{chapterTxt.number}"
        class="chapter-info"
        class:hidden={selectChapterNum != chapterTxt.number}
      >
        <h3>Chapter {chapterTxt.number}: {chapterTxt.title}</h3>
        <p>
          {chapterTxt.strapline}
        </p>
      </section>
    {/each}
  </div>
</section>

<style>
  .chapter-preview {
    padding: 80px;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-info.hidden {
    display: none;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
