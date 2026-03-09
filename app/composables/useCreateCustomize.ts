import {
  type Occasion,
} from "~/definitions";
import {
  PATTERNS,
  PrintSize,
  PrintVisibility,
  type Pattern,
} from "~/definitions/customize";

export default function useCreateCustomize() {
  const {
    selectedOccasion,
  } = useCreate();

  const name = useRouteQuery<string | null>("name", "");
  const message = useRouteQuery<string | null>("message", "");

  const pattern = useRouteQuery<Pattern | null>("print-pattern", null);
  const size = useRouteQuery<PrintSize | null>("print-size", null);
  const visibility = useRouteQuery<PrintVisibility | null>("print-visibility", null);

  const patternOptions = computed(() => {
    return PATTERNS.filter(({ occasions }) => occasions.includes(selectedOccasion.value as Occasion));
  });

  watch(() => pattern.value, (_pattern, prevPattern) => {
    if (prevPattern === null) {
      size.value = PrintSize.MD;
      visibility.value = PrintVisibility.LIGHT;
    }
  });

  const clearPattern = () => {
    pattern.value = null;
    size.value = null;
    visibility.value = null;
  }

  return {
    name,
    message,
    pattern,
    size,
    visibility,
    patternOptions,
    clearPattern,
  };
}
