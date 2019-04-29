import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`

export default ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
)
