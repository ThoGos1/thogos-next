import Link from "next/link";

export default function SidebarNote() {
    return (
      <div className="sidebar">
          Sidebar Epic
            <nav>
              <Link href={'/notes/test-2-of-note'}>
                <a style={{ marginRight: '16px', marginLeft: '16px' }}>Test Note 2</a>
              </Link>
            </nav>

            <nav>
              <Link href={'/notes/test-note'}>
                <a style={{ marginRight: '16px', marginLeft: '16px' }}>Test Note 1</a>
              </Link>
            </nav>  
      </div>
    )
  }