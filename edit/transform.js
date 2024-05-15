export const transform = (data) => {
  const { id, ...rest} = data;
  return rest;
}
