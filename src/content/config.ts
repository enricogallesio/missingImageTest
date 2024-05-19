import {defineCollection, z} from "astro:content";

const defaultImage = "@assets/defaultimage.jpg";

const blogCollection = defineCollection({
      schema: ({image}) =>
            z.object({
                  title: z.string(),
                  cover: z.preprocess(
                        (val) => (val ? val : defaultImage),
                        image()
                  ),
                  coverAlt: z.string(),
            }),
});

export const collections = {
      blog: blogCollection,
};
