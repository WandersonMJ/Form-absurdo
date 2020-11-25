import React, { useState, useCallback, useRef } from 'react'

import { Container, InputElement, InputProps } from './styles'

function Input({ name, placeholder, onChange, error = true }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  // useCallback é para amenizar as renderizações das funções na memoria

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <Container
      // onClick={() => inputRef.current.focus()}
      error={error}
      isFocused={isFocused}
    >
      <InputElement
        name={name}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        onChange={onChange}
        ref={inputRef}
      />
    </Container>
  )
}

export default Input
