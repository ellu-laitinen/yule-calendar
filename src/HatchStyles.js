import styled from 'styled-components';
import hatchBackdrop from './img/xmas1.jpg'

export const StyledHatch = styled.div`
padding-top: 100%;
position: relative;
cursor: pointer;

.front {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    z-index: 2;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Dancing Script", cursive;
        color: #fff;
        padding: 20px;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
        font-weight: 700;
        font-size: 4rem;
    }

    &.open {
        transform: rotateY(180deg);
    }
}

.back {
    position: absolute;
    background: center / cover url(${hatchBackdrop});
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);

    &.open {
        z-index: 2;
        transform: rotateY(0deg);
    }

    p {
        font-family: "Dancing Script", cursive;
        color: #fff;
        padding: 10px;
        font-size: 1.4rem;
        text-align: center;
    }
}

.hatch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
}

#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 3;
    cursor: pointer;
}

.hatch-content {
    
        width: 50%;
        height: 50%;
        border: solid black 1px;
        color: black;
        background: rgba(200, 247, 197, 0.9);
        border-radius: 5px;
        box-shadow: 0 0 5px black; 
        position: absolute;    
        padding: 2rem;
        top: 50%;
        left: 50%;
        font-size: 20px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);   
}

.closebutton, .overlay-btn {
    background: yellow;
    border-radius: 5px;
    padding: 5px;
    border: black solid 1px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-family: 'Audiowide', cursive;
    font-weight: lighter;
    font-size: small;
}

`