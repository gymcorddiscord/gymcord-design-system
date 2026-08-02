import type { SVGProps } from 'react'
import {
  House,
  Airplane,
  FirstAidKit,
  Pause,
  CaretLeft,
  CaretRight,
  CaretDown,
  Users,
  Trophy,
  ArrowsLeftRight,
  ChartBar
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

export function InjuryIcon({ size = 18, ...props }: IconProps) {
  return <FirstAidKit size={size} weight="bold" {...props} />
}

export function PauseIcon({ size = 18, ...props }: IconProps) {
  return <Pause size={size} weight="bold" {...props} />
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
