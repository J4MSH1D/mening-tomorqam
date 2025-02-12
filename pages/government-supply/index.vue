<script setup>
const filter = reactive({
  amount: 0,
  purpose: null,
  noCollateral: false,
  preferentialRate: false,
  simplifiedDocuments: false,
});

provide("filter", filter);
</script>

<template>
  <GovernmentSupplyMainBanner />
  <GovernmentSupplySupportGoals />
  <GovernmentSupplyCreditParams />
  <GovernmentSupplyCreditList />
  <GovernmentSupplyCreditSteps />
  <GovernmentSupplyApplicationForm />
</template>
