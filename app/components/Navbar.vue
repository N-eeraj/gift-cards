<template>
  <nav class="sticky top-0 w-full px-6 py-4 bg-white shadow-lg z-10">
    <div class="flex justify-between items-center max-w-5xl xl:max-w-6xl mx-auto">
      <NuxtLink to="/">
        <h1 class="font-title text-[28px] sm:text-3xl md:text-4xl font-black transition-all duration-300">
          GiftCards
        </h1>
      </NuxtLink>

      <NuxtLink to="/create">
        <Button class="text-sm sm:text-base">
          Start Designing
        </Button>
      </NuxtLink>
    </div>
  </nav>
</template>
