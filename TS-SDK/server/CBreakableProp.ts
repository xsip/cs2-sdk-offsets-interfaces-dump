// generated - do not edit!

import {server_CBaseProp} from './CBaseProp';
// Class size: 0xBA0
// BaseClass: : public CS2::server::CBaseProp
export const server_CBreakableProp  = {
	...server_CBaseProp,
	m_CPropDataComponent: 2648n, // server::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_OnStartDeath: 2712n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBreak: 2736n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnHealthChanged: 2760n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnTakeDamage: 2792n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_impactEnergyScale: 2816n, // float32 m_impactEnergyScale; |  0xb00 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 2820n, // int32_t m_iMinHealthDmg; |  0xb04 | Schema_Builtin | Size: 0x4
	m_preferredCarryAngles: 2824n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flPressureDelay: 2836n, // float32 m_flPressureDelay; |  0xb14 | Schema_Builtin | Size: 0x4
	m_flDefBurstScale: 2840n, // float32 m_flDefBurstScale; |  0xb18 | Schema_Builtin | Size: 0x4
	m_vDefBurstOffset: 2844n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hBreaker: 2856n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_PerformanceMode: 2860n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPreventDamageBeforeTime: 2864n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_BreakableContentsType: 2868n, // client::BreakableContentsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_strBreakableContentsPropGroupOverride: 2872n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strBreakableContentsParticleOverride: 2880n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bHasBreakPiecesOrCommands: 2888n, // bool m_bHasBreakPiecesOrCommands; |  0xb48 | Schema_Builtin | Size: 0x1
	m_explodeDamage: 2892n, // float32 m_explodeDamage; |  0xb4c | Schema_Builtin | Size: 0x4
	m_explodeRadius: 2896n, // float32 m_explodeRadius; |  0xb50 | Schema_Builtin | Size: 0x4
	m_nExplosionType: 2900n, // client::BaseExplosionTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_explosionDelay: 2904n, // float32 m_explosionDelay; |  0xb58 | Schema_Builtin | Size: 0x4
	m_explosionBuildupSound: 2912n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomEffect: 2920n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomSound: 2928n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionModifier: 2936n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPhysicsAttacker: 2944n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 2948n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefaultFadeScale: 2952n, // float32 m_flDefaultFadeScale; |  0xb88 | Schema_Builtin | Size: 0x4
	m_hLastAttacker: 2956n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszPuntSound: 2960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bUsePuntSound: 2968n, // bool m_bUsePuntSound; |  0xb98 | Schema_Builtin | Size: 0x1
	m_bOriginalBlockLOS: 2969n, // bool m_bOriginalBlockLOS; |  0xb99 | Schema_Builtin | Size: 0x1
}
