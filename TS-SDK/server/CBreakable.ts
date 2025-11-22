// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x8B0
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBreakable  = {
	...server_CBaseModelEntity,
	m_CPropDataComponent: 2016n, // server::CPropDataComponent  | Schema_DeclaredClass | Size: 0x40
	m_Material: 2080n, // server::Materials  | Schema_DeclaredEnum | Size: 0x4
	m_hBreaker: 2084n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_Explosion: 2088n, // server::Explosions  | Schema_DeclaredEnum | Size: 0x4
	m_iszSpawnObject: 2096n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flPressureDelay: 2104n, // float32 m_flPressureDelay; |  0x838 | Schema_Builtin | Size: 0x4
	m_iMinHealthDmg: 2108n, // int32_t m_iMinHealthDmg; |  0x83c | Schema_Builtin | Size: 0x4
	m_iszPropData: 2112n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_impactEnergyScale: 2120n, // float32 m_impactEnergyScale; |  0x848 | Schema_Builtin | Size: 0x4
	m_nOverrideBlockLOS: 2124n, // server::EOverrideBlockLOS_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnBreak: 2128n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnHealthChanged: 2168n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_PerformanceMode: 2208n, // client::PerformanceMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_hPhysicsAttacker: 2212n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 2216n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
