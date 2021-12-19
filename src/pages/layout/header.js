export default function Header() {
  return (
    <div style={// 藍色大括號 是指 我將在括號內放js的內容
      {// object 物件 跟class很像
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'space-around' // 駝峰式命名
      }}>
      <div>
        <h1>Visume</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <p>About</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </div>
  )
}
