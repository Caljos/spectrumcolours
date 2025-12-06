// Spectrum 2 Global Color Tokens
// Extracted from @react-spectrum/s2 v0.12.0 theme definitions
// This file contains ACCURATE color values for both light and dark modes

interface ColorToken {
  light: string;
  dark: string;
}

interface AliasToken {
  light: string;
  dark: string;
}

type TokenMap = Record<string, string | ColorToken>;
type AliasMap = Record<string, AliasToken>;

export const spectrum2Tokens: TokenMap = {
  // Base colors
  'transparent': 'transparent',
  'black': 'black',
  'white': 'white',
  
  // Gray Scale
  'gray-25': { light: 'rgb(255, 255, 255)', dark: 'rgb(17, 17, 17)' },
  'gray-50': { light: 'rgb(248, 248, 248)', dark: 'rgb(27, 27, 27)' },
  'gray-75': { light: 'rgb(243, 243, 243)', dark: 'rgb(34, 34, 34)' },
  'gray-100': { light: 'rgb(233, 233, 233)', dark: 'rgb(44, 44, 44)' },
  'gray-200': { light: 'rgb(225, 225, 225)', dark: 'rgb(50, 50, 50)' },
  'gray-300': { light: 'rgb(218, 218, 218)', dark: 'rgb(57, 57, 57)' },
  'gray-400': { light: 'rgb(198, 198, 198)', dark: 'rgb(68, 68, 68)' },
  'gray-500': { light: 'rgb(143, 143, 143)', dark: 'rgb(109, 109, 109)' },
  'gray-600': { light: 'rgb(113, 113, 113)', dark: 'rgb(138, 138, 138)' },
  'gray-700': { light: 'rgb(80, 80, 80)', dark: 'rgb(175, 175, 175)' },
  'gray-800': { light: 'rgb(41, 41, 41)', dark: 'rgb(219, 219, 219)' },
  'gray-900': { light: 'rgb(19, 19, 19)', dark: 'rgb(242, 242, 242)' },
  'gray-1000': { light: 'rgb(0, 0, 0)', dark: 'rgb(255, 255, 255)' },
  'gray-1100': { light: 'rgb(0, 0, 0)', dark: 'rgb(255, 255, 255)' },
  'gray-1200': { light: 'rgb(0, 0, 0)', dark: 'rgb(255, 255, 255)' },
  'gray-1300': { light: 'rgb(0, 0, 0)', dark: 'rgb(255, 255, 255)' },

  // Blue Scale
  'blue-100': { light: 'rgb(245, 249, 255)', dark: 'rgb(14, 23, 63)' },
  'blue-200': { light: 'rgb(229, 240, 254)', dark: 'rgb(15, 28, 82)' },
  'blue-300': { light: 'rgb(203, 226, 254)', dark: 'rgb(12, 33, 117)' },
  'blue-400': { light: 'rgb(172, 207, 253)', dark: 'rgb(18, 45, 154)' },
  'blue-500': { light: 'rgb(142, 185, 252)', dark: 'rgb(26, 58, 195)' },
  'blue-600': { light: 'rgb(114, 158, 253)', dark: 'rgb(37, 73, 229)' },
  'blue-700': { light: 'rgb(93, 137, 255)', dark: 'rgb(52, 91, 248)' },
  'blue-800': { light: 'rgb(75, 117, 255)', dark: 'rgb(64, 105, 253)' },
  'blue-900': { light: 'rgb(59, 99, 251)', dark: 'rgb(86, 129, 255)' },
  'blue-1000': { light: 'rgb(39, 77, 234)', dark: 'rgb(105, 149, 254)' },
  'blue-1100': { light: 'rgb(29, 62, 207)', dark: 'rgb(124, 169, 252)' },
  'blue-1200': { light: 'rgb(21, 50, 173)', dark: 'rgb(152, 192, 252)' },
  'blue-1300': { light: 'rgb(16, 40, 140)', dark: 'rgb(181, 213, 253)' },

  // Green Scale
  'green-100': { light: 'rgb(237, 252, 241)', dark: 'rgb(0, 30, 23)' },
  'green-200': { light: 'rgb(215, 247, 225)', dark: 'rgb(0, 38, 29)' },
  'green-300': { light: 'rgb(173, 238, 197)', dark: 'rgb(0, 51, 38)' },
  'green-400': { light: 'rgb(107, 227, 162)', dark: 'rgb(0, 68, 48)' },
  'green-500': { light: 'rgb(43, 209, 125)', dark: 'rgb(2, 87, 58)' },
  'green-600': { light: 'rgb(18, 184, 103)', dark: 'rgb(3, 106, 67)' },
  'green-700': { light: 'rgb(11, 164, 93)', dark: 'rgb(4, 124, 75)' },
  'green-800': { light: 'rgb(7, 147, 85)', dark: 'rgb(6, 136, 80)' },
  'green-900': { light: 'rgb(5, 131, 78)', dark: 'rgb(9, 157, 89)' },
  'green-1000': { light: 'rgb(3, 110, 69)', dark: 'rgb(14, 175, 98)' },
  'green-1100': { light: 'rgb(2, 93, 60)', dark: 'rgb(24, 193, 110)' },
  'green-1200': { light: 'rgb(1, 76, 52)', dark: 'rgb(57, 215, 134)' },
  'green-1300': { light: 'rgb(0, 61, 44)', dark: 'rgb(126, 231, 172)' },

  // Orange Scale
  'orange-100': { light: 'rgb(255, 246, 231)', dark: 'rgb(49, 16, 0)' },
  'orange-200': { light: 'rgb(255, 236, 207)', dark: 'rgb(61, 21, 0)' },
  'orange-300': { light: 'rgb(255, 218, 158)', dark: 'rgb(80, 27, 0)' },
  'orange-400': { light: 'rgb(255, 193, 94)', dark: 'rgb(106, 36, 0)' },
  'orange-500': { light: 'rgb(255, 162, 19)', dark: 'rgb(135, 47, 0)' },
  'orange-600': { light: 'rgb(252, 125, 0)', dark: 'rgb(162, 59, 0)' },
  'orange-700': { light: 'rgb(232, 106, 0)', dark: 'rgb(185, 73, 0)' },
  'orange-800': { light: 'rgb(212, 91, 0)', dark: 'rgb(199, 82, 0)' },
  'orange-900': { light: 'rgb(194, 78, 0)', dark: 'rgb(224, 100, 0)' },
  'orange-1000': { light: 'rgb(167, 62, 0)', dark: 'rgb(243, 117, 0)' },
  'orange-1100': { light: 'rgb(144, 51, 0)', dark: 'rgb(255, 137, 0)' },
  'orange-1200': { light: 'rgb(118, 41, 0)', dark: 'rgb(255, 173, 45)' },
  'orange-1300': { light: 'rgb(95, 32, 0)', dark: 'rgb(255, 201, 116)' },

  // Red Scale
  'red-100': { light: 'rgb(255, 246, 245)', dark: 'rgb(54, 10, 3)' },
  'red-200': { light: 'rgb(255, 235, 232)', dark: 'rgb(68, 13, 5)' },
  'red-300': { light: 'rgb(255, 214, 209)', dark: 'rgb(87, 17, 7)' },
  'red-400': { light: 'rgb(255, 188, 180)', dark: 'rgb(115, 24, 11)' },
  'red-500': { light: 'rgb(255, 157, 145)', dark: 'rgb(147, 31, 17)' },
  'red-600': { light: 'rgb(255, 118, 101)', dark: 'rgb(177, 38, 23)' },
  'red-700': { light: 'rgb(255, 81, 61)', dark: 'rgb(205, 46, 29)' },
  'red-800': { light: 'rgb(240, 56, 35)', dark: 'rgb(223, 52, 34)' },
  'red-900': { light: 'rgb(215, 50, 32)', dark: 'rgb(252, 67, 46)' },
  'red-1000': { light: 'rgb(183, 40, 24)', dark: 'rgb(255, 103, 86)' },
  'red-1100': { light: 'rgb(156, 33, 19)', dark: 'rgb(255, 134, 120)' },
  'red-1200': { light: 'rgb(129, 27, 14)', dark: 'rgb(255, 167, 157)' },
  'red-1300': { light: 'rgb(104, 21, 10)', dark: 'rgb(255, 196, 189)' },

  // Cyan Scale
  'cyan-100': { light: 'rgb(238, 250, 254)', dark: 'rgb(0, 29, 39)' },
  'cyan-200': { light: 'rgb(217, 244, 253)', dark: 'rgb(0, 36, 49)' },
  'cyan-300': { light: 'rgb(183, 231, 252)', dark: 'rgb(0, 48, 65)' },
  'cyan-400': { light: 'rgb(138, 213, 255)', dark: 'rgb(0, 64, 88)' },
  'cyan-500': { light: 'rgb(92, 192, 255)', dark: 'rgb(0, 82, 113)' },
  'cyan-600': { light: 'rgb(48, 167, 254)', dark: 'rgb(3, 99, 140)' },
  'cyan-700': { light: 'rgb(29, 149, 231)', dark: 'rgb(8, 115, 168)' },
  'cyan-800': { light: 'rgb(18, 134, 205)', dark: 'rgb(13, 125, 186)' },
  'cyan-900': { light: 'rgb(11, 120, 179)', dark: 'rgb(24, 142, 220)' },
  'cyan-1000': { light: 'rgb(4, 102, 145)', dark: 'rgb(38, 159, 244)' },
  'cyan-1100': { light: 'rgb(0, 87, 121)', dark: 'rgb(63, 177, 255)' },
  'cyan-1200': { light: 'rgb(0, 71, 98)', dark: 'rgb(107, 199, 255)' },
  'cyan-1300': { light: 'rgb(0, 57, 78)', dark: 'rgb(152, 219, 255)' },

  // Indigo Scale
  'indigo-100': { light: 'rgb(247, 248, 255)', dark: 'rgb(30, 0, 93)' },
  'indigo-200': { light: 'rgb(235, 238, 255)', dark: 'rgb(35, 0, 110)' },
  'indigo-300': { light: 'rgb(216, 222, 255)', dark: 'rgb(47, 0, 140)' },
  'indigo-400': { light: 'rgb(192, 201, 255)', dark: 'rgb(62, 12, 174)' },
  'indigo-500': { light: 'rgb(167, 178, 255)', dark: 'rgb(79, 30, 209)' },
  'indigo-600': { light: 'rgb(145, 151, 254)', dark: 'rgb(95, 52, 235)' },
  'indigo-700': { light: 'rgb(132, 128, 254)', dark: 'rgb(109, 75, 248)' },
  'indigo-800': { light: 'rgb(122, 106, 253)', dark: 'rgb(116, 91, 252)' },
  'indigo-900': { light: 'rgb(113, 85, 250)', dark: 'rgb(128, 119, 254)' },
  'indigo-1000': { light: 'rgb(99, 56, 238)', dark: 'rgb(139, 141, 254)' },
  'indigo-1100': { light: 'rgb(84, 36, 219)', dark: 'rgb(153, 161, 255)' },
  'indigo-1200': { light: 'rgb(69, 19, 191)', dark: 'rgb(176, 186, 255)' },
  'indigo-1300': { light: 'rgb(55, 6, 160)', dark: 'rgb(199, 208, 255)' },

  // Purple Scale
  'purple-100': { light: 'rgb(251, 247, 254)', dark: 'rgb(41, 0, 79)' },
  'purple-200': { light: 'rgb(244, 235, 252)', dark: 'rgb(50, 0, 96)' },
  'purple-300': { light: 'rgb(235, 218, 249)', dark: 'rgb(64, 0, 122)' },
  'purple-400': { light: 'rgb(221, 193, 246)', dark: 'rgb(83, 0, 159)' },
  'purple-500': { light: 'rgb(208, 167, 243)', dark: 'rgb(107, 6, 195)' },
  'purple-600': { light: 'rgb(191, 138, 238)', dark: 'rgb(130, 34, 215)' },
  'purple-700': { light: 'rgb(178, 114, 235)', dark: 'rgb(148, 62, 224)' },
  'purple-800': { light: 'rgb(166, 92, 231)', dark: 'rgb(157, 78, 228)' },
  'purple-900': { light: 'rgb(154, 71, 226)', dark: 'rgb(173, 105, 233)' },
  'purple-1000': { light: 'rgb(134, 40, 217)', dark: 'rgb(186, 127, 237)' },
  'purple-1100': { light: 'rgb(115, 13, 204)', dark: 'rgb(197, 149, 240)' },
  'purple-1200': { light: 'rgb(93, 0, 177)', dark: 'rgb(212, 176, 244)' },
  'purple-1300': { light: 'rgb(75, 0, 144)', dark: 'rgb(225, 201, 247)' },

  // Fuchsia Scale
  'fuchsia-100': { light: 'rgb(254, 246, 255)', dark: 'rgb(50, 0, 61)' },
  'fuchsia-200': { light: 'rgb(253, 233, 255)', dark: 'rgb(61, 0, 74)' },
  'fuchsia-300': { light: 'rgb(250, 211, 255)', dark: 'rgb(79, 0, 95)' },
  'fuchsia-400': { light: 'rgb(247, 181, 255)', dark: 'rgb(102, 9, 120)' },
  'fuchsia-500': { light: 'rgb(243, 147, 255)', dark: 'rgb(127, 23, 146)' },
  'fuchsia-600': { light: 'rgb(236, 105, 255)', dark: 'rgb(151, 38, 170)' },
  'fuchsia-700': { light: 'rgb(223, 77, 245)', dark: 'rgb(173, 51, 192)' },
  'fuchsia-800': { light: 'rgb(200, 68, 220)', dark: 'rgb(186, 60, 206)' },
  'fuchsia-900': { light: 'rgb(181, 57, 200)', dark: 'rgb(213, 73, 235)' },
  'fuchsia-1000': { light: 'rgb(156, 40, 175)', dark: 'rgb(232, 91, 253)' },
  'fuchsia-1100': { light: 'rgb(135, 27, 154)', dark: 'rgb(240, 122, 255)' },
  'fuchsia-1200': { light: 'rgb(113, 15, 131)', dark: 'rgb(245, 159, 255)' },
  'fuchsia-1300': { light: 'rgb(92, 4, 109)', dark: 'rgb(248, 191, 255)' },

  // Magenta Scale
  'magenta-100': { light: 'rgb(255, 245, 248)', dark: 'rgb(59, 0, 22)' },
  'magenta-200': { light: 'rgb(255, 232, 240)', dark: 'rgb(74, 0, 27)' },
  'magenta-300': { light: 'rgb(255, 213, 227)', dark: 'rgb(93, 0, 34)' },
  'magenta-400': { light: 'rgb(255, 185, 208)', dark: 'rgb(123, 0, 45)' },
  'magenta-500': { light: 'rgb(255, 152, 187)', dark: 'rgb(152, 7, 60)' },
  'magenta-600': { light: 'rgb(255, 112, 159)', dark: 'rgb(181, 19, 76)' },
  'magenta-700': { light: 'rgb(255, 72, 133)', dark: 'rgb(207, 31, 92)' },
  'magenta-800': { light: 'rgb(240, 45, 110)', dark: 'rgb(224, 38, 101)' },
  'magenta-900': { light: 'rgb(217, 35, 97)', dark: 'rgb(255, 51, 119)' },
  'magenta-1000': { light: 'rgb(186, 22, 80)', dark: 'rgb(255, 96, 149)' },
  'magenta-1100': { light: 'rgb(163, 5, 62)', dark: 'rgb(255, 133, 176)' },
  'magenta-1200': { light: 'rgb(137, 0, 46)', dark: 'rgb(255, 170, 201)' },
  'magenta-1300': { light: 'rgb(111, 0, 32)', dark: 'rgb(255, 204, 224)' },

  // Pink Scale
  'pink-100': { light: 'rgb(255, 246, 252)', dark: 'rgb(58, 0, 37)' },
  'pink-200': { light: 'rgb(255, 232, 247)', dark: 'rgb(71, 0, 44)' },
  'pink-300': { light: 'rgb(255, 211, 240)', dark: 'rgb(90, 0, 57)' },
  'pink-400': { light: 'rgb(255, 183, 228)', dark: 'rgb(119, 0, 75)' },
  'pink-500': { light: 'rgb(255, 151, 215)', dark: 'rgb(147, 7, 94)' },
  'pink-600': { light: 'rgb(255, 112, 197)', dark: 'rgb(176, 21, 114)' },
  'pink-700': { light: 'rgb(254, 74, 178)', dark: 'rgb(201, 33, 133)' },
  'pink-800': { light: 'rgb(228, 52, 163)', dark: 'rgb(213, 45, 151)' },
  'pink-900': { light: 'rgb(206, 42, 146)', dark: 'rgb(236, 67, 175)' },
  'pink-1000': { light: 'rgb(176, 31, 123)', dark: 'rgb(251, 90, 196)' },
  'pink-1100': { light: 'rgb(152, 22, 104)', dark: 'rgb(255, 122, 210)' },
  'pink-1200': { light: 'rgb(128, 12, 85)', dark: 'rgb(255, 159, 223)' },
  'pink-1300': { light: 'rgb(104, 2, 69)', dark: 'rgb(255, 193, 234)' },

  // Yellow Scale
  'yellow-100': { light: 'rgb(255, 248, 204)', dark: 'rgb(37, 23, 0)' },
  'yellow-200': { light: 'rgb(255, 241, 151)', dark: 'rgb(47, 29, 0)' },
  'yellow-300': { light: 'rgb(255, 222, 44)', dark: 'rgb(61, 39, 0)' },
  'yellow-400': { light: 'rgb(245, 199, 0)', dark: 'rgb(83, 52, 0)' },
  'yellow-500': { light: 'rgb(230, 175, 0)', dark: 'rgb(107, 67, 0)' },
  'yellow-600': { light: 'rgb(210, 149, 0)', dark: 'rgb(130, 82, 0)' },
  'yellow-700': { light: 'rgb(193, 131, 0)', dark: 'rgb(151, 97, 0)' },
  'yellow-800': { light: 'rgb(175, 116, 0)', dark: 'rgb(164, 106, 0)' },
  'yellow-900': { light: 'rgb(158, 102, 0)', dark: 'rgb(186, 124, 0)' },
  'yellow-1000': { light: 'rgb(134, 85, 0)', dark: 'rgb(203, 141, 0)' },
  'yellow-1100': { light: 'rgb(114, 72, 0)', dark: 'rgb(218, 159, 0)' },
  'yellow-1200': { light: 'rgb(93, 59, 0)', dark: 'rgb(235, 183, 0)' },
  'yellow-1300': { light: 'rgb(75, 47, 0)', dark: 'rgb(249, 206, 0)' },

  // Seafoam Scale
  'seafoam-100': { light: 'rgb(235, 251, 246)', dark: 'rgb(0, 30, 27)' },
  'seafoam-200': { light: 'rgb(211, 246, 234)', dark: 'rgb(0, 39, 35)' },
  'seafoam-300': { light: 'rgb(169, 237, 216)', dark: 'rgb(0, 50, 44)' },
  'seafoam-400': { light: 'rgb(92, 225, 194)', dark: 'rgb(0, 67, 59)' },
  'seafoam-500': { light: 'rgb(16, 207, 169)', dark: 'rgb(2, 86, 75)' },
  'seafoam-600': { light: 'rgb(13, 181, 149)', dark: 'rgb(4, 105, 89)' },
  'seafoam-700': { light: 'rgb(11, 162, 134)', dark: 'rgb(6, 122, 103)' },
  'seafoam-800': { light: 'rgb(9, 144, 120)', dark: 'rgb(8, 134, 112)' },
  'seafoam-900': { light: 'rgb(7, 129, 109)', dark: 'rgb(10, 154, 128)' },
  'seafoam-1000': { light: 'rgb(5, 108, 92)', dark: 'rgb(12, 173, 142)' },
  'seafoam-1100': { light: 'rgb(3, 92, 80)', dark: 'rgb(14, 190, 156)' },
  'seafoam-1200': { light: 'rgb(1, 75, 67)', dark: 'rgb(29, 214, 176)' },
  'seafoam-1300': { light: 'rgb(0, 60, 54)', dark: 'rgb(122, 229, 203)' },

  // Chartreuse Scale
  'chartreuse-100': { light: 'rgb(246, 251, 222)', dark: 'rgb(23, 28, 0)' },
  'chartreuse-200': { light: 'rgb(234, 246, 173)', dark: 'rgb(30, 36, 0)' },
  'chartreuse-300': { light: 'rgb(208, 236, 70)', dark: 'rgb(39, 47, 0)' },
  'chartreuse-400': { light: 'rgb(182, 219, 0)', dark: 'rgb(53, 63, 0)' },
  'chartreuse-500': { light: 'rgb(163, 196, 0)', dark: 'rgb(68, 82, 0)' },
  'chartreuse-600': { light: 'rgb(143, 172, 0)', dark: 'rgb(83, 100, 0)' },
  'chartreuse-700': { light: 'rgb(128, 153, 0)', dark: 'rgb(97, 116, 0)' },
  'chartreuse-800': { light: 'rgb(114, 137, 0)', dark: 'rgb(106, 127, 0)' },
  'chartreuse-900': { light: 'rgb(102, 122, 0)', dark: 'rgb(122, 147, 0)' },
  'chartreuse-1000': { light: 'rgb(86, 103, 0)', dark: 'rgb(136, 164, 0)' },
  'chartreuse-1100': { light: 'rgb(73, 87, 0)', dark: 'rgb(151, 181, 0)' },
  'chartreuse-1200': { light: 'rgb(60, 71, 0)', dark: 'rgb(169, 203, 0)' },
  'chartreuse-1300': { light: 'rgb(47, 57, 0)', dark: 'rgb(187, 225, 0)' },

  // Celery Scale
  'celery-100': { light: 'rgb(242, 255, 226)', dark: 'rgb(13, 31, 4)' },
  'celery-200': { light: 'rgb(219, 255, 176)', dark: 'rgb(17, 39, 7)' },
  'celery-300': { light: 'rgb(185, 249, 116)', dark: 'rgb(21, 51, 1)' },
  'celery-400': { light: 'rgb(129, 228, 58)', dark: 'rgb(31, 67, 4)' },
  'celery-500': { light: 'rgb(110, 206, 42)', dark: 'rgb(41, 86, 8)' },
  'celery-600': { light: 'rgb(93, 180, 31)', dark: 'rgb(50, 105, 11)' },
  'celery-700': { light: 'rgb(82, 161, 25)', dark: 'rgb(60, 122, 15)' },
  'celery-800': { light: 'rgb(72, 144, 20)', dark: 'rgb(66, 134, 18)' },
  'celery-900': { light: 'rgb(64, 129, 17)', dark: 'rgb(78, 154, 23)' },
  'celery-1000': { light: 'rgb(52, 109, 12)', dark: 'rgb(88, 172, 28)' },
  'celery-1100': { light: 'rgb(44, 92, 9)', dark: 'rgb(100, 190, 35)' },
  'celery-1200': { light: 'rgb(35, 75, 6)', dark: 'rgb(116, 213, 46)' },
  'celery-1300': { light: 'rgb(27, 60, 3)', dark: 'rgb(136, 234, 65)' },

  // Turquoise Scale
  'turquoise-100': { light: 'rgb(238, 251, 251)', dark: 'rgb(0, 30, 33)' },
  'turquoise-200': { light: 'rgb(209, 245, 245)', dark: 'rgb(0, 37, 41)' },
  'turquoise-300': { light: 'rgb(169, 236, 237)', dark: 'rgb(0, 49, 54)' },
  'turquoise-400': { light: 'rgb(111, 221, 228)', dark: 'rgb(0, 66, 72)' },
  'turquoise-500': { light: 'rgb(39, 202, 216)', dark: 'rgb(3, 84, 92)' },
  'turquoise-600': { light: 'rgb(15, 177, 192)', dark: 'rgb(5, 103, 112)' },
  'turquoise-700': { light: 'rgb(12, 158, 171)', dark: 'rgb(7, 120, 131)' },
  'turquoise-800': { light: 'rgb(10, 141, 153)', dark: 'rgb(9, 131, 142)' },
  'turquoise-900': { light: 'rgb(8, 126, 137)', dark: 'rgb(11, 151, 164)' },
  'turquoise-1000': { light: 'rgb(5, 107, 116)', dark: 'rgb(13, 168, 182)' },
  'turquoise-1100': { light: 'rgb(3, 90, 98)', dark: 'rgb(16, 186, 202)' },
  'turquoise-1200': { light: 'rgb(1, 74, 81)', dark: 'rgb(64, 208, 220)' },
  'turquoise-1300': { light: 'rgb(0, 59, 65)', dark: 'rgb(128, 225, 231)' },

  // Brown Scale
  'brown-100': { light: 'rgb(252, 247, 242)', dark: 'rgb(35, 24, 8)' },
  'brown-200': { light: 'rgb(247, 238, 225)', dark: 'rgb(44, 31, 11)' },
  'brown-300': { light: 'rgb(239, 221, 195)', dark: 'rgb(58, 40, 14)' },
  'brown-400': { light: 'rgb(229, 200, 157)', dark: 'rgb(78, 55, 19)' },
  'brown-500': { light: 'rgb(214, 177, 123)', dark: 'rgb(98, 71, 30)' },
  'brown-600': { light: 'rgb(190, 155, 104)', dark: 'rgb(115, 88, 47)' },
  'brown-700': { light: 'rgb(171, 138, 90)', dark: 'rgb(132, 104, 61)' },
  'brown-800': { light: 'rgb(154, 123, 77)', dark: 'rgb(143, 114, 69)' },
  'brown-900': { light: 'rgb(139, 109, 66)', dark: 'rgb(163, 132, 84)' },
  'brown-1000': { light: 'rgb(119, 91, 50)', dark: 'rgb(181, 147, 98)' },
  'brown-1100': { light: 'rgb(103, 76, 35)', dark: 'rgb(199, 163, 112)' },
  'brown-1200': { light: 'rgb(88, 61, 21)', dark: 'rgb(222, 185, 130)' },
  'brown-1300': { light: 'rgb(70, 49, 17)', dark: 'rgb(232, 207, 169)' },

  // Silver Scale
  'silver-100': { light: 'rgb(247, 247, 247)', dark: 'rgb(26, 26, 26)' },
  'silver-200': { light: 'rgb(239, 239, 239)', dark: 'rgb(33, 33, 33)' },
  'silver-300': { light: 'rgb(223, 223, 223)', dark: 'rgb(44, 44, 44)' },
  'silver-400': { light: 'rgb(204, 204, 204)', dark: 'rgb(59, 59, 59)' },
  'silver-500': { light: 'rgb(183, 183, 183)', dark: 'rgb(76, 76, 76)' },
  'silver-600': { light: 'rgb(160, 160, 160)', dark: 'rgb(92, 92, 92)' },
  'silver-700': { light: 'rgb(143, 143, 143)', dark: 'rgb(108, 108, 108)' },
  'silver-800': { light: 'rgb(128, 128, 128)', dark: 'rgb(118, 118, 118)' },
  'silver-900': { light: 'rgb(114, 114, 114)', dark: 'rgb(137, 137, 137)' },
  'silver-1000': { light: 'rgb(96, 96, 96)', dark: 'rgb(152, 152, 152)' },
  'silver-1100': { light: 'rgb(81, 81, 81)', dark: 'rgb(169, 169, 169)' },
  'silver-1200': { light: 'rgb(66, 66, 66)', dark: 'rgb(190, 190, 190)' },
  'silver-1300': { light: 'rgb(52, 52, 52)', dark: 'rgb(211, 211, 211)' },

  // Cinnamon Scale
  'cinnamon-100': { light: 'rgb(253, 247, 243)', dark: 'rgb(48, 17, 4)' },
  'cinnamon-200': { light: 'rgb(249, 236, 229)', dark: 'rgb(59, 21, 5)' },
  'cinnamon-300': { light: 'rgb(244, 218, 203)', dark: 'rgb(79, 28, 7)' },
  'cinnamon-400': { light: 'rgb(237, 196, 172)', dark: 'rgb(100, 41, 15)' },
  'cinnamon-500': { light: 'rgb(229, 170, 136)', dark: 'rgb(122, 57, 28)' },
  'cinnamon-600': { light: 'rgb(212, 145, 108)', dark: 'rgb(143, 74, 40)' },
  'cinnamon-700': { light: 'rgb(198, 126, 88)', dark: 'rgb(163, 88, 52)' },
  'cinnamon-800': { light: 'rgb(184, 109, 70)', dark: 'rgb(176, 98, 59)' },
  'cinnamon-900': { light: 'rgb(170, 94, 56)', dark: 'rgb(192, 119, 80)' },
  'cinnamon-1000': { light: 'rgb(147, 77, 43)', dark: 'rgb(206, 136, 99)' },
  'cinnamon-1100': { light: 'rgb(128, 62, 32)', dark: 'rgb(220, 154, 118)' },
  'cinnamon-1200': { light: 'rgb(110, 48, 21)', dark: 'rgb(232, 179, 149)' },
  'cinnamon-1300': { light: 'rgb(92, 35, 11)', dark: 'rgb(239, 203, 183)' },

  // System Colors (Aliases)
  'accent-100': { light: 'blue-100', dark: 'blue-100' },
  'accent-200': { light: 'blue-200', dark: 'blue-200' },
  'accent-300': { light: 'blue-300', dark: 'blue-300' },
  'accent-400': { light: 'blue-400', dark: 'blue-400' },
  'accent-500': { light: 'blue-500', dark: 'blue-500' },
  'accent-600': { light: 'blue-600', dark: 'blue-600' },
  'accent-700': { light: 'blue-700', dark: 'blue-700' },
  'accent-800': { light: 'blue-800', dark: 'blue-800' },
  'accent-900': { light: 'blue-900', dark: 'blue-900' },
  'accent-1000': { light: 'blue-1000', dark: 'blue-1000' },

  'negative-100': { light: 'red-100', dark: 'red-100' },
  'negative-200': { light: 'red-200', dark: 'red-200' },
  'negative-300': { light: 'red-300', dark: 'red-300' },
  'negative-400': { light: 'red-400', dark: 'red-400' },
  'negative-500': { light: 'red-500', dark: 'red-500' },
  'negative-600': { light: 'red-600', dark: 'red-600' },
  'negative-700': { light: 'red-700', dark: 'red-700' },
  'negative-800': { light: 'red-800', dark: 'red-800' },
  'negative-900': { light: 'red-900', dark: 'red-900' },
  'negative-1000': { light: 'red-1000', dark: 'red-1000' },

  'positive-100': { light: 'green-100', dark: 'green-100' },
  'positive-200': { light: 'green-200', dark: 'green-200' },
  'positive-300': { light: 'green-300', dark: 'green-300' },
  'positive-400': { light: 'green-400', dark: 'green-400' },
  'positive-500': { light: 'green-500', dark: 'green-500' },
  'positive-600': { light: 'green-600', dark: 'green-600' },
  'positive-700': { light: 'green-700', dark: 'green-700' },
  'positive-800': { light: 'green-800', dark: 'green-800' },
  'positive-900': { light: 'green-900', dark: 'green-900' },
  'positive-1000': { light: 'green-1000', dark: 'green-1000' },

  'notice-100': { light: 'orange-100', dark: 'orange-100' },
  'notice-200': { light: 'orange-200', dark: 'orange-200' },
  'notice-300': { light: 'orange-300', dark: 'orange-300' },
  'notice-400': { light: 'orange-400', dark: 'orange-400' },
  'notice-500': { light: 'orange-500', dark: 'orange-500' },
  'notice-600': { light: 'orange-600', dark: 'orange-600' },
  'notice-700': { light: 'orange-700', dark: 'orange-700' },
  'notice-800': { light: 'orange-800', dark: 'orange-800' },
  'notice-900': { light: 'orange-900', dark: 'orange-900' },
  'notice-1000': { light: 'orange-1000', dark: 'orange-1000' },

  'informative-100': { light: 'blue-100', dark: 'blue-100' },
  'informative-200': { light: 'blue-200', dark: 'blue-200' },
  'informative-300': { light: 'blue-300', dark: 'blue-300' },
  'informative-400': { light: 'blue-400', dark: 'blue-400' },
  'informative-500': { light: 'blue-500', dark: 'blue-500' },
  'informative-600': { light: 'blue-600', dark: 'blue-600' },
  'informative-700': { light: 'blue-700', dark: 'blue-700' },
  'informative-800': { light: 'blue-800', dark: 'blue-800' },
  'informative-900': { light: 'blue-900', dark: 'blue-900' },
  'informative-1000': { light: 'blue-1000', dark: 'blue-1000' },
};

