<template>
  <div class="py-3">
    <a class="btn-xs btn-default cursor-pointer" @click="generateKeys()">
      <Icon v-if="loading" name="spinner" class="animate-spin" />
      <Icon v-else name="encryption" />
      <span class="mx-1.5">Generate key</span>
    </a>
  </div>
  <Teleport to="body">
    <AppDialog
      :show="dialogOpen"
      @close="dialogOpen = false; keyInfo = null;"
    >
      <template #header>
        <h3>Public Key</h3>
      </template>
      <p class="my-3">Algorithm: {{ keyInfo.alg }}</p>
      <p class="text-xs font-mono break-all">{{ keyInfo.n }}</p>
    </AppDialog>
  </Teleport>
</template>

<script setup lang="ts">
let loading = $ref(false)
let dialogOpen = $ref(false)
let keyInfo = $ref<any>(null)

async function generateKeys() {
  const subtle = window?.crypto?.subtle
  if (subtle) {
    loading = true
    const key = await subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 4096,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      },
      true,
      ["encrypt", "decrypt"],
    )
    keyInfo = await subtle.exportKey('jwk', key.publicKey)
    loading = false
    dialogOpen = true
  }
}
</script>
