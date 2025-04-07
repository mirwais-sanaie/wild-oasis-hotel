import supabase from "./supabase";

export async function getCabnis() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    return null;
  }

  return data;
}
