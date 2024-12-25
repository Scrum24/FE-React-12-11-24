export function convertIngredientsToStr(arr) {
  return arr
      .map(
          (ingredient) =>
              `${ingredient.charAt(0).toUpperCase()}${ingredient.substr(1)}`
      )
      .join(", ");
}