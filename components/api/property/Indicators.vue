<script setup lang="ts">
defineProps<{
  api: WebAPI
}>()
</script>

<template>
  <div class="flex items-center">
    <ApiPropertyIndicator
      v-if="api.experimental"
      icon="experimental"
      title="Experimental"
      description="This feature is experimental, use with care."
    />
    <ApiPropertyIndicator
      v-if="api.availableInWebWorkers"
      icon="webworker"
      title="Web Workers"
      description="This feature is also available in Web Workers."
      link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
    />
    <ApiPropertyIndicator
      v-if="api.userInteractionRequired"
      icon="interaction"
      title="User Interaction"
      description="A user interaction is required to use this feature."
    />
    <ApiPropertyIndicator
      v-if="api.permissionsRequired"
      icon="permission"
      title="Permissions"
      description="This feature requires permissions to be granted by the user."
    />
    <ApiPropertyIndicator
      v-if="api.secureContextRequired"
      icon="secure"
      title="Secure Context"
      description="This feature requires a Secure Context (HTTPS) to be available."
      link="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"
    />
  </div>
</template>
