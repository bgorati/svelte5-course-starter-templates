<script lang="ts">
  import { FaqItem, Button } from "$components";
  let faqData = [
    {
      number: 1,
      question: "What is an array in data structure with an example?",
      answer:
        "An array is a linear data structure that stores a fixed-size sequential collection of elements of the same data type. For example, you can have an array of integers, an array of strings, or an array of objects.",
    },
    {
      number: 2,
      question: "2. Why array is a data structure?",
      answer:
        "Arrays store elements of the same type, they are classified as homogeneous data structures. They can store numbers, strings, characters, boolean values (true and false), objects, and so on.",
    },
    {
      number: 3,
      question: "3. What data structure is an array?",
      answer:
        "An array is a linear data structure that stores similar elements in contiguous memory locations.",
    },
    {
      number: 4,
      question: "4. What are the types of arrays?",
      answer:
        "There are two major types of arrays: One dimensional array, Multidimensional array",
    },
  ];

  let quesCurentExpend = $state(-1);

  function hanndleFaq(index: number) {
    quesCurentExpend = index;
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l text-center">FAQ's</h2>
  <div class="faq-container">
    {#each faqData as faq, index}
      <FaqItem
        {faq}
        isExpanded={quesCurentExpend == index}
        onclick={() => hanndleFaq(index)}
      />
    {/each}
  </div>
  <div class="additional-info mt-m">
    <Button>Buy Now</Button>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
