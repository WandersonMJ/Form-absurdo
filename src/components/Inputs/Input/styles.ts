import styled, { css } from 'styled-components'

export const Container = styled.div<ContainerProps>`
  padding: 8px 14px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: ${({ isFocused, theme }) =>
    isFocused ? `1px solid ${theme.colors.yellow}` : 'none'};

  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.red};
    `}
`
export const InputElement = styled.input<InputProps>`
  width: 100%;
  height: 25px;
  border: none;
  position: relative;

  ::placeholder {
    font-size: 1.5em;

    ${({ isFilled, isFocused }) =>
      (isFilled || isFocused) &&
      css`
        opacity: 0;
        font-size: 0.5em;
        transition: all 0.2s;
      `}
  }
`

export interface InputProps {
  name: string
  placeholder: string
  error?: boolean
  isFilled?: boolean
  isFocused?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface ContainerProps {
  error: boolean
  isFocused: boolean
}
