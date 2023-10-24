import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src="/next.svg"
            alt="Logo Next"
            width={70}
            height={70}
            style={{ filter: 'invert(100%)' }}
        />
    )
};
