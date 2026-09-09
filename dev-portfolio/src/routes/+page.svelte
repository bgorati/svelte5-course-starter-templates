<script lang="ts">
  import { Header, AboutMeSection, ExperienceTable } from "$components";
  let { data } = $props();
  // $inspect(data);
</script>

<Header />
<AboutMeSection />
<ExperienceTable devExperience={data.devExperience} />
