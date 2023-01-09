import styled from "styled-components";

export const ContainerCurriculum = styled.div`
    max-width: 74rem;
    align-items: center;
    justify-content: center;
    flex:1;

    @media (max-width: 768px) {
        max-width: 24rem;
    }

    main {
        background: ${props => props.theme['tab-blue-1000']};
        display: flex;
        width: 64rem;
        padding: 1rem;
        border-radius: 8px;
        flex-direction: column;
        gap: 1rem;
        border: 2px solid ${props => props.theme['blue-dark-gray']};
        outline: 1px solid ${props => props.theme['tab-blue-1000']};


        div:first-child {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            margin-left: 1rem;
        }

        div:last-child {
            background: ${props => props.theme['tab-beige']};
            border: 2px solid ${props => props.theme['blue-dark-gray']};
            border-radius: 4px;
            box-shadow: inset 0 0 6px ${props => props.theme['blue-dark-gray']};

            gap: 1rem;
            padding: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h1 {
                font-size: 1.625rem;
                font-weight: 800;
                margin-left: calc(0px - 22rem)
            }

            div > img {
                align-items: center;
            }

            div > div {
                align-items: flex-start;
            }

            div {
                box-shadow: none;
                border: 0;
                background: transparent;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 1rem;
                padding-bottom: 0;
                padding-top: 0;
                width: 100%;

                img {
                    min-width: 12rem;
                    width: 12rem;
                    height: 12rem;
                    border: 3px solid ${props => props.theme['tab-beige']};
                    outline: 2px solid ${props => props.theme['tab-blue-800']};
                    border-radius: 8px;
                    overflow: hidden;
                    background: transparent;
                }

                div {
                    box-shadow: none;
                    display: flex;
                    text-align: left;
                    flex-direction: column;
                    padding: 0;
                    gap: 0.25rem;

                    h4 {
                        font-size: 1.25rem;
                        font-weight: 800;
                    }

                    p {
                        font-size: 1rem;
                        font-weight: 400;
                    }
                    div {
                        box-shadow: none;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                        span{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: 800;
                            gap: 0.25rem;
                        }
                    }
                }
            }

        }
    }
`

export const ContainerContent = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    div {
        margin: 0;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        div {
            width: 100%;
            background: ${props => props.theme['tab-blue-1000']};
            display: flex;
            padding: 1rem;
            border-radius: 8px;
            flex-direction: column;
            gap: 0.75rem;
            border: 2px solid ${props => props.theme['blue-dark-gray']};
            outline: 1px solid ${props => props.theme['tab-blue-1000']};


            div:first-child {
                border: none;
                padding: 0;
                display: flex;
                flex-direction: row;
                gap: 1rem;
                margin-left: 1rem;
            }

            div:last-child {
                background: ${props => props.theme['tab-beige']};
                border: 2px solid ${props => props.theme['blue-dark-gray']};
                border-radius: 4px;
                box-shadow: inset 0 0 6px ${props => props.theme['blue-dark-gray']};
                display: block;

                h4 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                }

                div {
                    padding: 0;
                    border: none;
                    box-shadow: none;
                    outline: none;
                    gap: 0.75rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;

                    ul {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        gap: 0.25rem;
                        font-size: 1rem;

                        li {
                            font-weight: 800;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            gap: 0.5rem;
                            

                            &::before {
                                content: '';
                                width: 0.5rem;
                                height: 0.5rem;
                                border-radius: 50%;
                                background: ${props => props.theme['blue-dark-gray']}
                            }
                        }
                    }

                    span {
                        max-width: 24rem;

                        div {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: 800;
                        }

                        h5 {
                            font-size: 0.925rem;
                            font-weight: 800;
                        }

                        h6 {
                            font-size: 0.725rem;
                            font-weight: 800;
                        }

                        p {
                            font-size: 0.75rem;
                        }

                        ul {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: flex-start;
                            gap: 0.25rem;
                            font-size: 0.75rem;

                            li {
                                font-weight: 400;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                gap: 0.5rem;
                                

                                &::before {
                                    content: '';
                                    max-width: 0.5rem;
                                    max-height: 0.5rem;
                                    width: 0.85rem;
                                    height: 0.35rem;
                                    border-radius: 50%;
                                    background: ${props => props.theme['blue-dark-gray']}
                                }
                            }
                        }

                    }

                    div {
                        margin: 0;
                        background: transparent;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;

                        div {
                            display: flex;
                            flex-direction: column;
                            padding-top: 0.25rem;
                        }

                        div:first-child {
                            display: flex;
                            align-items: flex-start;
                            
                            ul {
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                align-items: flex-start;
                                gap: 0.25rem;

                                li {
                                    font-weight: 800;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    gap: 1rem;

                                    &::before {
                                        content: '';
                                        width: 0.5rem;
                                        height: 0.5rem;
                                        border-radius: 50%;
                                        background: ${props => props.theme['blue-dark-gray']}
                                    }
                                }
                            }
                        }

                        div {
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            padding: 0;
                            row-gap: 0.25rem;
                            column-gap: 0.5rem;
                            justify-content: flex-start;
                        }
                    }
                }
            }
        }

        footer {
            margin-top: calc(0px - 0.5rem);
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 1rem;
            font-weight: 800;
            color: ${props => props.theme['silk']};
            gap: 1.5rem;

            div {
                background: transparent;
                border: none;
                outline: none;
                padding: 0;
                display: flex;
                align-items: flex-start;
                width: 50%;

                p{
                    width: 100%;
                    text-align: right;
                }

                a {
                    color: ${props => props.theme['silk']};
                }
            }
        }
    }
`

export const Contacts = styled.div`
    gap: 0.25rem !important;
`