<template>
  <div class="flex-col w-full min-w-full h-full mih-h-full">
    <header class="sticky">
      <AppHeader>
        <AppSearch
          v-model:searchTerm="searchTerm"
          v-model:searchMode="searchMode"
        />
        <!-- <Popover class="relative">
          <PopoverButton>Solutions</PopoverButton>

          <PopoverPanel class="absolute z-10">
            <div class="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>
          </PopoverPanel>
        </Popover> -->
      </AppHeader>
    </header>
    <div class="content flex-1">
      <div class="px-3 md:px-6">
        <ContextIndicator />
        <WebApiGrid
          :searchTerm="searchTerm"
          :activeFilter="activeFilter"
        />
      </div>
    </div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
let searchTerm = $ref('')
let searchMode = $ref(false)
let activeFilter = $ref(null)
</script>
