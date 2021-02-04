import React from "react"
import styled from "styled-components"

const TripInfo = () => {
  return (
    <Container>
      <LeftColumn>
        <ImageWrapper>
          <img scr="../assets/images/man-1.jpg" />
        </ImageWrapper>
      </LeftColumn>
      <RigthColumn>
        <TextWrapper></TextWrapper>
      </RigthColumn>
    </Container>
  )
}

export default TripInfo

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  background: green;
  border: 2px greenyellow;
`
export const LeftColumn = styled.div`
  background: red;
`
export const RigthColumn = styled.div`
  background: grey;
`
export const ImageWrapper = styled.div`
  object-fit: cover;
`

export const TextWrapper = styled.div`
  background: pink;
`
