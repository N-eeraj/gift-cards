<template>
  <footer class="flex flex-col items-center gap-y-3 bg-primary py-16 text-center text-white">
    <h3 class="max-md:max-w-xs font-title text-3xl md:text-4xl font-medium leading-none">
      Start Creating Your Card Today
    </h3>

    <p class="text-lg text-surface leading-tight">
      It only takes a few minutes to design something special.
    </p>

    <NuxtLink
      to="/create"
      class="mt-3">
      <Button variant="secondary">
        Create Your Card
      </Button>
    </NuxtLink>
  </footer>
</template>
