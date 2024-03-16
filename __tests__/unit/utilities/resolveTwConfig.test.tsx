import { describe, expect, test } from "vitest";
import { resolveTwConfig } from "@/src/utils/other";
import { testObject } from "@/__tests__/assets/utilities";

describe("функция resolveTwConfig", () => {
  test("Конфиг возвращается", () => {

    const result = resolveTwConfig();

    testObject(result);
  });
});

