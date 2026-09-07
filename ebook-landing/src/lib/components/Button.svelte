<script lang="ts">
  import { loadStripe } from "@stripe/stripe-js";
  import { PUBLIC_STRIPE_KEY } from "$env/static/public";

  let { children, ...props } = $props();

  async function handleCheckout() {
    const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { sessionId } = await response.json();

    await stripe.redirectToCheckout({ sessionId });
  }
</script>

<button {...props} onclick={() => handleCheckout()}>{@render children()}</button
>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
