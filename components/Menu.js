import Link from "next/link";

function Menu() {
  return (
    <>
      <Link href="/categories/react">
        React js
      </Link>
      <Link href="/categories/next">
        Next js
      </Link>
      <Link href="/categories/javascript">
        JavaScript
      </Link>
      <Link href="/categories/css">
        Html/Css
      </Link>
      <Link href="/categories/backend">
        Back-end
      </Link>
      <Link href="/categories/uiandux">
        Ui and Ux
      </Link>
      <Link href="/categories/other">
        Other
      </Link>
    </>
  );
}

export default Menu;
