import type { SVGProps } from 'react'
import {
  House,
  Airplane,
  AirplaneTilt,
  FirstAidKit,
  Pause,
  PauseCircle,
  CaretLeft,
  CaretRight,
  CaretDown,
  CaretUp,
  Users,
  Trophy,
  ArrowsLeftRight,
  ChartBar,
  MagnifyingGlass,
  X,
  CalendarBlank,
  Clock,
  Plus,
  Check,
  DiscordLogo,
  Moon,
  Sun,
  ChatTeardropText,
  UserCircle,
  Cards,
  ClipboardText,
  Star,
  Horse,
  Sparkle,
  Flower,
  Books,
  Palette,
  Medal,
  Butterfly,
  ArrowLineDown,
  Gear,
  DotsSixVertical,
  Lock,
  FastForward,
  Coins,
  Confetti,
  Crown,
  DiceThree,
  Exam,
  Fire,
  Gift,
  GlobeHemisphereWest,
  GraduationCap,
  HandPeace,
  MagicWand,
  MoonStars,
  MusicNotes,
  PawPrint,
  ShootingStar,
  Snowflake,
  Student,
  TreeEvergreen,
  YinYang
} from '@phosphor-icons/react'

export type IconProps = SVGProps<SVGSVGElement> & { size?: number }

/**
 * Gymcord's icon set — thin wrappers around Phosphor Icons (MIT licensed,
 * https://phosphoricons.com), "bold" weight, defaulting to `currentColor`.
 */

export function HomeIcon({ size = 18, ...props }: IconProps) {
  return <House size={size} weight="bold" {...props} />
}

export function PlaneIcon({ size = 18, ...props }: IconProps) {
  return <Airplane size={size} weight="bold" {...props} />
}

/** Away-meet travel icon — Phosphor's "tilted" airplane variant, used specifically for away-meet status. */
export function AwayIcon({ size = 18, ...props }: IconProps) {
  return <AirplaneTilt size={size} weight="bold" {...props} />
}

export function InjuryIcon({ size = 18, ...props }: IconProps) {
  return <FirstAidKit size={size} weight="bold" {...props} />
}

export function PauseIcon({ size = 18, ...props }: IconProps) {
  return <Pause size={size} weight="bold" {...props} />
}

export function PauseCircleIcon({ size = 18, ...props }: IconProps) {
  return <PauseCircle size={size} weight="bold" {...props} />
}

export function ChevronLeftIcon({ size = 18, ...props }: IconProps) {
  return <CaretLeft size={size} weight="bold" {...props} />
}

export function ChevronRightIcon({ size = 18, ...props }: IconProps) {
  return <CaretRight size={size} weight="bold" {...props} />
}

export function ChevronDownIcon({ size = 18, ...props }: IconProps) {
  return <CaretDown size={size} weight="bold" {...props} />
}

export function ChevronUpIcon({ size = 18, ...props }: IconProps) {
  return <CaretUp size={size} weight="bold" {...props} />
}

export function PeopleIcon({ size = 18, ...props }: IconProps) {
  return <Users size={size} weight="bold" {...props} />
}

export function TrophyIcon({ size = 18, ...props }: IconProps) {
  return <Trophy size={size} weight="bold" {...props} />
}

export function SwapIcon({ size = 18, ...props }: IconProps) {
  return <ArrowsLeftRight size={size} weight="bold" {...props} />
}

export function AnalyticsIcon({ size = 18, ...props }: IconProps) {
  return <ChartBar size={size} weight="bold" {...props} />
}

export function SearchIcon({ size = 18, ...props }: IconProps) {
  return <MagnifyingGlass size={size} weight="bold" {...props} />
}

export function CloseIcon({ size = 18, ...props }: IconProps) {
  return <X size={size} weight="bold" {...props} />
}

export function CalendarIcon({ size = 18, ...props }: IconProps) {
  return <CalendarBlank size={size} weight="bold" {...props} />
}

export function ClockIcon({ size = 18, ...props }: IconProps) {
  return <Clock size={size} weight="bold" {...props} />
}

export function PlusIcon({ size = 18, ...props }: IconProps) {
  return <Plus size={size} weight="bold" {...props} />
}

export function CheckIcon({ size = 18, ...props }: IconProps) {
  return <Check size={size} weight="bold" {...props} />
}

/** Discord's brand mark — "fill" weight to match Discord's own solid logo style. */
export function DiscordIcon({ size = 18, ...props }: IconProps) {
  return <DiscordLogo size={size} weight="fill" {...props} />
}

export function MoonIcon({ size = 18, ...props }: IconProps) {
  return <Moon size={size} weight="fill" {...props} />
}

export function SunIcon({ size = 18, ...props }: IconProps) {
  return <Sun size={size} weight="fill" {...props} />
}

export function ChatIcon({ size = 18, ...props }: IconProps) {
  return <ChatTeardropText size={size} weight="bold" {...props} />
}

export function UserCircleIcon({ size = 18, ...props }: IconProps) {
  return <UserCircle size={size} weight="bold" {...props} />
}

