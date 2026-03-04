// generated - do not edit!

import {server_CItem} from './CItem';
// Class size: 0xBF0
// BaseClass: : public CS2::server::CItem
export const server_CItemGeneric  = {
	...server_CItem,
	m_bHasTriggerRadius: 2772n, // bool m_bHasTriggerRadius; |  0xad4 | Schema_Builtin | Size: 0x1
	m_bHasPickupRadius: 2773n, // bool m_bHasPickupRadius; |  0xad5 | Schema_Builtin | Size: 0x1
	m_flPickupRadiusSqr: 2776n, // float32 m_flPickupRadiusSqr; |  0xad8 | Schema_Builtin | Size: 0x4
	m_flTriggerRadiusSqr: 2780n, // float32 m_flTriggerRadiusSqr; |  0xadc | Schema_Builtin | Size: 0x4
	m_flLastPickupCheck: 2784n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bPlayerCounterListenerAdded: 2788n, // bool m_bPlayerCounterListenerAdded; |  0xae4 | Schema_Builtin | Size: 0x1
	m_bPlayerInTriggerRadius: 2789n, // bool m_bPlayerInTriggerRadius; |  0xae5 | Schema_Builtin | Size: 0x1
	m_hSpawnParticleEffect: 2792n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pAmbientSoundEffect: 2800n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bAutoStartAmbientSound: 2808n, // bool m_bAutoStartAmbientSound; |  0xaf8 | Schema_Builtin | Size: 0x1
	m_pSpawnScriptFunction: 2816n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPickupParticleEffect: 2824n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pPickupSoundEffect: 2832n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pPickupScriptFunction: 2840n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hTimeoutParticleEffect: 2848n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_pTimeoutSoundEffect: 2856n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pTimeoutScriptFunction: 2864n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pPickupFilterName: 2872n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPickupFilter: 2880n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_OnPickup: 2888n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnTimeout: 2912n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnTriggerStartTouch: 2936n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnTriggerTouch: 2960n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnTriggerEndTouch: 2984n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_pAllowPickupScriptFunction: 3008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flPickupRadius: 3016n, // float32 m_flPickupRadius; |  0xbc8 | Schema_Builtin | Size: 0x4
	m_flTriggerRadius: 3020n, // float32 m_flTriggerRadius; |  0xbcc | Schema_Builtin | Size: 0x4
	m_pTriggerSoundEffect: 3024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bGlowWhenInTrigger: 3032n, // bool m_bGlowWhenInTrigger; |  0xbd8 | Schema_Builtin | Size: 0x1
	m_glowColor: 3033n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bUseable: 3037n, // bool m_bUseable; |  0xbdd | Schema_Builtin | Size: 0x1
	m_hTriggerHelper: 3040n, // GlobalTypes::CHandle<server::CItemGenericTriggerHelper>  | Schema_Atomic | Size: 0x4
}
