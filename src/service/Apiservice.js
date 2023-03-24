export async function getSpellsData() {
  try {
    const response = await fetch(
      "https://wizard-world-api.herokuapp.com/Spells"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
