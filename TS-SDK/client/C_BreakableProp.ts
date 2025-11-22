// generated - do not edit!

import {client_CBaseProp} from './CBaseProp';
// Class size: 0x1300
// BaseClass: : public CS2::client::CBaseProp
export const client_C_BreakableProp  = {
	...client_CBaseProp,
	m_CPropDataComponent: 4496n, // client::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_OnStartDeath: 4560n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBreak: 4600n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnHealthChanged: 4640n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnTakeDamage: 4680n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_impactEnergyScale: 4720n, // float32 m_impactEnergyScale; |  0x1270 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 4724n, // int32_t m_iMinHealthDmg; |  0x1274 | Schema_Builtin | Size: 0x4
	m_flPressureDelay: 4728n, // float32 m_flPressureDelay; |  0x1278 | Schema_Builtin | Size: 0x4
	m_flDefBurstScale: 4732n, // float32 m_flDefBurstScale; |  0x127c | Schema_Builtin | Size: 0x4
	m_vDefBurstOffset: 4736n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hBreaker: 4748n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_PerformanceMode: 4752n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPreventDamageBeforeTime: 4756n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_BreakableContentsType: 4760n, // client::BreakableContentsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_strBreakableContentsPropGroupOverride: 4768n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strBreakableContentsParticleOverride: 4776n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bHasBreakPiecesOrCommands: 4784n, // bool m_bHasBreakPiecesOrCommands; |  0x12b0 | Schema_Builtin | Size: 0x1
	m_explodeDamage: 4788n, // float32 m_explodeDamage; |  0x12b4 | Schema_Builtin | Size: 0x4
	m_explodeRadius: 4792n, // float32 m_explodeRadius; |  0x12b8 | Schema_Builtin | Size: 0x4
	m_explosionDelay: 4800n, // float32 m_explosionDelay; |  0x12c0 | Schema_Builtin | Size: 0x4
	m_explosionBuildupSound: 4808n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomEffect: 4816n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomSound: 4824n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionModifier: 4832n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPhysicsAttacker: 4840n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 4844n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefaultFadeScale: 4848n, // float32 m_flDefaultFadeScale; |  0x12f0 | Schema_Builtin | Size: 0x4
	m_hLastAttacker: 4852n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
}
