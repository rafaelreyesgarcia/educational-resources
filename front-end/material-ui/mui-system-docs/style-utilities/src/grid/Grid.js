import * as React from 'react';
import NestedGrid from './NestedGrid';
import CenteredElementGrid from './CenteredElements';
import FullBorderedGrid from './FullBorderedGrid';
import HalfBorderedGrid from './HalfBorderedGrid';


export default function Grid() {
  return (
    <>
      <NestedGrid />
      <CenteredElementGrid />
      <FullBorderedGrid />
      <HalfBorderedGrid />
    </>
  )
}
