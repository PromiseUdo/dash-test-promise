import { useCallback, Ref } from "react";

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};
export function useComposeRefs<T = {}>(...refs: Ref<T>[]) {
  return useCallback(
    (node: any) => {
      for (let ref of refs) {
        assignRef(ref, node);
      }
    },
    [refs]
  );
}

export function assignRef<T>(ref: Ref<T>, node: any) {
  if (ref === null || node === ref) return;
  if (typeof ref === "function") {
    ref(node);
  } else {
    try {
      const ref2: Mutable<typeof ref> = ref;
      ref2.current = node;
    } catch (err) {
      throw new Error(`Cannot assign value ${node} to ref ${ref}`);
    }
  }
}
