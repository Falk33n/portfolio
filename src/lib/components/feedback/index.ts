import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Skeleton from './Skeleton.svelte';
import TooltipContent from './TooltipContent.svelte';

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipProvider = TooltipPrimitive.Provider;

export { Skeleton, TooltipContent };