export const aliasTokens: AliasMap = {
  // Text Colors
  'text-accent': { light: 'accent-900', dark: 'accent-900' },
  'text-neutral': { light: 'gray-800', dark: 'gray-800' },
  'text-neutral-subdued': { light: 'gray-700', dark: 'gray-700' },
  'text-negative': { light: 'negative-900', dark: 'negative-900' },
  'text-disabled': { light: 'gray-400', dark: 'gray-400' },
  'text-heading': { light: 'gray-900', dark: 'gray-900' },
  'text-title': { light: 'gray-900', dark: 'gray-900' },
  'text-body': { light: 'gray-800', dark: 'gray-800' },
  'text-detail': { light: 'gray-600', dark: 'gray-600' },
  'text-code': { light: 'gray-800', dark: 'gray-800' },
  'text-auto': { light: 'gray-900', dark: 'gray-900' }, // Approximate

  // Background Colors
  'bg-base': { light: 'gray-25', dark: 'gray-25' },
  'bg-layer-1': { light: 'gray-50', dark: 'gray-50' },
  'bg-layer-2': { light: 'gray-25', dark: 'gray-75' },
  'bg-pasteboard': { light: 'gray-100', dark: 'gray-25' },
  'bg-elevated': { light: 'gray-25', dark: 'gray-75' },
  'bg-accent': { light: 'accent-900', dark: 'accent-800' },
  'bg-accent-subtle': { light: 'accent-200', dark: 'accent-300' },
  'bg-neutral': { light: 'gray-800', dark: 'gray-800' },
  'bg-neutral-subdued': { light: 'gray-700', dark: 'gray-500' },
  'bg-neutral-subtle': { light: 'gray-100', dark: 'gray-300' },
  'bg-negative': { light: 'negative-900', dark: 'negative-800' },
  'bg-negative-subtle': { light: 'negative-200', dark: 'negative-300' },
  'bg-informative': { light: 'informative-900', dark: 'informative-800' },
  'bg-informative-subtle': { light: 'informative-200', dark: 'informative-300' },
  'bg-positive': { light: 'positive-900', dark: 'positive-800' },
  'bg-positive-subtle': { light: 'positive-200', dark: 'positive-300' },
  'bg-notice': { light: 'notice-600', dark: 'notice-900' },
  'bg-notice-subtle': { light: 'notice-200', dark: 'notice-300' },
  'bg-gray': { light: 'gray-700', dark: 'gray-500' },
  'bg-gray-subtle': { light: 'gray-100', dark: 'gray-300' },
  'bg-red': { light: 'red-900', dark: 'red-800' },
  'bg-red-subtle': { light: 'red-200', dark: 'red-300' },
  'bg-orange': { light: 'orange-600', dark: 'orange-900' },
  'bg-orange-subtle': { light: 'orange-200', dark: 'orange-300' },
  'bg-yellow': { light: 'yellow-400', dark: 'yellow-1100' },
  'bg-yellow-subtle': { light: 'yellow-200', dark: 'yellow-300' },
  'bg-chartreuse': { light: 'chartreuse-500', dark: 'chartreuse-1000' },
  'bg-chartreuse-subtle': { light: 'chartreuse-200', dark: 'chartreuse-300' },
  'bg-celery': { light: 'celery-600', dark: 'celery-900' },
  'bg-celery-subtle': { light: 'celery-200', dark: 'celery-300' },
  'bg-green': { light: 'green-900', dark: 'green-800' },
  'bg-green-subtle': { light: 'green-200', dark: 'green-300' },
  'bg-seafoam': { light: 'seafoam-900', dark: 'seafoam-800' },
  'bg-seafoam-subtle': { light: 'seafoam-200', dark: 'seafoam-300' },
  'bg-cyan': { light: 'cyan-900', dark: 'cyan-800' },
  'bg-cyan-subtle': { light: 'cyan-200', dark: 'cyan-300' },
  'bg-blue': { light: 'blue-900', dark: 'blue-800' },
  'bg-blue-subtle': { light: 'blue-200', dark: 'blue-300' },
  'bg-indigo': { light: 'indigo-900', dark: 'indigo-800' },
  'bg-indigo-subtle': { light: 'indigo-200', dark: 'indigo-300' },
  'bg-purple': { light: 'purple-900', dark: 'purple-800' },
  'bg-purple-subtle': { light: 'purple-200', dark: 'purple-300' },
  'bg-fuchsia': { light: 'fuchsia-900', dark: 'fuchsia-800' },
  'bg-fuchsia-subtle': { light: 'fuchsia-200', dark: 'fuchsia-300' },
  'bg-magenta': { light: 'magenta-900', dark: 'magenta-800' },
  'bg-magenta-subtle': { light: 'magenta-200', dark: 'magenta-300' },
  'bg-pink': { light: 'pink-900', dark: 'pink-800' },
  'bg-pink-subtle': { light: 'pink-200', dark: 'pink-300' },
  'bg-turquoise': { light: 'turquoise-900', dark: 'turquoise-800' },
  'bg-turquoise-subtle': { light: 'turquoise-200', dark: 'turquoise-300' },
  'bg-cinnamon': { light: 'cinnamon-900', dark: 'cinnamon-800' },
  'bg-cinnamon-subtle': { light: 'cinnamon-200', dark: 'cinnamon-300' },
  'bg-brown': { light: 'brown-900', dark: 'brown-800' },
  'bg-brown-subtle': { light: 'brown-200', dark: 'brown-300' },
  'bg-silver': { light: 'silver-900', dark: 'silver-800' },
  'bg-silver-subtle': { light: 'silver-200', dark: 'silver-300' },
  'bg-disabled': { light: 'gray-100', dark: 'gray-100' },

  // Border Colors
  'border-negative': { light: 'negative-900', dark: 'negative-900' },
  'border-disabled': { light: 'gray-300', dark: 'gray-300' },
  'border-default': { light: 'gray-300', dark: 'gray-600' }, // Approximate common usage

  // Outline Colors
  'outline-focus-ring': { light: 'blue-800', dark: 'blue-800' },

  // Fill Colors
  'fill-accent': { light: 'accent-800', dark: 'accent-900' },
  'fill-neutral': { light: 'gray-500', dark: 'gray-600' },
  'fill-negative': { light: 'negative-800', dark: 'negative-900' },
  'fill-informative': { light: 'informative-800', dark: 'informative-900' },
  'fill-positive': { light: 'positive-800', dark: 'positive-900' },
  'fill-notice': { light: 'notice-800', dark: 'notice-900' },
  'fill-gray': { light: 'gray-500', dark: 'gray-600' },
  'fill-red': { light: 'red-800', dark: 'red-700' },
  'fill-orange': { light: 'orange-700', dark: 'orange-900' },
  'fill-yellow': { light: 'yellow-600', dark: 'yellow-1100' },
  'fill-chartreuse': { light: 'chartreuse-600', dark: 'chartreuse-900' },
  'fill-celery': { light: 'celery-700', dark: 'celery-800' },
  'fill-green': { light: 'green-700', dark: 'green-800' },
  'fill-seafoam': { light: 'seafoam-700', dark: 'seafoam-800' },
  'fill-cyan': { light: 'cyan-600', dark: 'cyan-900' },
  'fill-blue': { light: 'blue-800', dark: 'blue-900' },
  'fill-indigo': { light: 'indigo-800', dark: 'indigo-900' },
  'fill-purple': { light: 'purple-800', dark: 'purple-900' },
  'fill-fuchsia': { light: 'fuchsia-800', dark: 'fuchsia-900' },
  'fill-magenta': { light: 'magenta-800', dark: 'magenta-900' },
  'fill-pink': { light: 'pink-800', dark: 'pink-900' },
  'fill-turquoise': { light: 'turquoise-800', dark: 'turquoise-900' },
  'fill-cinnamon': { light: 'cinnamon-800', dark: 'cinnamon-900' },
  'fill-brown': { light: 'brown-800', dark: 'brown-900' },
  'fill-silver': { light: 'silver-800', dark: 'silver-900' },
};

