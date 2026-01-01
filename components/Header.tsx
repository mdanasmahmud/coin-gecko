import Link from "next/link"

const Header = () => {
  return (
    <header>
        <div className="main-container inner">
            <Link href="/">CoinGecko</Link>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/coins">All Coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header