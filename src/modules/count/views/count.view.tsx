import React, { useEffect } from "react";

interface CountUIProps {
  count: number;
  loading: boolean;
  onClick: () => void;
}

export function CountUI(props: CountUIProps) {
  const { count, loading, onClick } = props;

  return loading ? (
    <p>loading...</p>
  ) : (
    <div>
      <p>count: {count}</p>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export interface CountViewProps extends CountUIProps {
  didMount: any;
}

export function CountView(props: CountViewProps) {
  const { didMount, ...restProps } = props;
  useDidMount(didMount);

  return <CountUI {...restProps} />;
}

export function useDidMount(didMount: any) {
  useEffect(() => {
    didMount();
  }, [didMount]);
}
