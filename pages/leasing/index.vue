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
  <LeasingMainBanner />
  <LeasingSteps />
  <LeasingCalculator />
  <LeasingList />
  <LeasingForm />
</template>
