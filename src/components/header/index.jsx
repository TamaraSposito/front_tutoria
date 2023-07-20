import React from 'react'
import { Container, Profile, Image } from "./styles"
import { RiShutDownLine } from "react-icons/ri"
import {useAuthMethod, useAuthUser} from "../../hooks/authhooks.js";

export function Header() {
    const {  logout } = useAuthMethod()
    const { user } = useAuthUser()
    return (
        <Container>
            <Image>
                <svg x="0" y="0" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M10.38 51.49L20.61 43.38L20.28 37.86L19.68 33.52L14.28 32.74L9.98 50.59C9.93 50.94 10.08 51.29 10.37 51.49H10.38Z" fill="#0ACFFB" />
                    <path d="M0.110001 19.88L13.15 27.08L16.13 25.09L19.49 22.09L19.14 17.81L0.840001 19.24C0.490001 19.3 0.200001 19.55 0.110001 19.89V19.88Z" fill="#6DF4C0" />
                    <path d="M14.29 32.75L20.29 37.86L26.17 34.7L27 28.62L22.12 24L16.14 25.09L0.11 19.88C-0.00999989 20.21 0.0700001 20.58 0.32 20.83L14.29 32.74V32.75Z" fill="#9AF6D3" />
                    <path d="M43.64 51.53L40.94 42.29L33.71 37.86L29.84 37.04L26.99 41.98L42.64 51.59C42.96 51.77 43.35 51.75 43.64 51.53Z" fill="#FDDA5C" />
                    <path d="M39.71 32.75L39.83 27.35L37.87 25.09L32.48 23.61L27.01 28.62L28.29 34.93L33.72 37.87L43.65 51.54C43.95 51.33 44.09 50.96 44.02 50.61L39.72 32.76L39.71 32.75Z" fill="#FCE87B" />
                    <path d="M53.93 19.87L43.7 20.65L37.86 25.09L39.71 32.75L53.68 20.84C53.95 20.6 54.05 20.22 53.93 19.87Z" fill="#D6B1ED" />
                    <path d="M34.85 17.81C31.69 14.25 29.23 15.03 27 17.2L24.22 22.76L27 28.62L37.86 25.09L53.93 19.87C53.82 19.52 53.52 19.27 53.16 19.24L34.86 17.81H34.85Z" fill="#E5C9F3" />
                    <path d="M27 0.349976L24.42 12.89L27 17.21L34.85 17.82L27.84 0.849976C27.68 0.539976 27.35 0.339976 27 0.359976V0.349976Z" fill="#FD91BA" />
                    <path d="M26.65 0.349991C26.43 0.439991 26.25 0.619992 26.16 0.839992L19.15 17.81L16.14 25.09L27 28.62V0.349991C26.88 0.329991 26.77 0.329991 26.65 0.349991Z" fill="#FFA6C5" />
                    <path d="M27 41.98L33.71 37.86L27 28.62L20.29 37.86L10.39 51.49C10.67 51.71 11.05 51.74 11.36 51.59L27.01 41.98H27Z" fill="#62D9FA" />
                    <path d="M53.93 19.87L38.79 28.92L37.87 25.09L53.94 19.87H53.93Z" fill="#CA96E5" />
                    <path d="M43.64 51.53L30.35 39.92L33.71 37.86L43.64 51.53Z" fill="#F8C228" />
                    <path d="M10.36 51.53L17.29 35.31L20.29 37.86L10.36 51.53Z" fill="#00BFF8" />
                    <path d="M0.0699997 19.87L17.64 21.45L16.14 25.09L0.0699997 19.87Z" fill="#3AEDBC" />
                    <path d="M27 0.299988L30.93 17.5L27 17.2V0.299988Z" fill="#FC76A8" />
                </svg>

            </Image>

            <Profile to="/teacher">
                <div>
                    <span>Bem-Vindo </span>
                    <strong>{user.displayName}</strong>
                </div>
            </Profile>
            <button onClick={logout} className="button" >
                <RiShutDownLine />
            </button>
        </Container>
    )
};