<template>
  <header class="flex max-md:flex-col gap-x-20 gap-y-10 items-center max-w-5xl xl:max-w-6xl mx-auto max-xl:px-6 py-10 sm:py-20">
    <div class="sm:flex-2 flex flex-col items-center md:items-start gap-y-1">
      <h2 class="max-w-md font-title text-[32px] md:text-5xl font-semibold max-md:text-center text-foreground leading-none">
        Create Beautiful Greeting Cards in Seconds
      </h2>
      <p class="max-w-md sm:max-w-5/6 text-foreground/75 text-sm max-md:text-center md:text-lg leading-tight">
        Design personalized birthday, wedding, and holiday cards easily with our online card maker.
      </p>
      <NuxtLink
        to="/create"
        class="mt-1.5">
        <Button>
          Create your Card
        </Button>
      </NuxtLink>
    </div>

    <HomeHeroDecorator />
  </header>
</template>
