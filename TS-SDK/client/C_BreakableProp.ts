// generated - do not edit!

import {client_CBaseProp} from './CBaseProp';
// Class size: 0x12D0
// BaseClass: : public CS2::client::CBaseProp
export const client_C_BreakableProp  = {
	...client_CBaseProp,
	m_CPropDataComponent: 4512n, // client::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_OnStartDeath: 4576n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBreak: 4600n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnHealthChanged: 4624n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnTakeDamage: 4656n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_impactEnergyScale: 4680n, // float32 m_impactEnergyScale; |  0x1248 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 4684n, // int32_t m_iMinHealthDmg; |  0x124c | Schema_Builtin | Size: 0x4
	m_flPressureDelay: 4688n, // float32 m_flPressureDelay; |  0x1250 | Schema_Builtin | Size: 0x4
	m_flDefBurstScale: 4692n, // float32 m_flDefBurstScale; |  0x1254 | Schema_Builtin | Size: 0x4
	m_vDefBurstOffset: 4696n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hBreaker: 4708n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_PerformanceMode: 4712n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPreventDamageBeforeTime: 4716n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_BreakableContentsType: 4720n, // client::BreakableContentsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_strBreakableContentsPropGroupOverride: 4728n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strBreakableContentsParticleOverride: 4736n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bHasBreakPiecesOrCommands: 4744n, // bool m_bHasBreakPiecesOrCommands; |  0x1288 | Schema_Builtin | Size: 0x1
	m_explodeDamage: 4748n, // float32 m_explodeDamage; |  0x128c | Schema_Builtin | Size: 0x4
	m_explodeRadius: 4752n, // float32 m_explodeRadius; |  0x1290 | Schema_Builtin | Size: 0x4
	m_nExplosionType: 4756n, // client::BaseExplosionTypes_t  | Schema_DeclaredEnum | Size: 0x4
	m_explosionDelay: 4760n, // float32 m_explosionDelay; |  0x1298 | Schema_Builtin | Size: 0x4
	m_explosionBuildupSound: 4768n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomEffect: 4776n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionCustomSound: 4784n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_explosionModifier: 4792n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPhysicsAttacker: 4800n, // GlobalTypes::CHandle<client::C_BasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 4804n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefaultFadeScale: 4808n, // float32 m_flDefaultFadeScale; |  0x12c8 | Schema_Builtin | Size: 0x4
	m_hLastAttacker: 4812n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
}
