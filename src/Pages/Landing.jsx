/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'

const paragraph = css`
    padding: 10px;
    background-color: turquoise;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
const bouncingTitle = css`
    animation: ${bounce} 1s ease infinite;
`

const Landing = ({ headerTitle, theme }) => (
    <Container>
        <div className="r-test" css={[bouncingTitle, paragraph]}>This should be bouncing</div>
        <Card>
            <Header isRed>{headerTitle}</Header>
            <div css={{padding: 10, backgroundColor: 'lightGreen', '&:hover': {color: 'red'}}} >
                This body will turn light green on hover
            </div>
            <div css={paragraph}>
                This is a second paragraph
            </div>
            <div css={
                css`
                    ${paragraph}
                    background-color: pink;
                `
            }>
                This is a third paragraph
            </div>
        </Card>
    </Container>
)

const Header = styled.div(({theme, isRed}) => ({
    color: isRed ? 'red' : theme.color,
    padding: 15,
}))

const Input = styled.input(({}) => ({}))

const Card = styled.div(({theme}) => ({
    boxShadow: `-4px 5px 10px 3px ${theme.boxShadow}}`,
}));

const Container = styled.div(({theme}) => ({
    position: 'relative',
    float: 'left',
    padding: 100,
}));

export default Landing;
