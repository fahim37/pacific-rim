export type FeatureCardType = {
  id: string; // Added the id property
  image: string;
  price: string;
  originalPrice: string;
};

export const featureProducts: FeatureCardType[] = [
  {
    id: crypto.randomUUID(), // Generate a unique ID
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9e2eee2d87f9223e15d4d490ff2922fdad0a22157bd32d19501954d9886d6193?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07a15d7f9b9bb47f1c399eb2bcca6083f278b4bf5bd9f04b6458478c49d90e56?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f30190ae8334711be131a4faa618ed10d6b8118e1fb0977816b5faf9d799c?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5876283651517a075632f1cf4dcb2ec865e183ad25f964e7eac9ed23f304dc0d?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/437698f36a55085fdea81db93566e5977998abe1c4e84a54633d51c875ad61b8?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1130998d2e61365068b144f3d996b8edb94edba896e3fcba0a19881a3601d24f?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9",
    price: "7,000.00",
    originalPrice: "9025.00",
  },
];
