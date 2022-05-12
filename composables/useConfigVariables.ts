export const useConfigVariables = () => {
  const config = useRuntimeConfig();
  console.log("Runtime Config in Composables", config);
};
