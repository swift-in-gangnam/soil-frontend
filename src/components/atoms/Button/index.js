import * as S from "./style";
import Link from "next/link";

const Button = ({ children, color, onClick, href, ...props }) => {
  if (href) {
    return (
      <Link href={href}>
        <a>
          <S.Button color={color} {...props}>
            {children}
          </S.Button>
        </a>
      </Link>
    );
  } else {
    return (
      <S.Button color={color} {...props} onClick={onClick}>
        {children}
      </S.Button>
    );
  }
};

export default Button;
