<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <div class="flex flex-col flex-1 max-w-[960px] gap-y-16">
      <main class="container mx-auto my-12">
        <NuxtPage />
      </main>
    </div>
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

@font-face {
  font-family: 'VG5000';
  font-style: normal;
  font-display: swap;
  src: url('assets/fonts/VG5000-Regular_web.ttf') format('truetype');
}

.cursivo {
  font-family: "VG5000";
}
</style>
