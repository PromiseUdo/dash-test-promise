const composeEventHandlers = (
  externalHandler?: (e: any) => void,
  internalHandler?: (e: any) => void
) => {
  return (event: React.SyntheticEvent | Event) => {
    externalHandler?.(event);
    if (event.defaultPrevented) return;
    internalHandler?.(event);
  };
};

export default composeEventHandlers;
