<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("https://api.github.com/users/Leomotors");
    const data = await res.json();

    return {
      props: { data },
    };
  };
</script>

<script lang="ts">
  import Link from "$components/Link.svelte";

  import type { Endpoints } from "@octokit/types";
  export let data: Endpoints["GET /user"]["response"]["data"];

  import Award from "svelte-bootstrap-icons/lib/Award.svelte";
  import Briefcase from "svelte-bootstrap-icons/lib/Briefcase.svelte";
  import JournalRichtext from "svelte-bootstrap-icons/lib/JournalRichtext.svelte";
  import CodeSquare from "svelte-bootstrap-icons/lib/CodeSquare.svelte";
  import Github from "svelte-bootstrap-icons/lib/Github.svelte";
  import Twitter from "svelte-bootstrap-icons/lib/Twitter.svelte";
  import Linkedin from "svelte-bootstrap-icons/lib/Linkedin.svelte";
  import CgWebring from "$components/CgWebring.svelte";
</script>

<main>
  <h1>Hello! I'm Leo ✨</h1>

  <h2>Nutthapat Pongtanyavichai</h2>

  <p class="w-full md:w-2/3 mx-auto text-xl font-semibold p-2">
    {data?.bio ?? "<Error fetching from GitHub API>"}
  </p>

  <section>
    <Link name="Portfolio" to="https://portfolio.leomotors.me">
      <Award width="32" height="32" />
    </Link>

    <Link name="Resume" to="https://resume.leomotors.me">
      <Briefcase width="32" height="32" />
    </Link>

    <Link name="Blog" to="https://blog.leomotors.me">
      <JournalRichtext width="32" height="32" />
    </Link>

    <Link name="Repo List" to="https://repos.leomotors.me">
      <CodeSquare width="32" height="32" />
    </Link>
  </section>

  <section>
    <Link name="GitHub" to="https://github.com/Leomotors">
      <Github width="32" height="32" />
    </Link>

    <Link name="Twitter" to="https://twitter.com/LeomotorsTH">
      <Twitter width="32" height="32" />
    </Link>

    <Link name="LinkedIn" to="https://www.linkedin.com/in/leo-nutthapat/">
      <Linkedin width="32" height="32" />
    </Link>
  </section>

  <footer>
    <Link to="https://creatorsgarten.org/ring">
      <CgWebring />
    </Link>
  </footer>
</main>

<style lang="postcss">
  main {
    @apply flex flex-col gap-4 justify-center items-center min-h-screen py-6 px-1;
    @apply bg-slate-900 text-white text-center;
  }

  h1 {
    @apply font-bold text-4xl;
  }

  h2 {
    @apply font-bold text-3xl;
  }

  section,
  footer {
    @apply flex flex-col lg:flex-row justify-center gap-2 my-2;
  }
</style>
