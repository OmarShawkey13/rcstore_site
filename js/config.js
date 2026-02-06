const CONFIG = {
    products: {
        rcgram: {
            name: "RCGram",
            version: "10.0",
            download: "https://www.mediafire.com/file/rb7xqh43h2w7isq/RCGram_v10.0.apk/file",
            description: "Premium Telegram experience with iOS design",
            features: [
                {
                    icon: "palette",
                    title: "Appearance & UI",
                    items: ["Original iPhone theme", "New iPhone emojis & fonts", "Customizable chat styles"]
                },
                {
                    icon: "lock",
                    title: "Privacy & Security",
                    items: ["Hide & lock conversations", "Ad-free experience", "Ghost mode", "View deleted messages"]
                },
                {
                    icon: "settings",
                    title: "Media & Stories",
                    items: ["Download closed stories", "Save media in secret chats", "Self-expiring photos never expire", "Capture expiring media freely"]
                },
                {
                    icon: "phone",
                    title: "Channels & Bots",
                    items: ["View blocked or restricted channels", "Use protected & locked bots", "Copy & screenshot in restricted channels", "Take screenshots in private chats"]
                }
            ]
        },
        rcwhatsapp: {
            name: "RCWhatsapp",
            version: "10.61",
            packages: {
                rc1: {
                    name: "RCWhatsApp",
                    title: "com.rcwhatsapp",
                    description: "Main WhatsApp Account",
                    download: "https://www.mediafire.com/file/iydypspoafd7yza/RCMods+v10.61+[com.rcwa].apk/file"
                },
                rc2: {
                    name: "GBWhatsApp",
                    title: "com.gbwhatsapp",
                    description: "2nd WhatsApp Account",
                    download: "https://www.mediafire.com/file/gqeytr65x9j9blr/RCMods_v10.61_%255Bcom.gbwa%255D.apk/file"
                },
                rc3: {
                    name: "RCWhatsApp",
                    title: "com.universe.messenger",
                    description: "3rd WhatsApp Account",
                    download: "https://www.mediafire.com/file/q2f14wunkugt3oq/RCMods+v10.61+[com.universe].apk/file"
                },
                rc4: {
                    name: "RCWhatsApp",
                    title: "com.sathwbg.easymessager",
                    description: "4th WhatsApp Account",
                    download: "https://www.mediafire.com/file/hc0ffpj2xeafjdw/RCMods+v10.61+[com.sathwbg].apk/file"
                }
            },
            features: [
                {
                    icon: "palette",
                    title: "Appearance & UI",
                    items: ["Change themes with many options", "Customize Universal, Home, and Chat pages", "Custom Floating Action Button", "Change font type inside the app", "More emoji variants (Facebook, One v3, Android 8)",]
                },
                {
                    icon: "lock",
                    title: "Privacy & Security",
                    items: ["Hide online status", "Anti-delete (view deleted messages)", "Anti-tapping protection", "Send messages without saving numbers", "Download others' status (Status Download)",]
                },
                {
                    icon: "settings",
                    title: "Media & Sharing",
                    items: ["Send high-resolution images up to 50MB", "Send up to 90 photos at once", "Send video files up to 700MB", "Create video status up to 30 minutes (no crop)",]
                },
                {
                    icon: "phone",
                    title: "Stability & Performance",
                    items: ["Bug fixes & general improvements", "Optimized app startup speed", "More features to explore",]
                }
            ]
        }
    },
    settings: {
        countdownSeconds: 15
    }
};
