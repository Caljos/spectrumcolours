# Spectrum 2 Token Explorer

An interactive web application for visualizing all Adobe Spectrum 2 design system color tokens with accurate hex values for both light and dark modes.

## ✨ Features

- 🎨 **All 19 Color Scales**: Complete coverage of Gray, Blue, Green, Orange, Red, Cyan, Indigo, Purple, Fuchsia, Magenta, Pink, Yellow, Seafoam, Chartreuse, Celery, Turquoise, Brown, Silver, and Cinnamon
- 🌓 **Light & Dark Mode Toggle**: See how colors adapt between light and dark themes
- 🔍 **Real-time Search**: Filter tokens by name or value (e.g., "blue" or "500")
- 📋 **Click to Copy**: Click any swatch to copy its hex value to clipboard
- 🎯 **Accurate Values**: All color values extracted directly from Spectrum 2 v0.12.0
- 💡 **Hex Display**: Computed hex color shown underneath each token name

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── TokenSwatch.tsx      # Individual color swatch with hex display
│   └── TokenSection.tsx     # Section grouping for token categories
├── data/
│   ├── tokens.ts            # Token names and scale definitions
│   └── spectrum2ColorTokens.ts  # Complete token RGB values (light & dark)
├── App.tsx                  # Main app with S2 Provider & dark mode toggle
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🎯 How It Works

Spectrum 2 uses build-time macros to optimize CSS. Since this is a **dynamic token explorer** that needs to display all tokens, we use a different approach:

1. **Static Token Database**: All 247 global color token values extracted from Spectrum 2's internal theme (`@react-spectrum/s2/style/dist/spectrum-theme.mjs`)
2. **Runtime Resolution**: The `TokenSwatch` component looks up token values at runtime for both light and dark modes
3. **Accurate Hex Conversion**: RGB values are converted to hex format with proper color space handling
4. **Dark Mode Support**: Toggle between light and dark to see how colors adapt

## 💡 Usage

- **Toggle Mode**: Click the moon/sun button to switch between light and dark modes
- **Search**: Type any part of a token name (e.g., "blue", "500", "purple") to filter
- **Copy**: Click on any color swatch to copy its hex value to your clipboard
- **Browse**: Scroll through all 19 color scales organized by category

## 🔧 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and HMR
- **@react-spectrum/s2** - Adobe Spectrum 2 library (v0.12.0)
- **unplugin-parcel-macros** - Required for Spectrum 2 build-time macros

## 📊 Token Coverage

- **Global Colors**: 247 tokens across 19 color scales
- **Text Colors**: Semantic text color aliases
- **Background Colors**: Layer and base backgrounds
- **Both Modes**: Complete light & dark mode values

## 🐛 Known Limitations

- Text and Background semantic tokens may show "N/A" if not in the static database
- Only global color tokens are fully covered (semantic/alias tokens require additional mapping)
- Color values are from Spectrum 2 v0.12.0 and may differ in newer versions

## 🤝 Contributing

This is a reference implementation. To update token values:
1. Extract new values from `node_modules/@react-spectrum/s2/style/dist/spectrum-theme.mjs`
2. Update `src/data/spectrum2ColorTokens.ts`
3. Rebuild and test both light and dark modes

## 📄 License

This project uses Adobe Spectrum 2 which is licensed under Apache 2.0.

## 🔗 Resources

- [Spectrum 2 Storybook](https://react-spectrum.adobe.com/s2/index.html?path=/docs/intro--docs)
- [Spectrum 2 GitHub](https://github.com/adobe/react-spectrum)
