import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";

export const useInvoke = <TData, TArgs>(command: string, args?: TArgs) => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const invokeCommand = async () => {
      try {
        const result: TData = args
          ? await invoke(command, args)
          : await invoke(command);

        setData(result);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    invokeCommand();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
