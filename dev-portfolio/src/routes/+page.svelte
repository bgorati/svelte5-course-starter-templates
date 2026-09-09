<script lang="ts">
  import { Header, AboutMeSection } from "$components";
  let { data } = $props();
  $inspect(data);
</script>

<Header />
<AboutMeSection />
