// generated - do not edit!

import {server_CItem} from './CItem';
// Class size: 0xCF0
// BaseClass: : public CS2::server::CItem
export const server_CItemGeneric  = {
	...server_CItem,
	m_bHasTriggerRadius: 2948n, // bool m_bHasTriggerRadius; |  0xb84 | Schema_Builtin | Size: 0x1
	m_bHasPickupRadius: 2949n, // bool m_bHasPickupRadius; |  0xb85 | Schema_Builtin | Size: 0x1
	m_flPickupRadiusSqr: 2952n, // float32 m_flPickupRadiusSqr; |  0xb88 | Schema_Builtin | Size: 0x4
	m_flTriggerRadiusSqr: 2956n, // float32 m_flTriggerRadiusSqr; |  0xb8c | Schema_Builtin | Size: 0x4
	m_flLastPickupCheck: 2960n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bPlayerCounterListenerAdded: 2964n, // bool m_bPlayerCounterListenerAdded; |  0xb94 | Schema_Builtin | Size: 0x1
	m_bPlayerInTriggerRadius: 2965n, // bool m_bPlayerInTriggerRadius; |  0xb95 | Schema_Builtin | Size: 0x1
	m_hSpawnParticleEffect: 2968n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pAmbientSoundEffect: 2976n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bAutoStartAmbientSound: 2984n, // bool m_bAutoStartAmbientSound; |  0xba8 | Schema_Builtin | Size: 0x1
	m_pSpawnScriptFunction: 2992n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPickupParticleEffect: 3000n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pPickupSoundEffect: 3008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pPickupScriptFunction: 3016n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTimeoutParticleEffect: 3024n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pTimeoutSoundEffect: 3032n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pTimeoutScriptFunction: 3040n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pPickupFilterName: 3048n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPickupFilter: 3056n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_OnPickup: 3064n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnTimeout: 3104n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnTriggerStartTouch: 3144n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnTriggerTouch: 3184n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnTriggerEndTouch: 3224n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_pAllowPickupScriptFunction: 3264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flPickupRadius: 3272n, // float32 m_flPickupRadius; |  0xcc8 | Schema_Builtin | Size: 0x4
	m_flTriggerRadius: 3276n, // float32 m_flTriggerRadius; |  0xccc | Schema_Builtin | Size: 0x4
	m_pTriggerSoundEffect: 3280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bGlowWhenInTrigger: 3288n, // bool m_bGlowWhenInTrigger; |  0xcd8 | Schema_Builtin | Size: 0x1
	m_glowColor: 3289n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bUseable: 3293n, // bool m_bUseable; |  0xcdd | Schema_Builtin | Size: 0x1
	m_hTriggerHelper: 3296n, // GlobalTypes::CHandle<server::CItemGenericTriggerHelper>  | Schema_Atomic | Size: 0x4
}
