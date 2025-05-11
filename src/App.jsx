import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>私のGitHub Pagesサイト</h1>
        <p className="subtitle">React + Viteで作成</p>
      </header>
      
      <main className="app-main">
        <section className="about-section">
          <h2>このサイトについて</h2>
          <p>
            このサイトはReactとViteを使用して作成されたGitHub Pagesサイトです。
            シンプルで高速なウェブサイトを構築するための最新のフロントエンド技術を活用しています。
          </p>
        </section>
        
        <section className="demo-section">
          <h2>インタラクティブデモ</h2>
          <div className="counter-card">
            <p>カウンター: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>
              カウントアップ
            </button>
            <button onClick={() => setCount(0)} className="reset-button">
              リセット
            </button>
          </div>
        </section>
        
        <section className="features-section">
          <h2>特徴</h2>
          <ul>
            <li>Reactの最新バージョンを使用</li>
            <li>Viteによる高速な開発体験</li>
            <li>GitHub Pagesでの簡単なホスティング</li>
            <li>レスポンシブデザイン</li>
          </ul>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 私のGitHub Pagesサイト</p>
      </footer>
    </div>
  )
}

export default App
