export const RequiApi = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  const allPlanetes = data.results.map((result) => {
    const { residents, ...rest } = result;
    return rest;
  });
  console.log(allPlanetes);
  return allPlanetes;
};
