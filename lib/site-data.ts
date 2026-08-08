// lib/site-data.ts

import { unstable_cache } from "next/cache";
import { ComponentService } from "@/services/component.service";

export const getComponents = unstable_cache(
    async () => {
        return ComponentService.getLookup();
    },
    ["site-components"],
    {
        revalidate: 3600,
        tags: ["site-components"],
    }
);