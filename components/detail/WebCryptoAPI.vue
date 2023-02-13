<template>
  <div class="py-3">
    <div class="btn-xs btn-default cursor-pointer" @click.prevent="generateKeys()">
      <Icon v-if="loading" name="spinner" class="animate-spin" />
      <Icon v-else name="encryption" />
      <span class="mx-1.5">Generate key</span>
    </div>
  </div>
  <Teleport to="body">
    <AppDialog
      :show="dialogOpen"
      @close="dialogOpen = false; keyInfo = null;"
    >
      <template #header>
        <h3>Public Key</h3>
      </template>
      <p class="my-3">
        Algorithm: {{ keyInfo.alg }}
      </p>
      <p class="text-xs font-mono break-all">
        {{ keyInfo.n }}
      </p>
    </AppDialog>
  </Teleport>
</template>

<script setup lang="ts">
const loading = ref(false)
const dialogOpen = ref(false)
const keyInfo = ref<any>(null)

async function generateKeys() {
  const subtle = window?.crypto?.subtle
  if (subtle) {
    loading.value = true
    const key = await subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: 'SHA-256',
      },
      true,
      ['encrypt', 'decrypt'],
    )
    keyInfo.value = await subtle.exportKey('jwk', key.publicKey)
    loading.value = false
    dialogOpen.value = true
  }
}
</script>
