import React from "react";
import Link from "next/link";

import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles.external}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Begin</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        <a>Movies</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
