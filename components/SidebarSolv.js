import Link from "next/link";

export default function SidebarSolv() {
    return (
      <div className="sidebar">
            <p style={{ marginTop: '16px', marginLeft: '16px' }}>Sidebar</p>

            <nav>
              <Link href={'/solvers/combust'}>
                <a style={{ marginRight: '16px', marginLeft: '16px' }}>Combustion Analysis</a>
              </Link>
            </nav>

            <nav>
              <Link href={'/solvers/mech'}>
                <a style={{ marginRight: '16px', marginLeft: '16px' }}>Mech Analysis</a>
              </Link>
            </nav>
      </div>
    )
  }