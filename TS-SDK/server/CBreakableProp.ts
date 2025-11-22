// generated - do not edit!

import {server_CBaseProp} from './CBaseProp';
// Class size: 0xC50
// BaseClass: : public CS2::server::CBaseProp
export const server_CBreakableProp  = {
	...server_CBaseProp,
	m_CPropDataComponent: 2760n, // server::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_OnStartDeath: 2824n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBreak: 2864n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnHealthChanged: 2904n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnTakeDamage: 2944n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_impactEnergyScale: 2984n, // float32 m_impactEnergyScale; |  0xba8 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 2988n, // int32_t m_iMinHealthDmg; |  0xbac | Schema_Builtin | Size: 0x4
	m_preferredCarryAngles: 2992n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flPressureDelay: 3004n, // float32 m_flPressureDelay; |  0xbbc | Schema_Builtin | Size: 0x4
	m_flDefBurstScale: 3008n, // float32 m_flDefBurstScale; |  0xbc0 | Schema_Builtin | Size: 0x4
	m_vDefBurstOffset: 3012n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hBreaker: 3024n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_PerformanceMode: 3028n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPreventDamageBeforeTime: 3032n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_BreakableContentsType: 3036n, // client::BreakableContentsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_strBreakableContentsPropGroupOverride: 3040n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strBreakableContentsParticleOverride: 3048n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bHasBreakPiecesOrCommands: 3056n, // bool m_bHasBreakPiecesOrCommands; |  0xbf0 | Schema_Builtin | Size: 0x1
	m_explodeDamage: 3060n, // float32 m_explodeDamage; |  0xbf4 | Schema_Builtin | Size: 0x4
	m_explodeRadius: 3064n, // float32 m_explodeRadius; |  0xbf8 | Schema_Builtin | Size: 0x4
	m_explosionDelay: 3072n, // float32 m_explosionDelay; |  0xc00 | Schema_Builtin | Size: 0x4
	m_explosionBuildupSound: 3080n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomEffect: 3088n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomSound: 3096n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionModifier: 3104n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPhysicsAttacker: 3112n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 3116n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefaultFadeScale: 3120n, // float32 m_flDefaultFadeScale; |  0xc30 | Schema_Builtin | Size: 0x4
	m_hLastAttacker: 3124n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszPuntSound: 3128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bUsePuntSound: 3136n, // bool m_bUsePuntSound; |  0xc40 | Schema_Builtin | Size: 0x1
	m_bOriginalBlockLOS: 3137n, // bool m_bOriginalBlockLOS; |  0xc41 | Schema_Builtin | Size: 0x1
}
