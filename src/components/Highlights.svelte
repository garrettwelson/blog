<script>
  import Card from "./Card.svelte";
  const possibleColorClasses = [
    "bg-red-200",
    "bg-orange-200",
    "bg-amber-200",
    "bg-lime-200",
    "bg-emerald-200",
    "bg-cyan-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-rose-200",
  ];

  const colors = [];
  const max = possibleColorClasses.length - 1;
  while (colors.length < 3) {
    const idx = Math.floor(Math.random() * max);
    const selection = possibleColorClasses[idx];
    if (!colors.includes(selection)) {
      colors.push(selection);
    }
  }
  const aboutColor = colors[0];
  const blogColor = colors[1];
  const projectsColor = colors[2];
</script>

<div class="flex flex-wrap my-4">
  <Card
    title={"about me"}
    description={"a longer personal + professional bio along with my resume and contact info"}
    url={"/about"}
    background={aboutColor}
  />
  <Card
    title="blog"
    description="short posts with thoughts on tech, work/productivity, food, and more"
    url="/blog"
    background={blogColor}
  />
  <Card
    title="work"
    description="a brief overview of some of the professional projects I've worked on with links where relevant"
    url="/projects"
    background={projectsColor}
  />
</div>
