<script lang="ts">
  let { devExperience } = $props();
  $inspect(devExperience);
</script>

<div class="work-experience">
  <div class="work-experience-list">
    <h2 class="headline">Work Experience</h2>
    {#each devExperience as work}
      <div class="work-item">
        <p class="company-and-date">
          <span>{work.company}</span>
          <span>
            {work.startDate} - {work.endDate}
          </span>
        </p>
        <p>{work.jobTitle}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
  }
</style>
