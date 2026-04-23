import { useState } from 'react'
import { somar, subtrair, multiplicar, dividir } from './operacoes'

const OPERACOES = {
  '+': somar,
  '−': subtrair,
  '×': multiplicar,
  '÷': dividir,
}

function formatar(valor) {
  if (typeof valor !== 'number') return String(valor)
  if (!Number.isFinite(valor)) return 'Erro'
  if (Number.isInteger(valor)) return String(valor)
  return String(parseFloat(valor.toFixed(8)))
}

function App() {
  const [display, setDisplay] = useState('0')
  const [operandoAnterior, setOperandoAnterior] = useState(null)
  const [operador, setOperador] = useState(null)
  const [resetProximo, setResetProximo] = useState(false)

  function clicarNumero(num) {
    if (display === '0' || resetProximo) {
      setDisplay(num === '.' ? '0.' : num)
      setResetProximo(false)
      return
    }
    if (num === '.' && display.includes('.')) return
    setDisplay(display + num)
  }

  function clicarOperador(op) {
    if (operandoAnterior !== null && !resetProximo) {
      const resultado = OPERACOES[operador](operandoAnterior, parseFloat(display))
      setDisplay(formatar(resultado))
      setOperandoAnterior(typeof resultado === 'number' ? resultado : null)
    } else {
      setOperandoAnterior(parseFloat(display))
    }
    setOperador(op)
    setResetProximo(true)
  }

  function calcular() {
    if (operandoAnterior === null || operador === null) return
    const resultado = OPERACOES[operador](operandoAnterior, parseFloat(display))
    setDisplay(formatar(resultado))
    setOperandoAnterior(null)
    setOperador(null)
    setResetProximo(true)
  }

  function limpar() {
    setDisplay('0')
    setOperandoAnterior(null)
    setOperador(null)
    setResetProximo(false)
  }

  function apagar() {
    if (resetProximo) return
    if (display.length === 1) {
      setDisplay('0')
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  return (
    <div className="page">
      <header className="header">
        <img src="/logoo.svg" alt="Git Demo Logo" className="logo" />
        <div className="badge">
          <span className="badge-dot" />
          git demo
        </div>
        <h1 className="title">Calculadora</h1>
        <p className="subtitle">Tem algo errado nessa página. Abra o DevTools (F12) → aba Network e investigue.</p>
      </header>

      <div className="calculator">
        <div className="display">
          <div className="display-hint">
            {operandoAnterior !== null && (
              <>
                {formatar(operandoAnterior)} <span className="display-op">{operador}</span>
              </>
            )}
          </div>
          <div className="display-value">{display}</div>
        </div>

        <div className="pad">
          <button className="btn btn-acao btn-span-2" onClick={limpar}>C</button>
          <button className="btn btn-acao" onClick={apagar} aria-label="apagar">⌫</button>
          <button className="btn btn-op" onClick={() => clicarOperador('÷')}>÷</button>

          <button className="btn btn-num" onClick={() => clicarNumero('7')}>7</button>
          <button className="btn btn-num" onClick={() => clicarNumero('8')}>8</button>
          <button className="btn btn-num" onClick={() => clicarNumero('9')}>9</button>
          <button className="btn btn-op" onClick={() => clicarOperador('×')}>×</button>

          <button className="btn btn-num" onClick={() => clicarNumero('4')}>4</button>
          <button className="btn btn-num" onClick={() => clicarNumero('5')}>5</button>
          <button className="btn btn-num" onClick={() => clicarNumero('6')}>6</button>
          <button className="btn btn-op" onClick={() => clicarOperador('−')}>−</button>

          <button className="btn btn-num" onClick={() => clicarNumero('1')}>1</button>
          <button className="btn btn-num" onClick={() => clicarNumero('2')}>2</button>
          <button className="btn btn-num" onClick={() => clicarNumero('3')}>3</button>
          <button className="btn btn-op" onClick={() => clicarOperador('+')}>+</button>

          <button className="btn btn-num btn-span-2" onClick={() => clicarNumero('0')}>0</button>
          <button className="btn btn-num" onClick={() => clicarNumero('.')}>.</button>
          <button className="btn btn-igual" onClick={calcular}>=</button>
        </div>
      </div>

      <footer className="footer">
        <a href="https://github.com/huyhian9-dotcom/git-demo-calculadora" target="_blank" rel="noreferrer">
          github.com/huyhian9-dotcom/git-demo-calculadora
        </a>
      </footer>
    </div>
  )
}

export default App