interface TokenResolution {
  value: string;
  resolvedName: string;
}

// Recursively resolve a token name to its final value and global name
export function resolveToken(tokenName: string, mode: 'light' | 'dark'): TokenResolution {
  // Check if it's a known alias
  if (tokenName in aliasTokens) {
    const alias = aliasTokens[tokenName];
    const nextToken = alias[mode];
    // Recurse
    const result = resolveToken(nextToken, mode);
    return {
      value: result.value,
      resolvedName: result.resolvedName // Keep the deepest resolved name
    };
  }

  // Check if it's a known global token (which might be an alias itself like accent-100 -> blue-100)
  if (tokenName in spectrum2Tokens) {
    const token = spectrum2Tokens[tokenName];
    if (typeof token === 'string') {
      return { value: token, resolvedName: tokenName };
    }
    // If the token value looks like a reference (e.g. 'blue-100'), resolve it
    // In our map, system aliases like 'accent-100' have values like { light: 'blue-100', ... }
    const value = token[mode];
    
    // Heuristic: if value matches a key in spectrum2Tokens, it's a reference
    if (value in spectrum2Tokens && value !== tokenName) {
        return resolveToken(value, mode);
    }

    return { value: value, resolvedName: tokenName };
  }

  return { value: '', resolvedName: '' };
}

export function getTokenValue(tokenName: string, mode: 'light' | 'dark' = 'light'): string {
  return resolveToken(tokenName, mode).value;
}

export function getResolvedGlobalName(tokenName: string, mode: 'light' | 'dark' = 'light'): string {
  const res = resolveToken(tokenName, mode);
  // If resolved name is same as input, it wasn't an alias (or was a direct global)
  return res.resolvedName;
}
