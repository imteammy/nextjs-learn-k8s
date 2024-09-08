"ue client";
import React, { PropsWithChildren, useEffect, useState } from "react";

interface ClientProps extends PropsWithChildren {}

export default function Client({ children }: ClientProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? children : <></>;
}
