import styled from 'styled-components'

export const Container = styled.div`
    background: #FFCC81;
    height: 100%;
    width: 29%;

    img{
        width: 112%;
    }
`
export const Content = styled.div`
    padding-left: 9%;
    padding-bottom: 20%;
    h1 {
        padding-top: 12%;
        font-family: 'Dancing Script', cursive;
        font-size: 24px;
    }
    h2{
        font-weight: 800;
        width: 90%;
        font-size: 30px;
        line-height: 36px;
        padding-top: 20px;
    }
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: row;
`