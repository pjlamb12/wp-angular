<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_ang');

/** MySQL database username */
define('DB_USER', 'axis41');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'PtuqWX[AB>vk2},A028+#%sC!WQE`EKSI>fX$_5)_[UP]Pd=6{-+*}E))R>BlB.^');
define('SECURE_AUTH_KEY',  '>4([2|twVNdcpIqETs6B~%ycD!dC8%1a`|vGDaEdvhV&C5g-Mb!YKOv+-1]Hsh2~');
define('LOGGED_IN_KEY',    '4&+i6IA}Yib:Z-7RsU2- y6+t|Qdjq250T ,OA^bYWuDf#;~GxmFQ(TPf39Y6z&Y');
define('NONCE_KEY',        's2tl}Xavx60a=-=M&*%E-h>RWMIct1,W&#E4+1!AW~`jz!0E-sfC}kR$neX7u!ou');
define('AUTH_SALT',        'Iy8?8.-WZ:7c10f*1znan*z<+W RfB(0uf7lwXr]r,_srlq,-u<Q>TaMb|g(OTg$');
define('SECURE_AUTH_SALT', 'yEh*2{b4@7^3)&d/^d{HRWh-e4SdJHA.Ud52;Zz:j@01xo8@lERXr===POSxG$~F');
define('LOGGED_IN_SALT',   't#y<}OdT<|wr/X}:!j0zc!;s|,>~>DToy@Y,DDrUs14FEQmqz>w@T)J;h5qj*7`1');
define('NONCE_SALT',       '2qkct*=!iZF+OYvD%K0m6(!Uk[ x9jwAX|Y&AbhJD,>l@jCM;KvwiUPikEP<WY~u');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
