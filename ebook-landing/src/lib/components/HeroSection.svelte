<script lang="ts">
  import bookCover from "$assets/book_cover.png";
  import phoneCover from "$assets/phone_cover.png";
  import Buttom from "./Button.svelte";
</script>

<section class="hero">
  <div class="hero-showcase text-center bold">
    <h1 class="purple">Movie To</h1>
    <h1 class="purple md-xs">Spain</h1>
    <h4 class="italic semi-bold">
      Learn Spanish from your favorite movies and series
    </h4>
    <img class="book-cover" src={bookCover} alt="Book Cover" />
    <img class="phone-cover" src={phoneCover} alt="Phone Cover" />
  </div>
  <div class="hero-text text-center white">
    <h1>This Ebook will</h1>
    <h1>Save you moeny</h1>
    <h1 class="mb-m">Time & Nerve</h1>
    <p class="light-grey">
      I moved to Spain without a plan, with only $500 and 3 words of Spanish in
      my backpack. 8 years later, I'm fluent in Spanish, own a house in the
      countryside and run a successful business here.
    </p>
    <Buttom class="mt-m">Purchese the Ebook for $10</Buttom>
  </div>
</section>

<style>
  .hero {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    width: 35%;
    bottom: 0;
    right: 52%;
    transform: translateY(25%);
  }
</style>