export function CardsIcon({ size = 18, ...props }: IconProps) {
  return <Cards size={size} weight="bold" {...props} />
}

export function ClipboardTextIcon({ size = 18, ...props }: IconProps) {
  return <ClipboardText size={size} weight="bold" {...props} />
}

/** "Copy to clipboard" affordance — Phosphor's down-into-tray arrow, per design direction. */
export function CopyIcon({ size = 18, ...props }: IconProps) {
  return <ArrowLineDown size={size} weight="bold" {...props} />
}

export function StarIcon({ size = 18, ...props }: IconProps) {
  return <Star size={size} weight="fill" {...props} />
}

/** Phosphor has no literal goat glyph — Horse is the nearest hooved-mascot substitute. */
export function GoatIcon({ size = 18, ...props }: IconProps) {
  return <Horse size={size} weight="fill" {...props} />
}

/** Phosphor has no literal unicorn glyph — Sparkle stands in for the same whimsical/magical mascot feel. */
export function UnicornIcon({ size = 18, ...props }: IconProps) {
  return <Sparkle size={size} weight="fill" {...props} />
}

export function FlowerIcon({ size = 18, ...props }: IconProps) {
  return <Flower size={size} weight="fill" {...props} />
}

export function BooksIcon({ size = 18, ...props }: IconProps) {
  return <Books size={size} weight="bold" {...props} />
}

export function PaletteIcon({ size = 18, ...props }: IconProps) {
  return <Palette size={size} weight="fill" {...props} />
}

export function MedalIcon({ size = 18, ...props }: IconProps) {
  return <Medal size={size} weight="fill" {...props} />
}

export function ButterflyIcon({ size = 18, ...props }: IconProps) {
  return <Butterfly size={size} weight="fill" {...props} />
}

export function GearIcon({ size = 18, ...props }: IconProps) {
  return <Gear size={size} weight="bold" {...props} />
}

/** Vertical six-dot grip — drag handle for reorderable list/table rows. */
export function DotsSixIcon({ size = 18, ...props }: IconProps) {
  return <DotsSixVertical size={size} weight="bold" {...props} />
}

export function LockIcon({ size = 18, ...props }: IconProps) {
  return <Lock size={size} weight="bold" {...props} />
}

export function FastForwardIcon({ size = 18, ...props }: IconProps) {
  return <FastForward size={size} weight="fill" {...props} />
}

export function CoinsIcon({ size = 18, ...props }: IconProps) {
  return <Coins size={size} weight="fill" {...props} />
}

export function ConfettiIcon({ size = 18, ...props }: IconProps) {
  return <Confetti size={size} weight="fill" {...props} />
}

export function CrownIcon({ size = 18, ...props }: IconProps) {
  return <Crown size={size} weight="fill" {...props} />
}

export function DiceThreeIcon({ size = 18, ...props }: IconProps) {
  return <DiceThree size={size} weight="fill" {...props} />
}

export function ExamIcon({ size = 18, ...props }: IconProps) {
  return <Exam size={size} weight="bold" {...props} />
}

export function FireIcon({ size = 18, ...props }: IconProps) {
  return <Fire size={size} weight="fill" {...props} />
}

export function GiftIcon({ size = 18, ...props }: IconProps) {
  return <Gift size={size} weight="fill" {...props} />
}

export function GlobeIcon({ size = 18, ...props }: IconProps) {
  return <GlobeHemisphereWest size={size} weight="bold" {...props} />
}

export function GraduationCapIcon({ size = 18, ...props }: IconProps) {
  return <GraduationCap size={size} weight="fill" {...props} />
}

export function HandPeaceIcon({ size = 18, ...props }: IconProps) {
  return <HandPeace size={size} weight="fill" {...props} />
}

export function MagicWandIcon({ size = 18, ...props }: IconProps) {
  return <MagicWand size={size} weight="fill" {...props} />
}

export function MoonStarsIcon({ size = 18, ...props }: IconProps) {
  return <MoonStars size={size} weight="fill" {...props} />
}

export function MusicNotesIcon({ size = 18, ...props }: IconProps) {
  return <MusicNotes size={size} weight="fill" {...props} />
}

export function PawPrintIcon({ size = 18, ...props }: IconProps) {
  return <PawPrint size={size} weight="fill" {...props} />
}

export function ShootingStarIcon({ size = 18, ...props }: IconProps) {
  return <ShootingStar size={size} weight="fill" {...props} />
}

export function SnowflakeIcon({ size = 18, ...props }: IconProps) {
  return <Snowflake size={size} weight="fill" {...props} />
}

export function SparkleIcon({ size = 18, ...props }: IconProps) {
  return <Sparkle size={size} weight="fill" {...props} />
}

export function StudentIcon({ size = 18, ...props }: IconProps) {
  return <Student size={size} weight="fill" {...props} />
}

export function EvergreenTreeIcon({ size = 18, ...props }: IconProps) {
  return <TreeEvergreen size={size} weight="fill" {...props} />
}

export function YinYangIcon({ size = 18, ...props }: IconProps) {
  return <YinYang size={size} weight="bold" {...props} />
}
