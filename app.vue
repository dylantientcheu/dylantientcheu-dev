<template>
  <div class="p-4">
    <Header />
    <NuxtLayout cl>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead(
  {
		title: "Dylan Tientcheu",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content:
					"Dylan Tientcheu | 10x Software Engineer",
			},
		],
		link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
	},
)
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Square+Peg");

html,
body,
#__nuxt {
	height: 100vh;
	margin: 0;
	padding: 0;
	font-family: "Jost", sans-serif;
  font-size: 1.1rem;
}

html.dark {
	background: #121212;
	color: #d3d3d3;
}

a {
	font-weight: 600;
	text-decoration: underline;
}

.cursivo {
  font-family: "Square Peg", cursive;
}

a.cursivo {
  font-family: "Square Peg", cursive;
  font-size: 1.5rem;
}

</style>
